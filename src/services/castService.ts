import {IRes} from "../types";
import {ICredits} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const castService = {
    getByMovieId: (movie_id: number): IRes<ICredits> => axiosService.get(urls.cast.byMovieId(movie_id))
}

export {
    castService
}