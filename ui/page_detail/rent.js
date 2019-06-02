import React, {Component} from 'react';
import CarouselSlide from "../carousel-slider";
import {ScrollView, View, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements'
import DetailSection from './detail-section';

type Props = {
  detail: Object
};

const properties = {
  houseTypeImage: [
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_dd.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_dd_s.png",
      "title": "独立屋"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_gy.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_gy_s.png",
      "title": "公寓"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_hz.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_hz_s.png",
      "title": "共有公寓"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_lp.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_lp_s.png",
      "title": "联排房屋"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_hdf.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/abl/btn_hdf_s.png",
      "title": "活动房屋"
    }
  ],
  houseApplicationsImage: [
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_j_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_jj.png",
      "attribute": "house_furniture",
      "title": "家具"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_kzf_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_kzf.png",
      "attribute": "house_cook",
      "title": "可做饭"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_tcw_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_tcw.png",
      "attribute": "house_car_position",
      "title": "停车位"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_xyj_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_xyj.png",
      "attribute": "house_wash",
      "title": "洗衣机"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_bx_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_bx.png",
      "attribute": "house_refrigerator",
      "title": "冰箱"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_nq_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_nq.png",
      "attribute": "house_heating",
      "title": "暖气"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_kt_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_kt.png",
      "attribute": "house_air",
      "title": "空调"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_kd_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_kd.png",
      "attribute": "house_web",
      "title": "宽带"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_sfdj_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_sfwdj.png",
      "attribute": "house_single",
      "title": "单间"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_cq_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_sfrxcw.png",
      "attribute": "allow_pet",
      "title": "许宠物"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_cy_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_sfyxcy.png",
      "attribute": "allow_smoke",
      "title": "许抽烟"
    },
    {
      "src": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_wsj_n.png",
      "srcActive": "http://abl-file.uuudoo.com/Uploads/miniimg/btn_sfywsj.png",
      "attribute": "bathroom_type",
      "title": "独立卫生间"
    },
  ]
};

export default class Rent extends Component<Props> {
  render() {
    const houseApplicationView = [];
    for (var i=0; i<properties.houseApplicationsImage.length; i++) {
      const uri = this.props.detail[properties.houseApplicationsImage[i].attribute] === '1' ?
        properties.houseApplicationsImage[i].srcActive : properties.houseApplicationsImage[i].src;
      houseApplicationView.push(
        <View style={{width: '20%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: 10}}>
          <Image style={{height: 35, width: 35}} resizeMode={'contain'} source={{uri: uri}} />
          <Text>{properties.houseApplicationsImage[i].title}</Text>
        </View>
      );
    }

    const houseTypeView = [];
    for (var i=0; i<properties.houseTypeImage.length; i++) {
      const uri = this.props.detail.house_type === properties.houseTypeImage[i].title ?
        properties.houseTypeImage[i].srcActive : properties.houseTypeImage[i].src;
      houseTypeView.push(
        <View style={{width: '20%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: 10}}>
          <Image style={{height: 45, width: 45}} resizeMode={'contain'} source={{uri: uri}} />
          <Text>{properties.houseTypeImage[i].title}</Text>
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
        <Text style={{paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom:10, fontSize: 18, fontWeight: 'bold', lineHeight: 40}}>房屋类型：</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
          {houseTypeView}
        </View>
        <Divider style={{marginLeft: 30, marginRight: 30, backgroundColor: 'grey', marginTop: 20}} />
        <Text style={{paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom:10, fontSize: 18, fontWeight: 'bold', lineHeight: 40}}>以下内容点亮则代表有或允许：</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
          {houseApplicationView}
        </View>
      </ScrollView>
    );
  }
}