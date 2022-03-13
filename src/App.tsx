import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import PostContainer from "./componets/PostContainer";
import { useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducer/ActionCreators";

function App() {
  // before query RTK query
  // const { users, isLoading, error } = useAppSelector(
  //   state => state.userReducer
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  // -----------------------------------
  return (
    // before query RTK query
    // <div className="App">
    //   {isLoading && <h1>loading....</h1>}
    //   {error &&<h1>{error} </h1>}
    //   {JSON.stringify(users)}
    // </div>
    // -----------------------------------
    <div>
      <PostContainer />
    </div>
  );
}

export default App;
