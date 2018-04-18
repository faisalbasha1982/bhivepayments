import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import { reducer as formReducer } from "redux-form";
import nav from "./NavigationRedux";
/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav,
  login: require("./LoginRedux").reducer,
  countryList: require("./CountryListRedux").reducer,
  cities: require("./CitiesRedux").reducer,
  register: require("./RegisterRedux.js").reducer,
  form: formReducer
});

export default () => {
  let { store } = configureStore(reducers);
  return store;
};
