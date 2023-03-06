import styled from "styled-components";
import { Typography } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";

const theme = createTheme({
  typography: {
    h1: { fontSize: "7rem", fontWeight: "2000", display: "inline" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
      "3xl": 1920,
      "4xl": 2560,
      "5xl": 3200,
    },
  },
});

export const AboutContent = () => {
  const textList = ["work", "dream", "burden"];
  const [text, setText] = useState("");
  const y = useRef(0);
  const x = useRef(0);
  const direction = useRef(1);

  useEffect(() => {
    setInterval(() => {
      x.current += direction.current;
      if (direction.current === 0) {
        direction.current = -1;
      } else if (x.current === textList[y.current].length) {
        direction.current = 0;
      } else if (x.current === 0 && direction.current === -1) {
        y.current = (y.current + 1) % textList.length;
        direction.current = 1;
      }
      setText(textList[y.current].substring(0, x.current));
    }, 300);
  }, []);

  return (
    <>
      <Wrapper>
        <ThemeProvider
          theme={responsiveFontSizes(theme, {
            breakpoints: [
              "xs",
              "sm",
              "md",
              "lg",
              "xl",
              "2xl",
              "3xl",
              "4xl",
              "5xl",
            ],
            factor: 5,
          })}
        >
          <span>
            <Typography variant="h1">{"Share your {"}</Typography>
            <Typography variant="h1" color="green">
              {" " + text + " "}
            </Typography>
            <Typography variant="h1"> {"} with us "} </Typography>
          </span>
        </ThemeProvider>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
