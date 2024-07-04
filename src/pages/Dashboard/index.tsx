import React from "react";
import { fetchDataRequest } from "src/redux/slices/users";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "src/redux/rootReducers";
import { TestApiResponse } from "src/redux/sagas/users";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootReducerType) => state.users,
  );

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item: TestApiResponse) => (
          <li key={`${item.id}`}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
