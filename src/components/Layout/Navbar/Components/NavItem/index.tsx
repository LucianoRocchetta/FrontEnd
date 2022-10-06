import { Link } from "react-router-dom";
import { NavItemProps } from "../../../../../shared/types";

export default (props: NavItemProps) => {
    const { children, label, link, ...params } = props;
    return (
        <Link to={link} {...params}>
            {label ?? children}
        </Link>
    );
};
