import React from "react";
import { useParams } from "react-router-dom";

const OtherPage: React.FC<{}> = () => {
    const {pid} = useParams();
    return (
        <div>other page {pid}.</div>
    )
}

export default OtherPage;