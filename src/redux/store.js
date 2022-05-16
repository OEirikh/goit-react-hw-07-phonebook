import { configureStore } from '@reduxjs/toolkit';
// import { ContactsSlice } from './ContactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FilterSlice } from './FilterSlice';
import { ContactsApi } from './ContactsApi';
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
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

// const rootReducer = {
//   contacts: ContactsSlice.reducer,
//   filter: FilterSlice.reducer,
// };

const persistedReducer = persistReducer(persistConfig, FilterSlice.reducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    [ContactsApi.reducerPath]: ContactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ContactsApi.middleware,
  ],

  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }).concat(ContactsApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
