import Navbar from "./components/navigation/Navbar.tsx";
import Footer from "./components/navigation/Footer.tsx";
import Body from "./Body.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import { TabNames } from "./components/navigation/tabs/TabNames";
import AlbumList from "./components/albums/AlbumList.tsx";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./components/service/ApiConntection.tsx";

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetchDataFromApi()
      .then((data) => {
        setData(data)
        setQuery(data.length)
        setLoading(false)
        localStorage.setItem("apiData", JSON.stringify(data))
        localStorage.setItem("dataLength", data.length)
        localStorage.setItem("loadingState", "false")
      })
  }, [])

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Body>
          <Routes>
            <Route path={TabNames.tab1} element={<HomePage />}></Route>
            <Route path={TabNames.tab2} element={<AlbumList data={data} query={query} loading={loading} />}></Route>
          </Routes>
        </Body>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
