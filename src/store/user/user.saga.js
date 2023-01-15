import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  getCurrentUser,
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutuser,
} from "../../utils/firebase/firebase.utils";
import {
  checkUserSession,
  emailSignIn,
  googleSignIn,
  signInFail,
  signInSuccess,
  signOut,
  signOutFail,
  signOutSuccess,
  signUp,
  signUpFail,
  signUpSuccess,
} from "./user.reducer";

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
  try {
    const userSnapshot = yield call(
      createUserDocFromAuth,
      userAuth,
      additionalInfo
    );
    if (userSnapshot.id === userAuth.uid) {
      yield put(
        signInSuccess({
          ...userAuth,
          uid: userSnapshot.id,
          displayName: userSnapshot.data().displayName,
        })
      );
    }
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* signInWithGoogleGenerator() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield call(signInFail(error));
  }
}

export function* signInWithEmailGenerator({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield call(signInFail(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield call(signInFail(error));
  }
}

export function* signUpUserGenerator({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFail(error));
  }
}

export function* signOutGenerator() {
  try {
    yield call(signOutuser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail(error));
  }
}

export function* signInAfterSignUpGenerator({
  payload: { user, additionalDetails },
}) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignIn() {
  yield takeLatest(googleSignIn, signInWithGoogleGenerator);
}

export function* onEmailSignIn() {
  yield takeLatest(emailSignIn, signInWithEmailGenerator);
}

export function* onCheckUserSession() {
  yield takeLatest(checkUserSession, isUserAuthenticated);
}

export function* onSignUp() {
  yield takeLatest(signUp, signUpUserGenerator);
}

export function* onSignUpSuccess() {
  yield takeLatest(signUpSuccess, signInAfterSignUpGenerator);
}

export function* onSignOut() {
  yield takeLatest(signOut, signOutGenerator);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onSignUp),
    call(onSignOut),
  ]);
}
