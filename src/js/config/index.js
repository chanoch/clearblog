import axios from 'axios';

export default function config(origin, path, next) {
    console.log(path);
    axios.get(`${origin}${path}/config.json`)
        .then(response => {
            const config = response.data;
            next(config);
        });
}