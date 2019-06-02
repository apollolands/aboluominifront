import React, {Component} from 'react';
import CarouselSlide from "../carousel-slider";
import {ScrollView, View, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements'
import DetailSection from './detail-section';

type Props = {
  detail: Object
};

const properties = {
  carTypeImage: [
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_suv.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_suv_s.png",
      "title": "SUV"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_smc.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_smc_s.png",
      "title": "四门轿车"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_hc.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_hc_s.png",
      "title": "货车"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_xshc.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_xshc_s.png",
      "title": "厢式货车"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_smjc.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_smjc_s.png",
      "title": "二门轿车"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_cppc.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_cppc_s.png",
      "title": "敞篷车"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_pc.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_pc_s.png",
      "title": "跑车"
    }
  ],
  carAccidentImage: [
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_sgc.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_sgc_s.png",
      "title": ["有", "无"]
    },
  ],
  carStatusImage: [
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_lh.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_lh_s.png",
      "title": "非常好"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_qx.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_yb_s.png",
      "title": "很好"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_yb.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_ps_s.png",
      "title": "一般"
    },
  ],
  carGenreImage: [
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_rh.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_rh_s.png",
      "title": "日韩"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_oz.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_oz_s.png",
      "title": "欧洲"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_mg.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_mg_s.png",
      "title": "美国"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_dz.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_dz_s.png",
      "title": "其他"
    },
  ]
};

export default class Car extends Component<Props> {
  render() {
    const carTypeImageView = [];
    for (var i=0; i<properties.carTypeImage.length; i++) {
      const uri = this.props.detail.car_type === properties.carTypeImage[i].title ?
        properties.carTypeImage[i].srcActive : properties.carTypeImage[i].src;
      carTypeImageView.push(
        <View style={{width: '20%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: 10}}>
          <Image style={{height: 45, width: 45}} resizeMode={'contain'} source={{uri: uri}} />
          <Text>{properties.carTypeImage[i].title}</Text>
        </View>
      );
    }

    const carAccidentImageView = [];
    for (var i=0; i<properties.carAccidentImage.length; i++) {
      const uri = this.props.detail.car_accident === '0' ?
        properties.carAccidentImage[i].src : properties.carAccidentImage[i].srcActive;
      carAccidentImageView.push(
        <View style={{width: '20%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: 10}}>
          <Image style={{height: 45, width: 45}} resizeMode={'contain'} source={{uri: uri}} />
          <Text>{properties.carAccidentImage[i].title}</Text>
        </View>
      );
    }

    const carStatusImageView = [];
    for (var i=0; i<properties.carStatusImage.length; i++) {
      const uri = this.props.detail.car_status === properties.carStatusImage[i].title ?
        properties.carStatusImage[i].srcActive : properties.carStatusImage[i].src;
      carStatusImageView.push(
        <View style={{width: '20%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: 10}}>
          <Image style={{height: 45, width: 45}} resizeMode={'contain'} source={{uri: uri}} />
          <Text>{properties.carStatusImage[i].title}</Text>
        </View>
      );
    }

    const carGenreImageView = [];
    for (var i=0; i<properties.carGenreImage.length; i++) {
      const uri = this.props.detail.car_country === properties.carGenreImage[i].title ?
        properties.carGenreImage[i].srcActive : properties.carGenreImage[i].src;
      carGenreImageView.push(
        <View style={{width: '20%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: 10}}>
          <Image style={{height: 45, width: 45}} resizeMode={'contain'} source={{uri: uri}} />
          <Text>{properties.carGenreImage[i].title}</Text>
        </View>
      );
    }
    return (

      <ScrollView style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <View style={{display: 'flex', height: 210}}>
          <CarouselSlide slides={this.props.detail.picture} />
        </View>
        <DetailSection detail={this.props.detail} />
        <Divider style={{marginLeft: 30, marginRight: 30, backgroundColor: 'grey', marginTop: 20}} />
        <Text style={{paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom:10, fontSize: 18, fontWeight: 'bold', lineHeight: 40}}>车辆类型：</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
          {carTypeImageView}
        </View>
        <Divider style={{marginLeft: 30, marginRight: 30, backgroundColor: 'grey', marginTop: 20}} />
        <Text style={{paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom:10, fontSize: 18, fontWeight: 'bold', lineHeight: 40}}>有无事故：</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
          {carAccidentImageView}
        </View>
        <Divider style={{marginLeft: 30, marginRight: 30, backgroundColor: 'grey', marginTop: 20}} />
        <Text style={{paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom:10, fontSize: 18, fontWeight: 'bold', lineHeight: 40}}>车辆状态：</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
          {carStatusImageView}
        </View>
        <Divider style={{marginLeft: 30, marginRight: 30, backgroundColor: 'grey', marginTop: 20}} />
        <Text style={{paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom:10, fontSize: 18, fontWeight: 'bold', lineHeight: 40}}>车系：</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
          {carGenreImageView}
        </View>
      </ScrollView>
    );
  }
}