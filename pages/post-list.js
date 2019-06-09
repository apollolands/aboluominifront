import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, FlatList, Image, TouchableOpacity} from 'react-native';
import rest from '../http/rest';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Divider} from 'react-native-elements';
import LoadingShimmer from '../ui/loading-shimmer';

type Props = {navigation: Object};

export default class PostList extends Component<Props> {
    state = {
        tabs: [],
        index: 0,
        shouldHideTab: false,
        page: 1,
        channelId: 0,
    };

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('name', 'Default'),
        };
    };

    refreshData(posts, shouldAppendData) {
        if (this.state.tabs.length === 0) {
            let tabs = this.state.tabs;
            if (shouldAppendData) {
                tabs[0].posts = tabs[0].posts.concat(posts);
            } else {
                tabs.push({posts: posts});
            }
            this.setState({
                tabs: tabs,
                shouldHideTab: true,
                page: this.state.page + 1
            });
        } else {
            let tabs = this.state.tabs;
            if (shouldAppendData) {
                tabs[this.state.index].posts = tabs[this.state.index].posts.concat(posts);
            } else {
                tabs[this.state.index].posts = posts;
            }
            this.setState({
              tabs: tabs,
              page: this.state.page + 1,
            });
        }
    }

    populateRoutes(tabs) {
      let routes = [];
      tabs.map((tab) => {
        routes.push({
          key: tab.child_id,
          title: tab.child_name
        });
      });
      this.setState({
        routes
      });
    }

    async componentWillMount() {
        const tabs = await this.fetchChannelTabs();
        this.populateRoutes(tabs.data.list);
        this.setState({
          tabs: tabs.data.list
        });
        const posts = await this.fetchPostList(this.state.tabs.length > 0, 1);
        console.log(posts);
        this.refreshData(posts.data.list, false);
    }

    async fetchChannelTabs() {
      return new Promise((resolve, reject) => {
        rest.POST('Information/getChannelChild', `channel_id=${this.props.navigation.getParam('id', '265')}`).then((response) => {
          resolve(response.json())
        }).catch((error) => {
          console.error(error.message);
          reject(error);
        });
      });
    };

    async fetchPostList(hasTab, index) {
      const i = hasTab? index : 0;
      return new Promise((resolve, reject) => {
        rest.POST('Information/InformationList', `city_id=11&channel_id=${this.props.navigation.getParam('id', '265')}&type=${i}`).then((response) => {
          resolve(response.json())
        }).catch((error) => {
          console.error(error.message);
          reject(error);
        });
      });
    }

    renderListItem(data) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PostDetail', {
              id: data.item.info_id,
              isAd: data.item.is_ad,
              title: data.item.type_name,
            })
          }}>
          <View key={data.index} style={{marginTop: 20}}>
            <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
              <View style={{width: 100}}>
                <Image style={{height: 90, width: 90, borderRadius: 10}} source={{uri: data.item.picture}} />
              </View>
              <View style={{display: 'flex', flexGrow: 1, flexDirection: 'column', marginLeft: 10, marginRight: 15}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>{data.item.title}</Text>
                <Text style={{fontSize: 14, marginTop: 5, lineHeight: 20, flexWrap: 'wrap', textAlign: 'left', flexGrow: 1, marginBottom: 5, marginRight: 90, paddingRight: 20}}>{data.item.content}</Text>
                <Text style={{fontSize: 14}}>价格 {data.item.amounts}</Text>
              </View>
            </View>
            <Divider style={{marginLeft: 30, marginRight: 30, marginTop: 20, backgroundColor: 'grey' }} />
          </View>
        </TouchableOpacity>
      );
    }

    renderScene = ({route}) => {
      let index = parseInt(route.key) - 1;
      if (this.state.tabs[index].posts && this.state.tabs[index].posts.length > 0) {
        return (
          <FlatList
            style={{flex: 1}}
            data = {this.state.tabs[index].posts}
            renderItem = {this.renderListItem.bind(this)}
          />
        );
      }
      return (
        <LoadingShimmer />
      );
    };

    async onTabChange(index) {
      this.setState({index: index})
      if (index > 0 && !this.state.tabs[index].posts) {
        console.log("123");
        let posts = await this.fetchPostList(this.state.tabs.length > 0, index + 1);
        let tabs = this.state.tabs;
        tabs[index].posts = posts.data.list;
        this.setState({
          tabs: tabs,
        });
      }
    }

    // genSceneMap() {
    //   let result = {};
    //   this.state.routes.map((route) => {
    //     result[route.key] = SecondRoute;
    //   });
    //   return result;
    // }

    render() {
        if (this.state.tabs.length > 0) {
          if (this.state.tabs.length === 1) {
            return (
              <View style={styles.container}>
              </View>
            );
          } else {
            return (
              <TabView
                onIndexChange={(index) => this.onTabChange(index)}
                renderTabBar={props =>
                  <TabBar
                    {...props}
                    style={{backgroundColor: 'white'}}
                    indicatorStyle={{ backgroundColor:'#db4538'}}
                    renderLabel={({ route, focused, color }) => (
                      <Text style={{color: '#db4538', margin: 8, fontWeight: 'bold'}}>
                        {route.title}
                      </Text>
                    )}
                  />
                }
                navigationState={this.state}
                renderScene={this.renderScene}
                initialLayout={{ width: Dimensions.get('window').width }}
              />
            );
          }
        } else {
          return (
            <View style={styles.container}>
            </View>
          );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    scene: {
      flex: 1
    }
});