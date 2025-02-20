import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'


const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
    bitgold:counterReducer //persistReducer(persistConfig, counterReducer),
  })

  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })

  const persistore = persistStore(store);

  
export {store, persistore}