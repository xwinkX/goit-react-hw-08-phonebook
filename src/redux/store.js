import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contact } from './contact/contact';
import authReducer from './auth/auth-slice';

const persistConfig = {
  key: 'contact',
  storage,
  whitelist: ['items'],
};

const persistedReducer = persistReducer(persistConfig, contact.reducer);

export const store = configureStore({
  reducer: {
    contact: persistedReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
