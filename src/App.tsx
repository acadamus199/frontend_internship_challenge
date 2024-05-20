import Navbar from "./components/navigation/Navbar.tsx";
import Footer from "./components/navigation/Footer.tsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center mt-5">
        <div className="bg-base-100 shadow-Around rounded-md size-11/12 grid justify-items-center p-2">
          <div className="border-4 border-solid border-red-500 w-10/12">ds</div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
