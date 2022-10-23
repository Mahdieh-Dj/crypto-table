import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { CoinsTable } from "./components/CoinsTable";
function App() {
  const [isUsersLoading, setUsersLoading] = useState(false);

  function loadUsers() {
    setUsersLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=2"
      )
      .then(({ data }) => {
        console.log({
          data,
        });
      })
      .catch((e) => {
        console.log("error", e);
      })
      .finally(() => {
        setUsersLoading(false);
      });
  }
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="App">
      <CoinsTable />
    </div>
  );
}

export default App;
