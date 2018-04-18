import LoginActions, { LoginTypes } from "../Redux/LoginRedux";
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

export const loginEpic = (action$, { dispatch }) =>
  action$.ofType(LoginTypes.LOGIN_REQUEST).pipe(
    switchMap(({ email, password }) => api.login(email, password)),
    mergeMap(response => {
      console.tron.log(
        `response is: ${JSON.stringify(response.data, null, 2)}`
      );
      if (!response.ok) {
        Toast.show("Log in failed, check your credentials.", {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true
        });
      } else {
        api.setHeaders({ Authorization: response.data.data.accessToken });
      }
      return of(
        response.ok
          ? LoginActions.loginSuccess(response.data.data.data[0])
          : LoginActions.loginFailure("Response wasn't ok.")
      );
    })
  );
