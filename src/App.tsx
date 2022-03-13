import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducer/ActionCreators";

function App() {
  const { users, isLoading, error } = useAppSelector(
    state => state.userReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="App">
      {isLoading && <h1>loading....</h1>}
      {error &&<h1>{error} </h1>}
      {JSON.stringify(users)}
    </div>
  );
}

export default App;
