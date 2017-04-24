/**
 * page 支付订单
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'

import ScreenUtils from '../../utils/ScreenUtils';

import TopNavComponent from '../common/TopNav';
import PayProductInfoComponent from './PayProductInfo';
import PayCompleteComponent from './PayComplete'

export default class PayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userye: false,
      userwx: true,
      userzfb: false
    };
  }

  _changeyeState(){
    // 用this.setState方法去改变state
    //使用余额
    this.setState({
      userye: true,
      userwx: false,
      userzfb: false
    })
  }

  _changewxState(){
    // 用this.setState方法去改变state
    //使用wx
    this.setState({
      userye: false,
      userwx: true,
      userzfb: false
    })
  }

  _changezfbState(){
    // 用this.setState方法去改变state
    //使用支付宝
    this.setState({
      userye: false,
      userwx: false,
      userzfb: true
    })
  }

  _pay(){
    const navigator = this.props.navigator;
    if (navigator) {
      navigator.push({
        name:'payComplete',
        component: PayCompleteComponent
      });
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="支付订单" navigator={this.props.navigator}/>

        <ScrollView style={{flex:1}}>
          <PayProductInfoComponent />

          <TouchableOpacity style={styles.myaccount_wrapper} onPress={this._changeyeState.bind(this)}>
            <Text style={styles.myaccount_label}>我的会员余额：</Text>
            <Text style={styles.myaccount_count}>￥100.00</Text>
            {this.state.userye
              ? <Image source={require('./image/check_n.png')} style={styles.check}/>
              : <Image source={require('./image/check_dis.png')} style={styles.check}/>
            }
          </TouchableOpacity>

          <View style={styles.pay_ways}>
            <View style={styles.pay_ways_title}>
              <Text style={styles.pay_ways_title_text}>请选择支付方式</Text>
            </View>
            <TouchableOpacity style={[styles.pay_ways_item, {borderBottomWidth: 0.5,borderColor:'#D7D7D7',}]} onPress={this._changewxState.bind(this)}>
              <Image source={require('./image/icon_weix2.png')}/>
              <Text style={styles.pay_ways_item_name}>微信</Text>
              {this.state.userwx
                ? <Image source={require('./image/check_n.png')} style={styles.check}/>
                : <Image source={require('./image/check_dis.png')} style={styles.check}/>
              }
            </TouchableOpacity>
            <TouchableOpacity style={styles.pay_ways_item} onPress={this._changezfbState.bind(this)}>
              <Image source={require('./image/icon_zhifu.png')}/>
              <Text style={styles.pay_ways_item_name}>支付宝</Text>
              {this.state.userzfb
                ? <Image source={require('./image/check_n.png')} style={styles.check}/>
                : <Image source={require('./image/check_dis.png')} style={styles.check}/>
              }
            </TouchableOpacity>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.pay_btn} onPress={this._pay.bind(this)}>
          <Text style={styles.pay_btn_text}>支付订单</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0EFF5',
    flex: 1
  },
  pay_btn:{
    height: 50,
    backgroundColor:'#FF6D99',
    justifyContent:'center'
  },
  pay_btn_text:{
    color:'#fff',
    fontSize: 14,
    alignSelf:'center'
  },
  myaccount_wrapper:{
    backgroundColor:'#fff',
    flexDirection:'row',
    height:50,
    paddingHorizontal:12,
    alignItems:'center',
    marginBottom: 10,
    marginTop: 10
  },
  myaccount_label:{
    flex:1,
    fontSize: 14,
    color:'#656565'
  },
  myaccount_count:{
    color:'#D9BD8C',
    fontSize: 14,
    marginRight:3
  },
  pay_ways:{
    backgroundColor:'#fff'
  },
  pay_ways_title:{
    height:40,
    borderBottomWidth: 0.5,
    borderColor:'#D7D7D7',
    marginLeft: 12,
    justifyContent:'center'
  },
  pay_ways_title_text:{
    fontSize: 12,
    color:'#656565'
  },
  pay_ways_item:{
    flexDirection:'row',
    marginLeft: 12,
    alignItems:'center',
    height:50,
    paddingRight: 12
  },
  pay_ways_item_name:{
    flex:1,
    marginLeft: 10
  }
});
