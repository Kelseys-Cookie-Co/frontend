import { cartReducer } from './state/cartReducer';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore } from 'redux';

const persistConfig = {
  key: "root",
  storage
}
const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
