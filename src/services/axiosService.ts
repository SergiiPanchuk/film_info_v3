import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL})
axiosService.interceptors.request.use(request => {
    request.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTc4MjFlMGM0NTkwNDE5OTIzMzJhZDIwOTRkNWQ2NiIsInN1YiI6IjY1NDdhMGI3ZDU1YzNkMDBmZjk2MTBiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KtEmYReIa2EGxRwm4DxbO6jfjjUavPFNWfvomt1eNno';
    return request;
})

export {
    axiosService
}