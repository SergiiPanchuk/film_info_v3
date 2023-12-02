import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {
    GenreIdPage,
    GenrePage,
    HomePage,
    MovieDetailsPage,
    PopularPage,
    SearchPage,
    TopPage,
    UpcomingPage
} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayouts/>, children: [
            {index: true, element: <Navigate to={'home'}/>},
            {path: 'home', element: <HomePage/>},
            {path: 'search', element: <SearchPage/>},
            {path: 'populate', element: <PopularPage/>},
            {path: 'top', element: <TopPage/>},
            {path: 'upcoming', element: <UpcomingPage/>},
            {path: 'genre', element: <GenrePage/>},
            {path: 'genre/:genreId', element: <GenreIdPage/>},
            {path: 'details', element: <MovieDetailsPage/>}
        ]
    }
])

export {
    router
}