import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IDetails, IMovies} from "../interfaces";

const movieService = {
    getPopular: (page:string = '1'): IRes<IMovies> => axiosService.get(urls.movie.base, {params: {page}}),
    getTop: (page = '1'): IRes<IMovies> => axiosService.get(urls.movie.top, {params: {page}}),
    getUpcoming: (page = '1'): IRes<IMovies> => axiosService.get(urls.movie.upcoming, {params: {page}}),
    getByMovieId: (id: string): IRes<IDetails> => axiosService.get(urls.movie.byMovieId(id)),
    getByGenreId: (id: string, page: string = '1'): IRes<IMovies> => axiosService.get(urls.genre.byGenreId(id), {params: {page}}),
    getByName: (name: string, page = '1'): IRes<IMovies> => axiosService.get(urls.movie.byName(name), {params: {page}})
}

export {
    movieService
}