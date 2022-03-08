import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Basic } from "./basic";
import { Configs } from "./configurations";
import { Playground } from "./playground";

export const UseSpringDemo = () => {
  return (
    <sc.Container>
      <Link to="/">back</Link>
      <h1>useSpring</h1>
      <Basic />
      <Playground />
      <Configs />
    </sc.Container>
  );
};

const sc = {
  Container: styled.div`
    padding: 20px;
  `,
};
