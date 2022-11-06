import React from "react";
import {ReactComponent as Clock24} from "../../assets/icons/clock24.svg";

type TimelineItemProps = {
    pid: number;
    name: string;
    description: string;
    time: string;
}

const TimelineItem: React.FC<TimelineItemProps> = (props) => {
    return (
        <div style={{
            display: `grid`,
            gridTemplateColumns: `2rem 1fr`,
            gridTemplateRows: `auto auto`
        }}>
            <div style={{
                gridColumn: `1 / span 2`,
                gridRow: `1`
            }}>
                <div style={{
                    fontSize: `1.2rem`,
                    display: "flex",
                    alignItems: `center`,
                    gap: `0.6rem`
                }}><Clock24 />{props.time}</div>
                <hr />
            </div>
            <div style={{
                gridColumn: `1`,
                gridRow: `2`,
                display: `flex`,
                justifyContent: `center`,
                width: `100%`
            }}>
                <div style={{
                    boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px`,
                    backgroundColor: `#2E8B57`,
                    width: `0.25rem`,
                    borderRadius: `0.25rem`
                }} />
            </div>
            <div style={{
                gridColumn: `2`,
                gridRow: `2`
            }}>
                <div style={{
                    fontSize: `2rem`,
                    fontWeight: `600`
                }}>{props.name}</div>
                <div>{props.description}</div>
            </div>
        </div>
    )
}

export default TimelineItem;