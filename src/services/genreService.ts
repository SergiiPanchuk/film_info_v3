import {IRes} from "../types";
import {IGenreResponse} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const genreService = {
    getGenre: (): IRes<IGenreResponse> => axiosService.get(urls.genre.genre),
}

export {
    genreService
}