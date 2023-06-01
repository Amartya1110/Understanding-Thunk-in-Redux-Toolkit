import { configureStore } from "@reduxjs/toolkit";
import userSilce from "./userSilce";


const store = configureStore({
    reducer: {
        user: userSilce,
    }
})


export default store