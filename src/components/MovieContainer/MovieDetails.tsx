import {useNavigate} from "react-router-dom";
import {FC} from "react";

import css from "./MovieDetails.module.css"
import {baseImgURL} from "../../constants";
import {IDetails, ProductionCompany} from "../../interfaces";
import {Actors} from "../CastContainer";
import {MovieVideo} from "../VideoContainer/MovieVideo";
// import {MovieVideo} from "./MovieVideo";

interface IProps {
    movie: IDetails
}


const MovieDetails: FC<IProps> = ({movie}) => {
    const {
        poster_path, overview, genres, title,
        release_date, runtime, vote_average, production_countries, budget, production_companies,
        revenue, id
    } = movie;

    const navigate = useNavigate();

    return (
        <div>
            <div className={css.MovieDetails}>
                <div className={css.details__img}>
                    <img src={baseImgURL + poster_path} alt={title}/>
                </div>
                <div className={css.details__info}>
                    <h3 className={css.details__info_title}>{title}</h3>
                    <div className={css.details__info_genre}>
                        <ul>
                            {genres.map((genre) => (
                                <li key={genre.id} onClick={() => navigate(`/genre/${genre.id}?name=${genre.name}`)}>{genre.name}</li>
                            ))}
                        </ul>
                        <div>
                            <img src="/icon/DataIcon.svg" alt="DataIcon"/>
                            <span>{release_date}</span>
                        </div>
                        <div>
                            <img src="/icon/TimeIcon.svg" alt="TimeIcon"/>
                            <span>{runtime}-minutes</span>
                        </div>
                        <div>
                            <img src="/icon/RatingIcon.svg" alt="RatingIcon"/>
                            <span>{vote_average}</span>
                        </div>
                    </div>
                    <p className={css.details__info_overview}>{overview}</p>
                    <div className={css.more__info}>
                        <p>Country : {production_countries[0].name}</p>
                        <p>Budget : {budget}$</p>
                        <p>Revenue : {revenue}$</p>
                        <p>Production :
                            <ul>
                                {production_companies.map((company: ProductionCompany) => (
                                    <li key={company.id}>{company.name}</li>
                                ))}
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <MovieVideo title={title}/>
            <Actors id={id}/>
        </div>
    )
}

export {MovieDetails};