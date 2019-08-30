import * as React from "react";

interface IFamilyProps {
    famName: string;
}

const Family = (props: IFamilyProps) => {
    return (<div>Hello, {props.famName}!</div>);
};

export default Family;
