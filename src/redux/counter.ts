import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CounterState = {
  counterValue: number;
}

const initialState: CounterState = {
  counterValue: 0,
}

export const addExpValue = createAsyncThunk(
  'counter/addVeryLargeValue',
  async ({ exponential }: { exponential: number }) => {
    return {
      value: Math.pow(2, exponential),
    }
  }
)

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        state.counterValue += 1;
    },
    decrement: (state) => {
        state.counterValue -= 1;
    },
    addValue: (state, {payload}: PayloadAction<{ value: number }>) => {
      state.counterValue += payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addExpValue.fulfilled, (state, { payload }) => {
      state.counterValue += payload.value;
    })
  },
});

export const {
    increment,
    decrement,
    addValue
} = slice.actions;

export const counterReducer = slice.reducer;