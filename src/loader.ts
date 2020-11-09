import {readdirSync} from 'fs';
import HTTPServer from "./httpserver/HTTPServer";
import BaseEndpoint from "./routes/abstract/baseendpoint";

export function load(server: HTTPServer){
    let endpoints = readdirSync(`${__dirname}/routes/`);

    for (let endpoint of endpoints) {
        if(!endpoint.endsWith(".js")) continue;
        console.log(endpoint);
        let endpointClass = require(`./routes/${endpoint}`).default;
        let data = new endpointClass();
        console.log(data.endpoint);
        server.addRoute(data.endpoint, data.onRequest)
    }

}