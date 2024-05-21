import Navbar from "./components/navigation/Navbar.tsx";
import Footer from "./components/navigation/Footer.tsx";
import Fetch from "./components/ApiFetch/Fetch.tsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center mt-20 mb-10">
        <div className="bg-base-100 shadow-Around rounded-md size-11/12 grid justify-items-center p-2">
          <div className="border-4 border-solid border-red-500 w-10/12">
            <Fetch></Fetch>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
