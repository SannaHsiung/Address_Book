import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

interface IThemeContext {
  darkMode: string;
  setDarkMode(theme: string): void;
}

const ThemeContext = createContext({} as IThemeContext);

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [darkMode, setDarkMode] = useState("");

  const value: IThemeContext = { darkMode, setDarkMode };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
