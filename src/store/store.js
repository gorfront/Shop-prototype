import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./slice/category/categorySlice";
import { colectionsReducer } from "./slice/colections/ColectionsSlice";
import { currentProductReducer } from "./slice/currentProduct/currentProductSlice";
import { searchWordReducer } from "./slice/searchWord/searchWord";
import { starRatingReducer } from "./slice/starRating/starRating";
import { usersReducer } from "./slice/users/usersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    colections: colectionsReducer,
        users: usersReducer,
        category: categoryReducer,
        searchWord: searchWordReducer,
        currentProduct: currentProductReducer,
})

const persistConfig = {
    key: 'shopKey',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export default store