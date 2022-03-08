import React, { useState } from "react";
import ReactSlider from "react-slider";
import { useSpring } from "react-spring";
import { sc } from "../styledComponents";

export const Playground = () => {
  const [show, setShow] = useState(false);

  const [tension, setTension] = useState(170);
  const [friction, setFriction] = useState(50);
  const [mass, setMass] = useState(1);

  const props = useSpring({
    config: { tension: tension, friction: friction, mass: mass },
    from: { x: 0 },
    loop: { reverse: true },
    to: { x: 500 },
  });
  return (
    <div>
      <sc.H2 onClick={() => setShow((prev) => !prev)}>Demo 2</sc.H2>
      {show && (
        <sc.Content>
          <sc.BallContainer>
            <sc.Ball style={props}></sc.Ball>
          </sc.BallContainer>
          tension:
          <ReactSlider
            className="horizontal-slider"
            defaultValue={200}
            max={500}
            min={10}
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
            renderThumb={(props, state) => {
              setTension(state.valueNow);
              return <div {...props}>{state.valueNow}</div>;
            }}
          />
          friction:
          <ReactSlider
            className="horizontal-slider"
            defaultValue={50}
            max={100}
            min={10}
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
            renderThumb={(props, state) => {
              setFriction(state.valueNow);
              return <div {...props}>{state.valueNow}</div>;
            }}
          />
          mass:
          <ReactSlider
            className="horizontal-slider"
            defaultValue={1}
            max={10}
            min={1}
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
            renderThumb={(props, state) => {
              setMass(state.valueNow);
              return <div {...props}>{state.valueNow}</div>;
            }}
          />
        </sc.Content>
      )}
    </div>
  );
};
