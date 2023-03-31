import styles from "./HexagonGridFloat.module.css";
import styled from "styled-components";
import * as dat from "lil-gui";
import { useState, useEffect, useRef} from "react";

const HexagonGrid = styled.div`
  font-size: 0;
  width: 100%;
  &::before {
    content: "";
    width: calc(${(props) => props.size}px / 2 + ${(props) => props.margin}px);
    float: left;
    height: 120%;
    shape-outside: repeating-linear-gradient(
      #0000 0 calc(${(props) => props.factor}px - 3px),
      #000 0 ${(props) => props.factor}px
    );
  }

  div {
    width: ${(props) => props.size}px;
    margin: ${(props) => props.margin}px;
    height: calc(${(props) => props.size}px * 1.1547);
    display: inline-block;
    font-size: initial;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    margin-bottom: calc(
      ${(props) => props.margin}px - ${(props) => props.size}px * 0.2885
    );
    background: ${(props) => props.color1};
  }

  div:nth-child(odd) {
    background: ${(props) => props.color2};
  }
`;

export default function HexagonGridFloat({
  count = 91,
  size = 70,
  margin = 4,
}) {
  const [state, setState] = useState({
    count: count,
    color1: "#00ffff",
    color2: "#008080",
    size: size,
    margin: margin,
  });
  const factor = 1.732 * state.size + 4 * state.margin - 1;
  

  const ref = useRef(null);
  useEffect(() => {
    const gui = new dat.GUI({container: ref.current});

    gui.add(state, "count", 1, 500, 1).onFinishChange((value) => {
      setState({ ...state, count: value });
    });
    gui.add(state, "size", 10, 150, 1).onFinishChange((value) => {
      setState({ ...state, size: value });
    });
    gui.add(state, "margin", 1, 70, 1).onFinishChange((value) => {
      setState({ ...state, margin: value });
    });
    gui.addColor(state, "color1").onFinishChange((value) => {
      setState({ ...state, color1: value });
    });
    gui.addColor(state, "color2").onFinishChange((value) => {
      setState({ ...state, color2: value });
    });
  }, []);

  const hexagon_array = [];
  for (let i = 0; i < state.count; i++) {
    hexagon_array.push(<div key={i}></div>);
  }

  return (
    <div className="component-view">
    <div ref={ref} className={styles.main}>
      <HexagonGrid
        size={state.size}
        margin={state.margin}
        factor={factor}
        color1={state.color1}
        color2={state.color2}
      >
        {hexagon_array}
      </HexagonGrid>
    </div>
    </div>
  );
}
