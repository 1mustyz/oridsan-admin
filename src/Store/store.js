import { configureStore } from "@reduxjs/toolkit";

import Conference from "./conference";
import Membership from "./membership";
import Slider from "./slider";

export const Store = configureStore({
    reducer:{
        conference: Conference,
        membership: Membership,
        slider: Slider
    }
})