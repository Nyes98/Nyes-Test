import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const settings = {
  centerMode: true,
  centerPadding: "70px",
  slidesToShow: 1,
};

const MySlider = () => {
  return (
    <Wrap>
      <Slider {...settings}>
        <Item>
          <img src="./imgs/main1.png" alt="main" />
        </Item>
        <Item>
          <img src="./imgs/main1.png" alt="main" />
        </Item>
        <Item>
          <img src="./imgs/main1.png" alt="main" />
        </Item>
        <Item>
          <img src="./imgs/main1.png" alt="main" />
        </Item>
        <Item>
          <img src="./imgs/main1.png" alt="main" />
        </Item>
      </Slider>
    </Wrap>
  );
};

export default MySlider;

const Wrap = styled.div`
  position: relative;
`;

const Item = styled.div`
  border: 1px solid black;

  img {
    width: 80%;
    margin: auto;
  }
`;
