import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	loading: false,
	error: null,
	message: "",
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {},
	extraReducers: {},
});

// export const {} = counterSlice.actions

export const selectCounter = state => state.counter;

export default counterSlice.reducer;
