import { configureStore } from "@reduxjs/toolkit";

import Conference from "./conference";
import Membership from "./membership";
import Slider from "./slider";
import Staff from "./staff";
import Chapter from "./chapter";
import Members from "./members";

export const Store = configureStore({
    reducer:{
        conference: Conference,
        membership: Membership,
        slider: Slider,
        staff: Staff,
        chapter: Chapter,
        member: Members
    }
})