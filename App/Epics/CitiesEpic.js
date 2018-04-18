import CitiesActions, { CitiesTypes } from "../Redux/CitiesRedux";
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

export const cityListEpic = (action$) =>
  action$.ofType(CitiesTypes.CITIES_REQUEST).pipe(
    switchMap(({payload}) => api.getCityList(payload)),
    mergeMap(response => {
      if (!response.ok) {
        Toast.show("Failed to fetch cities", {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true
        });
      }
      return of(
        response.ok
          ? CitiesActions.citiesSuccess(response.data.data)
          : CitiesActions.citiesFailure()
      );
    })
  );
