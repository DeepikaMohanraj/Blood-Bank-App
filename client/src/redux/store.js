import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
//reducers=rulebook,all state changes are controlled by reducers.
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
//Redux:state management tool ,helps to develop complex applications.it is like a smart organizer,scalable ,js based application.
//makes easy to debug,to maintain dataflow,time travel debugging.
//The store holds the entire state tree of an application. 
//It's the single source of truth for the app's state, making it easier to manage and debug state changes over time.