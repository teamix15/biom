import { useEffect } from "react";

import "./App.css";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useAppDispatch } from "../../hooks/redux";
import { getBiom } from "../../features/bacteria/biom";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBiom);
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
