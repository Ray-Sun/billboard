# billboard
REST API, dev with restify

#Depend on
* [bargain-dao](https://github.com/Ray-Sun/dao) modules

config server.ts, 
```javascript
const _HARDCODE = 'token';
server.pre((req,res,next)=>{
    if(req.headers.key===_HARDCODE){
        return next();
    }else{
        return new Error('URBAD');
    }
});
```