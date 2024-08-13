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
  //   TODO: [1] Słowo "query" oznacza "zapytanie" i zazwyczaj wykorzystywane jest do nazwania np. textu wyszukiwania
  //   ::::: W tym useState przechowujesz liczbę wszystkich albumów, więc proponowałabym bardziej semantyczną nazwę, czyli np. "allAlbumsAmount"
  //   TODO: [2] Skoro ten state przechowuje liczbę lepiej na początku przypisać mu 0 albo null, zamiast pustego stringa
    const [query, setQuery] = useState()

  useEffect(() => {
    fetchDataFromApi()
      .then((data) => {
        setData(data)
        setQuery(data.length)
        setLoading(false)
        // TODO: [3] Zakładam, że wykorzystujesz tutaj LocalStorage tylko jako obejście tego, że <AlbumList /> nie rerenderuje się, kiedy zmienia się state <App />
        // ::::: (Bo na pewno wiesz, że LS nie do tego służy i że ogólnie nie ma sensu tych danych w nim przechowywać)
        // ::::: Nie działało ci to standardowym sposobem, bo <AlbumList> nie jest dzieckiem <App>, tylko jest elementem przypisanym do Route
        // ::::: Proponuję rozwiązanie:
        // ::::: Przenieś fetchowanie albumów do <AlbumList />
        // ::::: (Miałoby to sens nawet gdyby działało ci fetchowanie w <App />, bo <AlbumList />  (i jego dzieci) to jedyny komponent, który tych albumów potrzebuje)
        // ::::: Resztę komentarzy będę pisać zakładając, że fetchowanie jest przeniesione do <AlbumList />
        localStorage.setItem("apiData", JSON.stringify(data))
        localStorage.setItem("dataLength", data.length)
        localStorage.setItem("loadingState", "false")
      })
  }, [])

  return (
    <>
      <Router>
        {/* TODO: [4] Komponenty bez children można skrócić do <Navbar /> zamiast <Navbar></Navbar> */}
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
