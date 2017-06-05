// pages/index/index.js
import { toAlerta, toConsolea } from '../../actions/auth.js';
//import { enhancedConnect } from '../../utils/enhancedConnect.js';
import { connect } from '../../libs/wechat-weapp-redux.js';
console.log(connect)
const pageConfig = {
  data: {
    banner: {
      imgUrls: [
        'http://cdn.fangnuw.com/information/201704/1493192339733.png-tojpg',
        'http://cdn.fangnuw.com/information/201704/1492136627084.png-tojpg',
        'http://cdn.fangnuw.com/information/201705/1493977819740.jpg-tojpg'
      ],
      indicatorActiveColor: "#007aff",
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      circular: true
    },
    quickItem: [
      {
        name: "发布广告",
        icon: "../../image/quick-01.png"

      },
      {
        name: "儒牛商城",
        icon: "../../image/quick-02.png"
      },
      {
        name: "推广有奖",
        icon: "../../image/quick-03.png"
      },
      {
        name: "领卷中心",
        icon: "../../image/quick-04.png",
        hot: true
      },
      {
        name: "个人中心",
        icon: "../../image/quick-05.png"
      }
    ],
    newsItem:[]
  },
  tapAlert: function () {
    this.toAlert()
  },
  tapConsle: function () {
    this.toConsole()
  }
}
const mapStateToData = state => ({});

const mapDispatchToPage = dispatch => ({
  toAlert: () => dispatch(toAlerta()),
  toConsole: () => dispatch(toConsolea()),
});
const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig);
console.log(nextPageConfig)
Page(nextPageConfig);

