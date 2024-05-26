import { Routes, Route } from "react-router-dom";
import Fetch from "./components/ApiFetch/Fetch";
import HomePage from "./components/HomePage";
import { TabNames } from "./components/navigation/tabs/TabNames";

export default function Body() {
    return (
        <div className="flex justify-center mt-24 mb-24">
            <div className="bg-base-100 shadow-Around rounded-md size-11/12 grid justify-items-center p-2">
                <div className="w-10/12 shadow-xl z-0 truncate">
                    <Routes>
                        <Route path={TabNames.tab1} element={<HomePage />}></Route>
                        <Route path={TabNames.tab2} element={<Fetch />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}