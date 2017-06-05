
import { Provider} from './libs/wechat-weapp-redux.js';
import configureStore from './configureStore.js';
const store = configureStore();
console.log(Provider)
App(Provider(store)({
  onLaunch: function () {
    console.log("onLaunch")
  }
}));