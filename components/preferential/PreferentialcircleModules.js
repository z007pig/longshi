import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import {scaleSize,setSpText} from '../../utils/ScreenUtils';
import SpecialComponent from './Special'
import PackagelistComponent from './Packagelist'
import GrouppurchaseComponent from './Grouppurchase'

export default class PreferentialcircleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goSpecial() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Special',
        component: SpecialComponent
      });
    }
  }

  _goPackagelist() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Packagelist',
        component: PackagelistComponent
      });
    }
  }

  _goGrouppurchase() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Grouppurchase',
        component: GrouppurchaseComponent
      });
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.item_line}>
          <TouchableOpacity style={styles.item} onPress={this._goSpecial.bind(this)}>
            <Image style={styles.item_icon} source={require('../beauty/image/icon_all.png')}/>
            <Text style={styles.item_title}>专场</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goGrouppurchase.bind(this)}>
            <Image style={styles.item_icon} source={require('../beauty/image/icon_face.png')}/>
            <Text style={styles.item_title}>团购</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goPackagelist.bind(this)}>
            <Image style={styles.item_icon} source={require('../beauty/image/icon_skin.png')}/>
            <Text style={styles.item_title}>套餐</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image style={styles.item_icon} source={require('../beauty/image/icon_body.png')}/>
            <Text style={styles.item_title}>解决方案</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
    backgroundColor:'#fff',
  },
  item_line: {
    flexDirection: 'row'
  },
  item: {
    flex:1,
  },
  item_icon:{
    alignSelf:'center',
    marginTop: 25,
    marginBottom:5
  },
  item_title: {
    textAlign:'center',
    fontSize:12,
    color:'#363334',
    lineHeight:17
  }
});
