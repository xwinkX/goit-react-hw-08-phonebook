import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { contact } from './contact/contact';
import { contactsApi } from './contact/contactsSlice';

// const persistConfig = {
//   key: 'contact',
//   storage,
//   whitelist: ['items'],
// };

// const persistedReducer = persistReducer(persistConfig, contact.reducer);

export const store = configureStore({
  reducer: {
    // contact: persistedReducer,
    contact: contact.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  // getDefaultMiddleware =>
  // getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
});
// });

// export const persistor = persistStore(store);
