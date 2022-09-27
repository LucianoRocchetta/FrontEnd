import React, { CSSProperties } from "react";
import { GenericButtonProps } from "../../../../shared/types";

export const GenericButton = ({
    children,
    onClick,
    className,
    style,
}: GenericButtonProps) => {
    return (
        <button onClick={onClick} className={className} style={style}>
            {children}
        </button>
    );
};
