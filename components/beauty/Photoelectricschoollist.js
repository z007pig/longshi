import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import TopNavComponent from '../common/TopNav'
import PhotoelectricschoollistPhotoComponent from './PhotoelectricschoollistPhoto'
import PhotoelectricschoolddetailComponent from './Photoelectricschoolddetail'

export default class PhotoelectricschoollistComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goPhotoelectricschoolddetail() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Photoelectricschoolddetail',
        component: PhotoelectricschoolddetailComponent
      });
    }
  }

  static defaultProps = {
    title: '光电学堂'
  };

  render () {
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title={this.props.title} navigator={this.props.navigator}/>
        <View style={styles.header}>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>分类</Text>
            <Image style={styles.header_item_img} source={require('./image/icon_drop-down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>浏览量</Text>
            <Image style={styles.header_item_img} source={require('../home/image/icon_down.png')}/>
          </View>
        </View>
        <ScrollView>
          <TouchableOpacity style={{marginTop: 10}} onPress={this._goPhotoelectricschoolddetail.bind(this)}>
            <PhotoelectricschoollistPhotoComponent/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 10}}>
            <PhotoelectricschoollistPhotoComponent/>
          </TouchableOpacity>
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
});
