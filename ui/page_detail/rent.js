import React, {Component} from 'react';
import CarouselSlide from "../carousel-slider";
import {View, Text} from 'react-native';

type Props = {
  detail: Object
};

export default class Rent extends Component<Props> {
  render() {
    console.log(this.props.detail.picture);
    return (
      <View style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <View style={{display: 'flex', height: 210}}>
          <CarouselSlide slides={this.props.detail.picture} />
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            {this.props.detail.title}
          </Text>
          <Text>
            {this.props.detail.content}
          </Text>
        </View>
      </View>
    );
  }
}