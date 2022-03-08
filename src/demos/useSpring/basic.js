import React, { useState } from "react";
import { useSpring } from "react-spring";
import { sc } from "../styledComponents";

export const Basic = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const props = useSpring({ x: active ? 500 : 0 });
  return (
    <div>
      <sc.H2 onClick={() => setShow((prev) => !prev)}>Demo 1</sc.H2>
      {show && (
        <sc.Content>
          <sc.Button
            onClick={() => {
              setActive((prev) => !prev);
            }}
          >
            Activate
          </sc.Button>
          <sc.Label>{props.x}</sc.Label>
          <sc.BallContainer>
            <sc.Ball style={props}></sc.Ball>
          </sc.BallContainer>
        </sc.Content>
      )}
    </div>
  );
};
