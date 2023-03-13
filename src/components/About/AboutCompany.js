import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { width } from "@mui/system";

export const AboutCompany = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <img
            src="images/sample_image.png"
            alt="sample"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Left>
        <Right>
          <Typography variant="h2" sx={{ fontWeight: 400, lineHeight: 1 }}>
            ABOUT
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            BlitzCRANK🚀
          </Typography>

          <Typography variant="p" sx={{ lineHeight: 1.5 }}>
            2023년 설립된 블리츠크랭크는 비디오 커뮤니케이션(WebRTC)과
            인공지능(AI) 분야에서 세계 수준의 실력과 경험을 보유하고 있는 글로벌
            영상 기술 기업입니다. 전 세계 사람들을 서로 연결하여 사회적·문화적
            가치를 창출한다는 미션 아래, 세상을 연결하는 다양한 비디오 및
            인공지능 기술 기반의 서비스들을 만들어가고 있습니다.
          </Typography>
        </Right>
      </Wrapper>
    </>
  );
};
const Wrapper = styled(Box)`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1440px !important;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  background-color: white;
`;

const Left = styled(Box)`
  position: relative;
  overflow: hidden;
  flex-basis: 50%;
  max-width: 50%;
`;

const Right = styled(Box)`
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 30px;
`;
