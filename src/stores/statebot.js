import { writable } from "svelte/store";
export const stateStore = writable({
    usersettings: {},
    darkmodestatus: true,
    timerId: "",
    timerIdlist: ""
});