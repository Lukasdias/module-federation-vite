import React from "react";
import { styled, darkTheme } from "./../../stitches.config";
import useStore from "../../stores/useDarkTheme";

const Button = styled("button", {
  backgroundColor: "$red10",
  padding: "1rem 1.5rem",
  width: 200,
  height: 100,
  color: "$loContrast",
  borderRadius: 6,
  transition: "all 300ms",
  "&:hover": {
    backgroundColor: "$red12",
  },
});

const Cards: React.FC = () => {
  const { theme, toggleTheme } = useStore();

  React.useEffect(() => {
    console.log(darkTheme);
    document.documentElement.classList.remove("theme-default", darkTheme);
    document.documentElement.classList.add(theme);

    document.body.classList.remove("theme-default", darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  return <Button onClick={toggleTheme}>Card Button</Button>;
};

export default Cards;
