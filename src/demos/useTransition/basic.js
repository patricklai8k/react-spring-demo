import React, { useState } from "react";
import { config, useTransition } from "react-spring";
import { sc } from "../styledComponents";

export const Basic = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const transition = useTransition(active, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
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
          <sc.BallContainer>
            {transition(
              (styles, item) => item && <sc.Ball style={styles}></sc.Ball>
            )}
          </sc.BallContainer>
        </sc.Content>
      )}
    </div>
  );
};
