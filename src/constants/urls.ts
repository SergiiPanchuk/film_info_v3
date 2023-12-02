const baseURL:string = 'https://api.themoviedb.org/3';

const popular = '/movie/popular';
const genre = '/genre/movie/list';
const top = '/movie/top_rated';
const upcoming = '/movie/upcoming';

const urls = {
    movie: {
        base: popular,
        top: top,
        upcoming: upcoming,
        byMovieId: (id: string) => `/movie/${id}`,
        byName: (name: string) => `/search/movie?query=${name}`
    },
    genre: {
        genre: genre,
        byGenreId: (genreId: string) => `/discover/movie?with_genres=${genreId}`
    },
    cast: {
        byMovieId: (movie_id: number) => `/movie/${movie_id}/credits`
    }
}

export {
    urls,
    baseURL
}