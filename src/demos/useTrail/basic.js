import React, { useState } from "react";
import { animated, useTrail } from "react-spring";
import { sc } from "../styledComponents";

export const Basic = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  const trail = useTrail(5, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: active ? 1 : 0,
    x: active ? 0 : 20,
    height: active ? 50 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

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
            {active ? "hide" : "show"}
          </sc.Button>
          {trail.map(({ height, ...style }, index) => (
            <animated.div key={index} style={style}>
              <animated.div style={{ height }}>🎉</animated.div>
            </animated.div>
          ))}
        </sc.Content>
      )}
    </div>
  );
};
