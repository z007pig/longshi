/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */
var ReactNative = require('react-native');
var Dimensions = require('Dimensions');
export var screenW = Dimensions.get('window').width;
export var screenH = Dimensions.get('window').height;
var fontScale = ReactNative.PixelRatio.getFontScale();
export var pixelRatio = ReactNative.PixelRatio.get();
const r2 = 2;
const w2 = 750 / r2;

const h2 = 1334 / r2;
/**
 * 设置text为sp
 * @param size  sp
 * @returns {Number} dp
 */
// export const DEFAULT_DENSITY = 2;
export function setSpText(size : Number) {
    var scaleWidth = screenW / w2;
    var scaleHeight = screenH / h2;
    // var scale = Math.min(scaleWidth, scaleHeight);
    // 只以宽度作为比例
    var scale = scaleWidth;
    size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
    return size;
}
/**
 * 屏幕适配,缩放size
 * @param size
 * @returns {Number}
 * @constructor
 */
export function scaleSize(size : Number) {
    var scaleWidth = screenW / w2;
    var scaleHeight = screenH / h2;
    // var scale = Math.min(scaleWidth, scaleHeight);
    // 只以宽度作为比例
    var scale = scaleWidth;
    size = Math.round((size * scale + 0.5));
    return size;
}

export default {
  screenW,
  screenH,
  pixelRatio,
  setSpText,
  scaleSize
}
