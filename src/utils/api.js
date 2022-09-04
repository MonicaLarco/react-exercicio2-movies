import { config } from "../config";

export function withBaseUrl(path){
    return `${config.API_URL}${path}?api_key=${config.API_KEY}`
};