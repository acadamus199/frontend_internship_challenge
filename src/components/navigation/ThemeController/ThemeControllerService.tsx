import { useEffect, useState } from "react";
import ThemeControllerLayout from "./ThemeControllerLayout";
import { ThemeImage } from "./ThemeImage";


// TODO: [26] To nie jest service, tylko component (więc 'service' z nazwy pliku do usunięcia)
// ::::: - Controller też swoje znaczy (pewnie kojarzysz model MVC, Model-View-Controller)
// ::::: Dlatego proponuję nazwać component ThemeSwitch (nic związanego z serwisami/controllerami)
export default function ThemeController() {
    const [theme, setTheme] = useState("light");
    // TODO: [27] Semantyczna nazwa, to chyba bardziej jest logoElement niż doc
    const doc = document.getElementById(ThemeImage.imageID)

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            doc != null ? (doc as HTMLImageElement).src = ThemeImage.lightApple : null
        } else {
            document.documentElement.removeAttribute("data-theme");
            doc != null ? (doc as HTMLImageElement).src = ThemeImage.darkApple : null
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <ThemeControllerLayout handleThemeSwitch={handleThemeSwitch}></ThemeControllerLayout>
    );
}
