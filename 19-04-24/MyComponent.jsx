import React from "react";
import withLogger from "../utils/withLogger"

const MyComponent = ({message}) => {
    return <div>{message}</div>;

};


const EnhancedComponent = withLogger(MyComponent);
 export default EnhancedComponent;
