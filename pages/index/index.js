// pages/index/index.js
import { toAlerta, toConsolea } from '../../actions/auth';
console.log(toAlerta)
const pageConfig = {
  data: {
    projectForm: {
      name: ''
    }
  },
  tapAlert:function(){
    this.toAlert()
  },
  tapConsle: function () {

  }
}
const mapStateToData = state => {};

const mapDispatchToPage = dispatch => ({
  toAlert: () => dispatch(toAlerta()),
  toConsole: () => dispatch(toConsolea()),
});
const nextPageConfig = enhancedConnect(mapStateToData, mapDispatchToPage)(pageConfig);
Page(nextPageConfig);

