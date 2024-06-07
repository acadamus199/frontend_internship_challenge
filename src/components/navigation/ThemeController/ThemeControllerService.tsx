import { useEffect, useState } from "react";
import ThemeControllerLayout from "./ThemeControllerLayout";
import { ThemeImage } from "./ThemeImage";


export default function ThemeController() {
    const [theme, setTheme] = useState("light");
    const doc = document.getElementById("japko")

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
