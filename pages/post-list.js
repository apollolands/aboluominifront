import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import rest from '../http/rest';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

type Props = {navigation: Object};

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

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
        rest.POST('Information/InformationList', `city_id=11&channel_id=${this.props.id}&type=${i}`).then((response) => {
          resolve(response.json())
        }).catch((error) => {
          console.error(error.message);
          reject(error);
        });
      });
    }

    listView() {
      return (
        <View>
          <Text>123</Text>
        </View>
      );
    }

    genSceneMap() {
      let result = {};
      this.state.routes.map((route) => {
        result[route.key] = SecondRoute;
      });
      return result;
    }

    render() {
        if (this.state.tabs.length > 0) {
          if (this.state.tabs.length === 1) {
            return (
              <View style={styles.container}>
              </View>
            );
          } else {
            let scenes = this.genSceneMap();
            console.log(scenes);
            return (
              <TabView
                renderTabBar={props =>
                  <TabBar
                    {...props}
                    style={{backgroundColor: 'white'}}
                    indicatorStyle={{ backgroundColor:'blue'}}
                    renderLabel={({ route, focused, color }) => (
                      <Text style={{color: 'black', margin: 8, fontWeight: 'bold'}}>
                        {route.title}
                      </Text>
                    )}
                  />
                }
                navigationState={this.state}
                renderScene={SceneMap(scenes)}
                onIndexChange={index => this.setState({index})}
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