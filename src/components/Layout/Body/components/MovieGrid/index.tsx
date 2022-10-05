import { useState } from "react";
import { Card } from "../../../../common";
import { MoviesGridProps } from "../../../../../shared/types";

export const MoviesGrid = ({movies:{category, images}}:MoviesGridProps) => {
    const [movies, setMovies] = useState(images);
    /*TEST*/
    return (
        
        <div className = "movies-grid">
            <h2>{category}</h2>
            <div className = 'grid-container'>
            {
                movies.map((movie:string, i:any) => {
                    console.log(movie);
                    return <Card img = {movie} key = {i}/>
                })
            }
            </div>
        </div>
    )
}