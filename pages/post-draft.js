import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Dimensions, FlatList, Image, TouchableOpacity} from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

type Props = {navigation: Object};

export default class PostDraft extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', marginHorizontal: 15}}>
              <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: 10, marginRight: 10}}>
                <Text style={{fontSize: 18}}>标题</Text>
              </View>
              <Input
                placeholder='标题内容'
                inputStyle={styles.textStyle}
              />
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 15}}>
              <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: 10, marginRight: 10}}>
                <Text style={{fontSize: 18}}>描述</Text>
              </View>
              <Input
                placeholder='描述内容'
                inputStyle={styles.textStyle}
              />
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 15}}>
              <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: 10, marginRight: 10}}>
                <Text style={{fontSize: 18}}>价位</Text>
              </View>
              <Input
                placeholder='价位（可选）'
                inputStyle={styles.textStyle}
              />
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 15}}>
              <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: 10, marginRight: 10}}>
                <Text style={{fontSize: 18}}>城市</Text>
              </View>
              <Input
                placeholder='美国 大旧金山'
                inputStyle={styles.textStyle}
              />
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 15}}>
              <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: 10, marginRight: 10}}>
                <Text style={{fontSize: 18}}>邮箱</Text>
              </View>
              <Input
                placeholder='邮箱（可选）'
                inputStyle={styles.textStyle}
              />
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 15}}>
              <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: 10, marginRight: 10}}>
                <Text style={{fontSize: 18}}>详细地址</Text>
              </View>
              <Input
                placeholder='详细地址（可选）'
                inputStyle={styles.textStyle}
              />
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 15}}>
              <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: 10, marginRight: 10}}>
                <Text style={{fontSize: 18}}>联系电话</Text>
              </View>
              <Input
                placeholder='联系电话（可选）'
                inputStyle={styles.textStyle}
              />
            </View>
          </View>
        </ScrollView>
        <View style={{display: 'flex', flexDirection: 'column', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}>
          <Button
            type="solid"
            raised
            title="提交"
            onPress={() => {
            }}
            containerViewStyle={{width: '100%'}}
            buttonStyle={{padding: 10, borderRadius: 20, borderColor: '#db4538', backgroundColor: '#db4538'}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    paddingHorizontal: 16,
  }
});