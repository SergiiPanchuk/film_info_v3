import {axiosVideoService} from "./axiosVideoService";
import {baseVideoURL} from "../../constants";

const apiKey:string = 'AIzaSyCsUALEgzsMeWclyCLZLuVKLgY0kQkO1y0';

const videoService = {
    getVideo: (title:string) => axiosVideoService.get(`${baseVideoURL}?part=snippet&q=${title}-Oficial Trailer&key=${apiKey}`)
}

export {
    videoService
}