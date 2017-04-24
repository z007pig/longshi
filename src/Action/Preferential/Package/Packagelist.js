import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'

import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import PackageItemComponent from './components/PackageItem'

export default class PackagelistComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "套餐",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>

        <View style={styles.top}>
          <View style={styles.top_nav}>
            <Text style={[styles.top_nav_text,styles.active]}>光电美容</Text>
            <View style={styles.border_bottom}></View>
          </View>
          <View style={styles.top_nav}>
            <Text style={styles.top_nav_text}>微整形</Text>
          </View>
          <View style={styles.top_nav}>
            <Text style={styles.top_nav_text}>丽人</Text>
          </View>
        </View>
        <View style={styles.header}>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>分类</Text>
            <Image style={styles.header_item_img} source={require('../../Beauty/assets/icon_drop-down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>价格</Text>
            <Image style={styles.header_item_img} source={require('../../Home/assets/icon_down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>购买数</Text>
            <Image style={styles.header_item_img} source={require('../../Home/assets/icon_down.png')}/>
          </View>
        </View>
        <ScrollView>
          <View style={{marginTop: 10}}>
            <PackageItemComponent navigator={this.props.navigator}/>
          </View>
          <View style={{marginTop: 10}}>
            <PackageItemComponent navigator={this.props.navigator}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0EFF5',
    flex: 1
  },
  top: {
    backgroundColor: '#23232E',
    flexDirection: 'row',
    height: 55,
    paddingTop: 15
  },
  top_nav: {
    flex: 1,
    alignItems: 'center'
  },
  top_nav_text: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.5
  },
  active: {
    opacity: 1,
    marginBottom: 8
  },
  border_bottom: {
    width: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5
  },
  header: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#fff'
  },
  header_item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  header_item_text: {
    fontSize: 14,
    color: '#363334',
    marginRight: 5
  },
  list_box: {
    marginTop: 12,
    marginHorizontal: 12
  }
});
