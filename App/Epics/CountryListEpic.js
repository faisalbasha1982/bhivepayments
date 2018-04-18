import CountryListActions, { CountryListTypes } from "../Redux/CountryListRedux";
import { ofType } from "redux-observable";
import Toast from "react-native-root-toast";
import {
  delay,
  mapTo,
  map,
  tap,
  switchMap,
  mergeMap,
  catchError
} from "rxjs/operators"; // rxjs v5.5+
import api from "../Services";
import { of } from "rxjs/observable/of";

export const countryListEpic = (action$) =>
  action$.ofType(CountryListTypes.COUNTRY_LIST_REQUEST).pipe(
    switchMap(() => api.getCountryList()),
    mergeMap(response => {
      if (!response.ok) {
        Toast.show("Failed to fetch countries", {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true
        });
      }
      return of(
        response.ok
          ? CountryListActions.countryListSuccess(response.data.data)
          : CountryListActions.countryListFailure()
      );
    })
  );
