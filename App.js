import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import MainMenu from './ui/main-menu';
import Post from './ui/post';
import PostList from './pages/post-list';
import NewsDetail from "./pages/news-detail";
import DiscountDetail from "./pages/discount-detail";
import Login from './pages/login';
import PostDetail from './pages/post-detail';
import Icon from 'react-native-vector-icons/FontAwesome';
import PostDraft from "./pages/post-draft";

type Props = {};

class HomeScreen extends Component<Props> {

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainMenu navigation={this.props.navigation}/>
        </View>
      </ScrollView>
    );
  }
}

class PostScreen extends  Component<Props> {
  render() {
    return (
      <ScrollView>
        <View>
          <Post navigation={this.props.navigation}/>
        </View>
      </ScrollView>
    );
  }
}

class SettingScreen extends  Component<Props> {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainMenu navigation={this.props.navigation}/>
        </View>
      </ScrollView>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
  Main: {
    screen: HomeScreen,
    title: '首页',
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20} color={tintColor} />
      )
    },
  },
  Post: {
    screen: PostScreen,
    title: '发布',
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="plus" size={20} color={tintColor} />
      )
    },
  },
  Setting: {
    screen: SettingScreen,
    title: '我的',
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="vcard" size={20} color={tintColor} />
      )
    },
  }
},
{
  initialRouteName: 'Main',
  activeColor: '#1269d3',
  inactiveColor: '#b1b1b1',
  barStyle: { backgroundColor: '#ffffff' },
  showIcon: true
});

const AppNavigator = createStackNavigator({
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null
      },
    },
    PostsList: {
        screen: PostList,
    },
    NewsDetail: {
        screen: NewsDetail,
    },
    DiscountDetail: {
        screen: DiscountDetail,
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
        header: null
      },
    },
    PostDetail: {
      screen: PostDetail,
    },
    PostDraft: {
      screen: PostDraft,
    }
},
{
    initialRouteName: "Login"
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingBottom: 30
  }
});

export default createAppContainer(AppNavigator);
