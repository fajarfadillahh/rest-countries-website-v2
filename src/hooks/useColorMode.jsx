import { useEffect } from "react";

// import custom hooks localstorage
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light");

  useEffect(() => {
    const className = "dark";
    const setDark = document.documentElement.classList;

    colorMode === "dark" ? setDark.add(className) : setDark.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
