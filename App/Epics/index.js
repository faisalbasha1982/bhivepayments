import { combineEpics, createEpicMiddleware } from "redux-observable";
import { loginEpic } from "./LoginEpic";
import { loginSuccessEpic, registerSuccessEpic } from "./NavigationEpic";
import { countryListEpic } from "./CountryListEpic";
import { cityListEpic } from "./CitiesEpic";
import { registerEpic, otpEpic } from "./RegisterEpic";

export default createEpicMiddleware(
  combineEpics(loginEpic, loginSuccessEpic, countryListEpic, cityListEpic, registerEpic, otpEpic, registerSuccessEpic)
);
