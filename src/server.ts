import * as fs from "fs";
import * as restify from "restify";
import {routers} from './router';


let server = restify.createServer();

//dev 
// const corsMiddleware = require('restify-cors-middleware')
// const cors = corsMiddleware({
//   preflightMaxAge: 5, //Optional
//   origins: ['http://localhost:8100','http://localhost'],
//   allowHeaders: ['key'],
//   exposeHeaders: ['key']
// })
// server.pre(cors.preflight);
// server.use(cors.actual);

//pre check, simple web token
const _HARDCODE = 'token';
server.pre((req,res,next)=>{
    if(req.headers.key===_HARDCODE){
        return next();
    }else{
        return new Error('URBAD');
    }
});




//setting
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use((req,res,next)=>{
    req.headers.accept = 'application/json';
    return next();
});

//router setting
for(let router of routers){
    router.applyRoutes(server);
}

server.listen(8001,()=>{
    console.log(`${server.name} listening at ${server.url}`);
});