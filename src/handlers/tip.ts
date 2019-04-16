import { tipDao } from "./index";
import { ITip } from "bargain-dao/dist/items/tip";

export class Tip{

    static getTipsByEmail = (req: any,res: any,next: any)=>{
        if(req.query.email){
            tipDao.getItemsByEmail(req.query.email,{email:0})
            .then((tips:ITip[])=>{
                res.send({tips:tips});
            });
        }
    }

    static removeATip = (req:any,res:any,next:any)=>{
        if(req.query.id){
            tipDao.removeItemById(req.query.id)
            .then((result:number)=>{
                res.send({status:result==1});
            })
        }
    }

    static addATip = (req:any,res:any,next:any)=>{
        if(req.body.email&&req.body.keywords){
            tipDao.addItem({email:req.body.email,keywords:req.body.keywords})
            .then((result:any)=>{
                if(result._id){
                    res.send({status:1});
                }else{
                    res.send({status:0});
                }
            })
        }
    }

    static updateTip = (req:any,res:any,next:any)=>{
        
        if(req.body._id){
            tipDao.updateItem({_id:req.body._id},req.body)
            .then((result:any)=>{
                if(result.ok>0){
                    res.send({status:1,newTip:req.body});
                }else{
                    res.send({status:0});
                }
            })
        }
    }
}