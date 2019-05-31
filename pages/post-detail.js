import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, FlatList, Image} from 'react-native';
import rest from '../http/rest';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Divider} from 'react-native-elements';
import LoadingShimmer from '../ui/loading-shimmer';
import Rent from '../ui/page_detail/rent';

type Props = {navigation: Object};

export default class PostDetail extends Component<Props> {

  state = {
    detail: null
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Default'),
    };
  };

  async fetchDetail() {
    return new Promise((resolve, reject) => {
      rest.POST(
        'Information/getInformationDetail',
        `info_id=${this.props.navigation.getParam('id', '0')}&is_ad=${this.props.navigation.getParam('isAd', '0')}`)
        .then((response) => {
          resolve(response.json())
      }).catch((error) => {
        console.error(error.message);
        reject(error);
      });
    });
  }

  async componentWillMount() {
    const detail = await this.fetchDetail();
    console.log(detail);
    this.setState({
      detail
    });
  }

  render() {
    if (this.state.detail) {
      return (
        <View style={{flex: 1}}>
          <Rent detail={this.state.detail.data} />
        </View>
      );
    } else {
      return (
        <LoadingShimmer />
      );
    }
  }
}

