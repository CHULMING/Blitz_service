import { AboutVideo } from "./About/AboutVideo";
import { AboutCompany } from "./About/AboutCompany";
import { Box } from "@mui/material";

const About = () => (
  <Box position="relative">
    <AboutVideo></AboutVideo>
    <AboutCompany></AboutCompany>
  </Box>
);

export { About };
