import React, { useState } from "react";
import {
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from "react-spring";
import { sc } from "../styledComponents";

export const Basic = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const springRef = useSpringRef();
  const springProps = useSpring({ ref: springRef, x: active ? 500 : 0 });

  const springRef2 = useSpringRef();
  const springProps2 = useSpring({ ref: springRef2, x: active ? 500 : 0 });

  const transitionRef = useSpringRef();
  const transitionProps = useTransition(active, {
    ref: transitionRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 100,
    config: config.gentle,
  });

  useChain([transitionRef, springRef, springRef2]);

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
            {transitionProps(
              (styles, item) => item && <sc.Ball style={styles}></sc.Ball>
            )}
          </sc.BallContainer>
          <sc.BallContainer>
            <sc.Ball style={springProps}></sc.Ball>
          </sc.BallContainer>
          <sc.BallContainer>
            <sc.Ball style={springProps2}></sc.Ball>
          </sc.BallContainer>
        </sc.Content>
      )}
    </div>
  );
};
