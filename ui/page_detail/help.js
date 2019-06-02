import React, {Component} from 'react';
import CarouselSlide from "../carousel-slider";
import {ScrollView, View, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements'
import DetailSection from './detail-section';

type Props = {
  detail: Object
};

export default class Help extends Component<Props> {
  render() {
    return (
      <ScrollView style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <View style={{display: 'flex', height: 210}}>
          <CarouselSlide slides={this.props.detail.picture} />
        </View>
        <DetailSection detail={this.props.detail} />
        <Divider style={{marginLeft: 30, marginRight: 30, backgroundColor: 'grey', marginTop: 20}} />
        <Text style={{paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom:10, fontSize: 18, fontWeight: 'bold', lineHeight: 40}}>工作类型：</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
          {jobTypeImageView}
        </View>
      </ScrollView>
    );
  }
}