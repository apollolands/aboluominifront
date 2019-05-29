import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';

type Props = {navigation: Object};

export default class Login extends Component<Props> {
  state = {
    username: null,
    password: null
  };

  async componentWillMount() {
  }

  login() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <ImageBackground source={require('../image/login.jpeg')} style={styles.imageBg}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../image/logo.png')} />
          <View style={styles.subcontainer}>
            <Input
              placeholder='用户名'
              leftIcon={{ type: 'font-awesome', name: 'user', size: 20 }}
              inputStyle={styles.username}
            />
            <Input
              placeholder='密码'
              leftIcon={{ type: 'font-awesome', name: 'lock', size: 20 }}
              rightIcon={{type: 'font-awesome', name: 'eye', size: 20}}
              inputStyle={styles.username}
            />
            <View style={{marginHorizontal: 10, marginVertical: 20}}>
              <Button
                title="Clear button"
                type="solid"
                raised
                title="登陆"
                onPress={() => {
                  this.login();
                }}
                buttonStyle={{padding: 10, borderRadius: 20, borderColor: '#db4538', backgroundColor: '#db4538'}}
              />
            </View>
            <Text style={{fontSize: 12, paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center'}}>还没有账号？注册账号</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBg: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    height: '50%',
    width: '80%',
    backgroundColor: '#F5FCFF',
    borderRadius: 10,
    borderColor: '#F5FCFF',
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    alignSelf: 'center',
    marginTop: 50,
    paddingBottom: 20,
    height: 70,
    width: 70,
  },
  subcontainer: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 30
  },
  username: {
    fontSize: 15,
    paddingHorizontal: 16
  },
});