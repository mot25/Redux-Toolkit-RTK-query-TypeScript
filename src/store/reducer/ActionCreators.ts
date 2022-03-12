import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { UserSlice } from "./UserClice";
export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(UserSlice.actions.usersFetching());
    const { data } = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(UserSlice.actions.usersFetchingSuccess(data));
  } catch (e: any) {
    dispatch(UserSlice.actions.usersFetchingError(e.message));
  }
};
