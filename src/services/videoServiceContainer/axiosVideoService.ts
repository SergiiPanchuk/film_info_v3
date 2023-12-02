import axios from "axios";

import {baseVideoURL} from "../../constants";

const axiosVideoService = axios.create({
    baseURL: baseVideoURL,
});

export {
    axiosVideoService
}