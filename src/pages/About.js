import { AboutVideo } from "../components/About/AboutVideo";
import { AboutCompany } from "../components/About/AboutCompany";
import { AboutContent } from "../components/About/AboutContent";
import { DownIcon } from "../components/Common/DownIcon";
import { Box } from "@mui/material";

import { save } from "../store/modules/current";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(save("About"));
  });
  return (
    <>
      <Box id="aboutMain" position="relative">
        <AboutVideo></AboutVideo>
        <AboutContent></AboutContent>
        <DownIcon></DownIcon>
      </Box>
      <Box id="aboutCompany" position="relative">
        <AboutCompany></AboutCompany>
      </Box>
    </>
  );
};

export { About };
