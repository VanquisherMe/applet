// pages/index/index.js
import { toAlerta, toConsolea } from '../../actions/auth.js';
//import { enhancedConnect } from '../../utils/enhancedConnect.js';
import { connect } from '../../libs/wechat-weapp-redux.js';
console.log(connect)
const pageConfig = {
  data: {
    projectForm: {
      name: ''
    }
  },
  onLoad: function (options){
    this.toAlert()
  },
  onUnload:function(){},
  tapAlert:function(){
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

