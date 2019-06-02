
import React, {Component} from 'react';
import CarouselSlide from "../carousel-slider";
import {ScrollView, View, Text, Image} from 'react-native';
import DetailSection from './detail-section';

type Props = {
  detail: Object
};

export default class SecondHand extends Component<Props> {
  render() {
    console.log(this.props.detail.picture);
    return (
      <ScrollView style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <View style={{ display: 'flex', height: 210 }}>
          <CarouselSlide slides={this.props.detail.picture}/>
        </View>
        <DetailSection detail={this.props.detail}/>
      </ScrollView>
    );
  }
}