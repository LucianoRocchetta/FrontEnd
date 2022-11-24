import { Link } from "react-router-dom"
import { MovieInfoCardProps } from "../../../../../shared/types"

export const MovieInfoCard = ({to, backgroundImage}:MovieInfoCardProps) => {
    return (
        <Link to = ''>
            <img src = {backgroundImage} alt = {backgroundImage}/>
        </Link>
    )
}