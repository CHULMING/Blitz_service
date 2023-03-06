import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Box } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { useRef, useEffect } from "react";

export const DownIcon = () => {
  const destination = useRef(null);

  useEffect(() => {
    destination.current = document.getElementById("aboutCompany");
  }, []);

  return (
    <Wrapper>
      <KeyboardDoubleArrowDownIcon
        fontSize="large"
        sx={{ color: "grey" }}
        onClick={() =>
          destination.current.scrollIntoView({ behavior: "smooth" })
        }
      ></KeyboardDoubleArrowDownIcon>
    </Wrapper>
  );
};
const moveUpAndDown = keyframes`
  50%{
    transform: translateY(10px);
  }
`;
const Wrapper = styled(Box)`
  position: absolute;
  left: 50%;
  bottom: 0;
  cursor: pointer;
  margin-bottom: 16px;
  z-index: 1;
  animation: ${moveUpAndDown} 1s infinite linear;
`;
