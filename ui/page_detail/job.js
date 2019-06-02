import React, {Component} from 'react';
import CarouselSlide from "../carousel-slider";
import {ScrollView, View, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements'
import DetailSection from './detail-section';

type Props = {
  detail: Object
};

const properties = {
  jobTypeImage: [
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_htg.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_htg_s.png",
      "title": "合同工"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_qz.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_qz_s.png",
      "title": "全职"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_jz.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_jz_s.png",
      "title": "兼职"
    }
  ]
};

export default class Job extends Component<Props> {
  render() {
    const jobTypeImageView = [];
    for (var i=0; i<properties.jobTypeImage.length; i++) {
      const uri = this.props.detail.work_type === properties.jobTypeImage[i].title ?
        properties.jobTypeImage[i].srcActive : properties.jobTypeImage[i].src;
      jobTypeImageView.push(
        <View style={{width: '20%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: 10}}>
          <Image style={{height: 45, width: 45}} resizeMode={'contain'} source={{uri: uri}} />
          <Text>{properties.jobTypeImage[i].title}</Text>
        </View>
      );
    }
    console.log(this.props.detail.picture);
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