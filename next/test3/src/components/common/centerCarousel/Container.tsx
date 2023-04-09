import styled from "styled-components";
import CenterSlider from "./Component";

const CenterCarouselContainer = () => {
  return (
    <Wrap className="Wrap">
      <CenterSlider></CenterSlider>
    </Wrap>
  );
};

export default CenterCarouselContainer;

const Wrap = styled.div`
  margin: 50px 0;
`;
