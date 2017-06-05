import { CRUD_ALERT, CRUD_CONSOLE} from '../actions/dataActions'

const auth = (state = { authenticated: false }, action) => {
  console.log(action)

  switch (action.type) {
    case CRUD_ALERT:
      console.log("CRUD_ALERT")
      return state
    case CRUD_CONSOLE:
      console.log("CRUD_CONSOLE")
      return state
    default:
      console.log("init")
      return state
  }
};

export default auth;