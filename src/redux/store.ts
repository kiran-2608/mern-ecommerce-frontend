// import { configureStore } from "@reduxjs/toolkit";
// import { productAPI } from "./api/productAPI";
// import { userAPI } from "./api/userAPI";

// import { cartReducer } from "./reducer/cartReducer";
// import { orderApi } from "./api/orderAPI";
// import { userReducer } from "./reducer/userReduer";
// import { dashboardApi } from "./api/dashboardAPI";

// export const server = import.meta.env.VITE_SERVER;

// export const store = configureStore({
//   reducer: {
//     [userAPI.reducerPath]: userAPI.reducer,
//     [productAPI.reducerPath]: productAPI.reducer,
//     [orderApi.reducerPath]: orderApi.reducer,
//     [dashboardApi.reducerPath]: dashboardApi.reducer,
//     [userReducer.name]: userReducer.reducer,
//     [cartReducer.name]: cartReducer.reducer,
//   },
//   middleware: (mid) => [
//     ...mid(),
//     userAPI.middleware,
//     productAPI.middleware,
//     orderApi.middleware,
//     dashboardApi.middleware,
//   ],
// });

// export type RootState = ReturnType<typeof store.getState>;



import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "./api/productAPI";
import { userAPI } from "./api/userAPI";
import { cartReducer } from "./reducer/cartReducer";
import { orderApi } from "./api/orderAPI";
import { userReducer } from "./reducer/userReduer";
import { dashboardApi } from "./api/dashboardAPI";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [userReducer.name]: userReducer.reducer,
    [cartReducer.name]: cartReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: true, // Ensure thunk middleware is enabled
      immutableCheck: false, // Disable immutable state check for performance
      serializableCheck: false, // Disable serializable state check for performance
    }).concat([
      userAPI.middleware,
      productAPI.middleware,
      orderApi.middleware,
      dashboardApi.middleware,
    ]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
