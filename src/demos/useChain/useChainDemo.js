import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Basic } from "./basic";

export const UseChainDemo = () => {
  return (
    <sc.Container>
      <Link to="/">back</Link>
      <h1>useChain</h1>
      <Basic />
    </sc.Container>
  );
};

const sc = {
  Container: styled.div`
    padding: 20px;
  `,
};
