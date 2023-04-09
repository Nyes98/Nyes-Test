import React, { Component, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CenterMode = () => {
  const [center, setCenter] = useState(1);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "67px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
  };

  return (
    <Wrap className="yogi">
      <Slider {...settings}>
        <Item>
          <ImgBox>
            <img src="imgs/bottle1.png" alt="nono" />
          </ImgBox>
          <ContentsBox>왜이럼</ContentsBox>
        </Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Slider>
    </Wrap>
  );
};

export default CenterMode;

const Item = styled.div`
  border: 1px solid gray;
  text-align: center;
  height: 150px;
`;

const Wrap = styled.div`
  .slick-center {
    transition: transform 1s;
    transform: scale(1.1);
  }

  & > div > div > div {
    display: flex;
  }

  & > div > div > div > div {
    margin: 0 10px;
    width: 150px;
  }
`;

const ImgBox = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
`;

const ContentsBox = styled.div``;
