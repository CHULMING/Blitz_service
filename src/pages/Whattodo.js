import { AboutVideo } from "../components/About/AboutVideo";
import { AboutCompany } from "../components/About/AboutCompany";
import { Box } from "@mui/material";

import { save } from "../store/modules/current";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const Whattodo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(save("WHAT TO DO"));
  });
  return (
    <Box position="relative">
      <AboutVideo></AboutVideo>
      <AboutCompany></AboutCompany>
    </Box>
  );
};
