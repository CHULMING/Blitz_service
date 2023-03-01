import styled from "styled-components";
import ReactPlayer from "react-player/lazy";
import Box from "@mui/material/Box";

const AboutVideo = () => (
  <>
    <Wrapper>
      <p>hello</p>
      <Video></Video>
      <p>hello</p>
    </Wrapper>
  </>
);

const Wrapper = styled(Box)`
  background: linear-gradient(
    to bottom,
    rgba(50, 50, 50, 0.5),
    rgba(255, 0, 0, 0.8)
  );
`;

const Video = () => (
  <ReactPlayer
    className="react-player"
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
