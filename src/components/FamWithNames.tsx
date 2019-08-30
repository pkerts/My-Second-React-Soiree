import * as React from "react";

interface IFamProps {
    famName: string;
}

const FamWithProps: React.FC<IFamProps> = ({ famName }) => {
    return (<div>Hello, {famName}!</div>);
};

export default FamWithProps;
