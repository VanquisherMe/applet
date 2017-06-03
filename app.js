
import WeAppRedux from './libs/wechat-weapp-redux.js';
import configureStore from './configureStore.js';
const Provider = WeAppRedux.Provider
const store = configureStore();
console.log(Provider)
App(Provider(store)({
  onLaunch: function () {
    console.log("onLaunch")
  }
}));