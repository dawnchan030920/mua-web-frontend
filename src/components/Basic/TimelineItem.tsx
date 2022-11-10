import React from "react";
import {ReactComponent as Clock16} from "../../assets/icons/clock16.svg";
import {keyframes} from "styled-components";
import styled from "styled-components";

type TimelineItemProps = {
  pid: number;
  name: string;
  description: string;
  time: string;
}

const light = keyframes`
  from {
    box-shadow: 0 0 4px #2E8B57;
  }
  to {
    box-shadow: 0 0 12px #10482b;
  }
`

const LightCircle = styled.div`
  background-color: #2E8B57;
  position: absolute;
  top: 0.45rem;
  width: 0.6rem;
  height: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  animation: ${light} 0.8s ease-in-out infinite alternate;
`

const TimelineItemContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-template-rows: auto auto;
  transform: translate3d(0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.18) 0 0 0;
  transition: all 0.4s;
  border-radius: 0.5rem;
  padding: 0 0;
  background-color: transparent;
  &:hover {
    transform: translate3d(0px, -0.6rem, 0px);
    box-shadow: rgba(0, 0, 0, 0.18) 0 1px 4px;
    padding: 0.4rem 0;
    background-color: white;
  }
`

const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  return (
    <TimelineItemContainer>
      <div style={{
        gridColumn: `2 / span 1`,
        gridRow: `1`
      }}>
        <div style={{
          fontSize: `0.8rem`,
          display: "flex",
          alignItems: `center`,
          gap: `0.6rem`,
          color: `rgb(125, 125, 125)`,
          padding: `0.3rem 0`
        }}><Clock16/>{props.time}</div>
      </div>
      <div style={{
        gridColumn: `1`,
        gridRow: `1 / span 2`,
        display: `flex`,
        justifyContent: `center`,
        width: `100%`,
        position: `relative`
      }}>
        <div style={{
          background: `#2E8B57`,
          width: `0.25rem`
        }}/>
        <LightCircle />
      </div>
      <div style={{
        gridColumn: `2`,
        gridRow: `2`,
        padding: `0.2rem 0 0.5rem 0`
      }}>
        <div style={{
          fontSize: `1.5rem`,
          fontWeight: `600`
        }}>{props.name}</div>
        <div style={{
          padding: `0.2rem 0 0`
        }}>{props.description}</div>
      </div>
    </TimelineItemContainer>
  )
}

export default TimelineItem;