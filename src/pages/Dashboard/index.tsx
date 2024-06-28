import { fetchDataRequest } from "@src/redux/actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "@src/redux/rootReducers";

const Dashboard = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((state: RootReducerType) => state.users);

    useEffect(() => {
        dispatch(fetchDataRequest());
      }, [dispatch]);

    return (<div>
        <h1>Data</h1>
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>)
}

export default Dashboard