import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainMenu from './ui/main-menu';
import PostList from './pages/post-list';
import NewsDetail from "./pages/news-detail";
import DiscountDetail from "./pages/discount-detail";

type Props = {};

class HomeScreen extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <MainMenu navigation={this.props.navigation}/>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
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
    }
},
{
    initialRouteName: "Home"
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default createAppContainer(AppNavigator);
