import { animated } from "react-spring";
import styled from "styled-components";

export const sc = {
  Ball: styled(animated.div)`
    background-color: #0e77e8;
    border-radius: 50px;
    height: 100px;
    width: 100px;
  `,

  BallContainer: styled.div`
    padding: 10px 0;
  `,

  Button: styled.button`
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 5px #8c8c8c;
    margin-bottom: 10px;
    padding: 10px;
    &:hover {
      cursor: pointer;
    }
  `,

  Content: styled.div`
    padding: 0 20px;
  `,

  H2: styled.h2`
    &:hover {
      cursor: pointer;
    }
  `,

  Label: styled(animated.div)`
    font-size: 16px;
  `,

  SmallBall: styled(animated.div)`
    background-color: #0e77e8;
    border-radius: 25px;
    height: 50px;
    width: 50px;
  `,
};
