
import { configureStore } from "@reduxjs/toolkit";
import { apiChart } from "./apiChart";

export const store = configureStore({
	reducer: {
		chart: apiChart.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiChart.middleware)
})

export type tState = ReturnType<typeof store.getState>;
export type tDispatch = typeof store.dispatch;
