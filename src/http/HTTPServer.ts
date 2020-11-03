import {App, HttpRequest, HttpResponse, SSLApp, TemplatedApp} from "uWebSockets.js";

export default class HTTPServer{

    app : TemplatedApp;
    port : number;

    /**
     * Initializes the object.
     * @param port
     */
    constructor(port: number) {
        this.port = port;
        this.app = App({});
    }

    /**
     * Used to add a route to our websserver.
     * @param endpoint
     * @param callback
     */
    addRoute(endpoint: string, callback: (res: HttpResponse, req:HttpRequest) => void){
        this.app.get(endpoint, callback);
    }


    /**
     * Starts the webserver on the port
     * given in the constructor.
     */
    listen(callback: ()=>void){
        this.app.listen(this.port,()=>{
            callback();
        });
    }
}