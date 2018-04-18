import {
  createReducer,
  createActions,
  Types as ReduxSauceTypes
} from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  citiesRequest: ["payload"],
  citiesSuccess: ["data"],
  citiesFailure: null
});

export const CitiesTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  data: [],
  fetching: null,
  payload: null,
  error: null
};

/* ------------- Selectors ------------- */

export const CitiesSelectors = {
  getData: state => state.cities.data,
  getFetching: state  => state.cities.fetching,
  getError: state => state.cities.error
};

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { payload }) => {
  return { ...state, fetching: true, payload };
};

// successful api lookup
export const success = (state, { data }) => {
  return { ...state, fetching: false, error: null, data, payload: null };
};

// Something went wrong somewhere.
export const failure = state => {
  return { ...state, fetching: false, error: true, payload: null };
};

// Default handler
export const defaultHandler = (state) => {
  return { ...state };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CITIES_REQUEST]: request,
  [Types.CITIES_SUCCESS]: success,
  [Types.CITIES_FAILURE]: failure,
  [ReduxSauceTypes.DEFAULT]: defaultHandler
});
