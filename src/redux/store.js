import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { contact } from './contacts/contact';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-reducer';
// import { contactsApi } from './contacts/contactSlice';

// const persistConfig = {
//   key: 'contact',
//   storage,
//   whitelist: ['items'],
// };

// const persistedReducer = persistReducer(persistConfig, contact.reducer);

export const store = configureStore({
  reducer: {
    // contact: persistedReducer,
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
    //   [contactsApi.reducerPath]: contactsApi.reducer,
    // },
    // middleware: getDefaultMiddleware => [
    //   ...getDefaultMiddleware(),
    //   contacts.middleware,
    // ],
    // middleware: getDefaultMiddleware =>
    //   getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    //   }),
  },
});

// export const persistor = persistStore(store);
