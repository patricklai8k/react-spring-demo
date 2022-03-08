import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Home = () => {
  return (
    <sc.Container>
      <Link to="/use-spring">useSpring demo</Link>
      <Link to="/use-transition">useTransition demo</Link>
      <Link to="/use-trail">useTrail demo</Link>
      <Link to="/use-chain">useChain demo</Link>
    </sc.Container>
  );
};

const sc = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
  `,
};
