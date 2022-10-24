import { Link } from "react-router-dom"
import { MovieInfoCardProps } from "../../../../../shared/types"

export const MovieInfoCard = ({to, backgroundImage}:MovieInfoCardProps) => {
    return (
        <Link to = {to}>
            <img src = {backgroundImage} />
        </Link>
    )
}