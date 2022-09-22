import React, { CSSProperties } from "react";
import { GenericButtonProps } from "../../../../shared/types";

export const GenericButton = ({
    label,
    onClick,
    className,
    style,
}: GenericButtonProps) => {
    return (
        <button onClick={onClick} className={className} style={style}>
            {label}
        </button>
    );
};
