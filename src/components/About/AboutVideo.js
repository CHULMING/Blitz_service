import styled from "styled-components";
import ReactPlayer from "react-player/lazy";
import Box from "@mui/material/Box";

const AboutVideo = () => (
  <>
    <Wrapper>
      <Overlay />
      <Video />
    </Wrapper>
  </>
);
const Overlay = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Wrapper = styled(Box)``;

const Video = () => (
  <ReactPlayer
    url={"videos/sample_video.mp4"}
    playing={true}
    muted={true}
    controls={false}
    light={false}
    pip={false}
    loop={true}
    width="100%"
    height="100%"
  />
);

export { AboutVideo };
