import {
  createReducer,
  createActions,
  Types as ReduxSauceTypes
} from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  countryListRequest: null,
  countryListSuccess: ["data"],
  countryListFailure: null
});

export const CountryListTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  data: [],
  fetching: null,
  error: null
};

/* ------------- Selectors ------------- */

export const CountryListSelectors = {
  getData: state => state['countryList'].data,
  getFetching: state => state['countryList'].fetching,
  getID: (state, name) =>
    state['countryList'].data.find(country => country.name == name)._id
};

/* ------------- Reducers ------------- */

// request the data from an api
export const request = state => {
  return { ...state, fetching: true };
};

// successful api lookup
export const success = (state, action) => {
  const { data } = action;
  return { ...state, fetching: false, error: null, data };
};

// Something went wrong somewhere.
export const failure = state => {
  return { ...state, fetching: false, error: true };
};

// Default handler
export const defaultHandler = (state) => {
  return { ...state };
};
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COUNTRY_LIST_REQUEST]: request,
  [Types.COUNTRY_LIST_SUCCESS]: success,
  [Types.COUNTRY_LIST_FAILURE]: failure,
  [ReduxSauceTypes.DEFAULT]: defaultHandler
});
