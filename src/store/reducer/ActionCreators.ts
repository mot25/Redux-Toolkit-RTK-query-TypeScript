import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { UserSlice } from "./UserClice";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(UserSlice.actions.usersFetching());
//     const { data } = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(UserSlice.actions.usersFetchingSuccess(data));
//   } catch (e: any) {
//     dispatch(UserSlice.actions.usersFetchingError(e.message));
//   }
// }

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
