import React, { ReactNode } from "react";

type IconNodeProps = {
    icon: ReactNode;
    color: string;
}

const IconNode: React.FC<IconNodeProps> = (props) => {
    return (
        <>
            <div style={{
                width: `100%`,
                height: `100%`,
                position: `relative`,
                backgroundColor: props.color,
                filter: `blur(17px)`
            }}>
            </div>
            <div style={{
                position: `absolute`,
                top: `50%`,
                left: `50%`,
                transform: `translateX(-50%) translateY(-50%)`
            }}>
                {props.icon}
            </div>
        </>
    )
}

export default IconNode;