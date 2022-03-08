import React, { useState } from "react";
import { config, useSpring } from "react-spring";
import { sc } from "../styledComponents";

export const Configs = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const propsDefault = useSpring({ x: active ? 500 : 0 });
  const propsGentle = useSpring({ config: config.gentle, x: active ? 500 : 0 });
  const propsWobbly = useSpring({ config: config.wobbly, x: active ? 500 : 0 });
  const propsStiff = useSpring({ config: config.stiff, x: active ? 500 : 0 });
  const propsSlow = useSpring({ config: config.slow, x: active ? 500 : 0 });
  const propsMolasses = useSpring({
    config: config.molasses,
    x: active ? 500 : 0,
  });
  return (
    <div>
      <sc.H2 onClick={() => setShow((prev) => !prev)}>Demo 3</sc.H2>
      {show && (
        <sc.Content>
          <sc.Button
            onClick={() => {
              setActive((prev) => !prev);
            }}
          >
            Activate
          </sc.Button>
          <div>{"Default: { mass: 1, tension: 170, friction: 26 }"}</div>
          <sc.BallContainer>
            <sc.SmallBall style={propsDefault}></sc.SmallBall>
          </sc.BallContainer>
          <div>{"Gentle: { mass: 1, tension: 120, friction: 14 }"}</div>
          <sc.BallContainer>
            <sc.SmallBall style={propsGentle}></sc.SmallBall>
          </sc.BallContainer>
          <div>{"Wobbly: { mass: 1, tension: 180, friction: 12 }"}</div>
          <sc.BallContainer>
            <sc.SmallBall style={propsWobbly}></sc.SmallBall>
          </sc.BallContainer>
          <div>{"Stiff: { mass: 1, tension: 210, friction: 20 }"}</div>
          <sc.BallContainer>
            <sc.SmallBall style={propsStiff}></sc.SmallBall>
          </sc.BallContainer>
          <div>{"Slow: { mass: 1, tension: 280, friction: 60 }"}</div>
          <sc.BallContainer>
            <sc.SmallBall style={propsSlow}></sc.SmallBall>
          </sc.BallContainer>
          <div>{"Molasses: { mass: 1, tension: 280, friction: 120 }"}</div>
          <sc.BallContainer>
            <sc.SmallBall style={propsMolasses}></sc.SmallBall>
          </sc.BallContainer>
        </sc.Content>
      )}
    </div>
  );
};
