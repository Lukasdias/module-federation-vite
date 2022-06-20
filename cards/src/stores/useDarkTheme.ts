import create from "zustand";
import { darkTheme } from "../stitches.config";

type Store = {
  clickCount: number;
  theme: "theme-default" | typeof darkTheme;
  toggleTheme: () => void;
};

const useDarkTheme = create<Store>((set, get) => ({
  clickCount: 0,
  theme: "theme-default",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "theme-default" ? darkTheme : "theme-default",
      clickCount: state.clickCount + 1,
    })),
}));

export default useDarkTheme;
