import React from "react"
import { useParams } from "react-router-dom";

const SchoolPage: React.FC<{}> = () => {
    const { pid } = useParams();
    return (
        <div>This is a school {pid}.</div>
    )
}

export default SchoolPage;