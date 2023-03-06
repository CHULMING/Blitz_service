import styled from "styled-components";
import { Box } from "@mui/material";

export const AboutCompany = () => {
  return (
    <>
      <Wrapper>
        <p>hello</p>
        <img src="images/sample_image.png" alt="sample"></img>
        <p>hello</p>
      </Wrapper>
    </>
  );
};
const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
