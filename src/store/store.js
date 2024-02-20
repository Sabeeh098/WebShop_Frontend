import { configureStore } from "@reduxjs/toolkit";
import {persistStore,persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist"
import storage from "redux-persist/lib/storage";

import { adminAuthSlice } from "./slice/adminSlice";

const adminPersistConfig = {key:"adminAuth",storage,version:1};

const adminAuthPersistedReducer = persistReducer(adminPersistConfig,adminAuthSlice.reducer);

export const store = configureStore({
    reducer :{
        admin:adminAuthPersistedReducer,
    },

    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            },
        }),
});

export const persistor = persistStore(store)