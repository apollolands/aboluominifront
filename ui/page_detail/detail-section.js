import React, {Component} from 'react';
import {View, Text} from 'react-native';

type Props = {
  detail: Object
};

export default class DetailSection extends Component<Props> {
  render() {
    return (
      <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 23, lineHeight: 40}}>
          {this.props.detail.title}
        </Text>
        <Text style={{flexGrow: 1, fontSize: 16, lineHeight: 30}}>
          {this.props.detail.content}
        </Text>
        <Text style={{flexGrow: 1, fontSize: 16, paddingTop: 10, lineHeight: 30, fontWeight: 'bold'}}>
          价格{this.props.detail.amounts}
        </Text>
        <Text style={{flexGrow: 1, fontSize: 16, paddingTop: 10, lineHeight: 30, fontWeight: 'bold'}}>
          {this.props.detail.nickname}发布于{this.props.detail.create_time}
        </Text>
      </View>
    );
  }
}