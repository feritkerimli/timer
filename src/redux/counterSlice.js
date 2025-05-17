import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hour_timer: 0,
    minute_timer: 0,
    second_timer: 0,
    hour_watch: 0,
    minute_watch: 0,
    second_watch: 0,
    watch_flag: false,
    timer_flag: false

};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementHour: (state) => { state.hour_timer += 1; },
        decrementHour: (state) => {
            if (state.hour_timer > 0) {
                state.hour_timer -= 1;
            }

        },
        incrementMinute: (state) => { state.minute_timer += 1; },
        decrementMinute: (state) => {
            if (state.minute_timer > 0) {
                state.minute_timer -= 1;
            }

        },
        incrementSecond: (state) => { state.second_timer += 1; },
        decrementSecond: (state) => {
            if (state.second_timer > 0) {
                state.second_timer -= 1;
            }
        },
        start_watch: (state) => {
            if (state.watch_flag) {
                state.second_watch += 1
                if (state.second_watch == 60) {
                    state.second_watch = 0;
                    state.minute_watch += 1;
                }
                if (state.minute_watch == 60) {
                    state.minute_watch = 0;
                    state.hour_watch += 1;
                }
            }
        },
        watch_flag_changer: (state) => {
            state.watch_flag = !state.watch_flag;
        },
        reset_watch: (state) => {
            state.hour_watch = 0;
            state.minute_watch = 0;
            state.second_watch = 0;
        },
        start_timer: (state) => {

            if (state.timer_flag) {
                if (!(state.hour_timer == 0 && state.minute_timer == 0 && state.second_timer == 0)) {
                    if (state.second_timer > 0) state.second_timer -= 1;
                    else {
                        state.second_timer = 59;
                        if (state.minute_timer > 0) state.minute_timer -= 1;
                        else {
                            state.minute_timer = 59;
                            if (state.hour_timer > 0) state.hour_timer -= 1;
                        }
                    }
                }
            }
        },
        timer_flag_changer: (state) => {
            state.timer_flag = !state.timer_flag;
        },
        reset_timer: (state) => {
            state.hour_timer = 0;
            state.minute_timer = 0;
            state.second_timer = 0;
        }
    }
});

export const {
    incrementHour, decrementHour,
    incrementMinute, decrementMinute,
    incrementSecond, decrementSecond, start_watch, watch_flag_changer, reset_watch, start_timer, timer_flag_changer, reset_timer
} = counterSlice.actions;

export default counterSlice.reducer;
