/**
 * component name
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import ScreenUtils from '../../../../Utils/ScreenUtils/ScreenUtils';

export default class RequiredpackagesItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.package_header}>
          <View style={styles.package_header_topR}>
            <Text style={styles.package_header_topR_text}>冰霜夏热醒肤系列</Text>
          </View>
        </View>
        <Image style={styles.package_img} source={require('../../../../../img/WX20170330-164651.png')}/>
        <View style={styles.price_box}>
          <Text style={styles.price_new}>¥998</Text>
          <Text style={styles.price_old}>¥3599.00</Text>
          <Text style={styles.purchased}>已购买1234</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 15
  },
  package_img: {
    width: ScreenUtils.scaleSize(351),
    height: ScreenUtils.scaleSize(200)
  },
  package_header_top: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  package_header_center: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
    lineHeight: 17
  },
  package_header_topL: {
    width: ScreenUtils.scaleSize(42),
    height: ScreenUtils.scaleSize(18),
    backgroundColor: '#FF6D99',
    justifyContent: 'center'
  },
  package_header_topR: {
    marginBottom: 15
  },
  package_header_topL_text: {
    fontSize: 12,
    color: '#fff',
    alignSelf: 'center',
  },
  package_header_topR_text: {
    fontSize: 16,
    color: '#363334'
  },
  package_header_centerL_text: {
    fontSize: 12,
    color: '#363334'
  },
  package_header_centerR_text: {
    fontSize: 12,
    color: '#292929'
  },
  price_box: {
    flexDirection: 'row',
    marginTop: 14,
    alignItems: 'flex-end'
  },
  price_new: {
    fontSize: 16,
    color: '#FF6D99'
  },
  price_old: {
    fontSize: 11,
    color: '#C9C6C6',
    marginLeft: 10,
    textDecorationLine: 'line-through',
    flex: 1
  },
  purchased: {
    fontSize: 12,
    color: '#363334'
  }
});
