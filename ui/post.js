import React, {Component} from 'react';
import rest from '../http/rest';
import LoadingShimmer from './loading-shimmer';
import {StyleSheet, ScrollView, Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {Image, Divider, Card} from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import Modal from "react-native-modal";

type Props = {navigation: Object};

export default class Post extends Component<Props> {
  state = {
    channels: [],
    genre: [],
    channelId: null
  };

  async fetchMainMenuData() {
    return new Promise((resolve, reject) => {
      rest.POST('Index/index', 'city_id=11&p=0').then((response) => {
        resolve(response.json())
      }).catch((error) => {
        console.error(error.message);
        reject(error);
      });
    });
  }

  async fetchChannelGenre(channelId) {
    return new Promise((resolve, reject) => {
      rest.POST('Information/getChannelChild', `channel_id=${channelId}`).then((response) => {
        resolve(response.json())
      }).catch((error) => {
        console.error(error.message);
        reject(error);
      });
    });
  }

  async componentWillMount() {
    const menu = await this.fetchMainMenuData();
    this.setState({
      channels: menu.data.channels
    });
  }

  async openModal(channelId) {
    const data = await this.fetchChannelGenre(channelId);
    this.setState({
      genre: data.data.list,
      channelId: channelId
    });
  }

  openDraft(childId) {
    this.setState({
      genre: []
    });
    this.props.navigation.navigate('PostDraft', {
      channelId: this.state.channelId,
      childId: childId
    })
  }

  render () {
    if (!this.state.channels || this.state.channels.length === 0) {
      return (
        <LoadingShimmer />
      );
    } else {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{alignItems: 'flex-start', paddingLeft: 20, paddingTop: 10}}>
            <Text style={{fontSize: 18,  color: 'black', padding: 13}}>选择发布板块</Text>
          </View>
          <View>
            {
              this.state.channels.map((item, index) => (
                <ListItem
                  key={index}
                  leftAvatar={{ source: { uri: item.icon}, avatarStyle: {margin: 5} }}
                  title={item.name}
                  bottomDivider
                  rightIcon={{ name: 'chevron-right' }}
                  onPress={() => this.openModal(item.channel_id)}
                />
              ))
            }
          </View>
          <Modal
            isVisible={this.state.genre.length > 0}
            style={{justifyContent: 'flex-end', margin: 0}}
            swipeDirection="left"
            onSwipeComplete={() => this.setState({ genre: [] })}
            onBackButtonPress={() => {
              this.setState({
                genre: []
              })
            }}>
            <View style={{flex: 1}}>
              {
                this.state.genre.map((item, index) => (
                  <ListItem
                    animationIn='slideInUp'
                    animationOut='slideOutDown'
                    key={index}
                    title={item.child_name}
                    bottomDivider
                    rightIcon={{ name: 'chevron-right' }}
                    onPress={() => this.openDraft(item.child_id)}
                  />
                ))
              }
            </View>
          </Modal>
        </View>
      );
    }
  }
}