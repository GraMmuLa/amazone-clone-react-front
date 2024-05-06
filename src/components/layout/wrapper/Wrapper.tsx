import classes from "./Wrapper.module.css"
import React, {ReactNode} from "react";

export const Wrapper: React.FunctionComponent<{children: ReactNode}> = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
}