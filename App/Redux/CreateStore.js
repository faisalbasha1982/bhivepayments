import { createStore, applyMiddleware, compose } from "redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import Config from "../Config/DebugConfig";
import logger from "redux-logger";
import rootEpic from "../Epics";
import ScreenTracking from './ScreenTrackingMiddleware'

// creates the store
export default rootReducer => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)
  
  /* ------------- Logger Middleware ------------- */
  middleware.push(logger);

  /* ------------- Epic Middleware ------------- */
  middleware.push(rootEpic);

  /* ------------- Redux Navigation Middleware ------------- */
  middleware.push(
    createReactNavigationReduxMiddleware("root", state => state.nav)
  );
  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron
    ? console.tron.createStore
    : createStore;
  const store = createAppropriateStore(rootReducer, compose(...enhancers));

  return {
    store
  };
};
