export const getAuthError = ({ auth }) => auth.error || {};
export const isAuth = ({ auth }) => auth.isLogin;
export const getMail = ({ auth }) => auth.user || {};
export const getToken = ({ auth }) => auth.token || '';
export const getIsFetchingCurrent = ({ auth }) => auth.isFetchingCurrentUser;
