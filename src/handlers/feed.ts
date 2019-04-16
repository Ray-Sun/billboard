import { feedDao } from "./index";
import { IFeed } from "bargain-dao/dist/items/feed";

const PAGE_SIZE = 10;

export class Feed{
    static getFeedsByKeyword = (req: any,res: any,next: any)=>{
        if(req.query.keywords){
            let page = req.query.page?req.query.page:0;
            feedDao.getFeedsByKeywordsWithPage(req.query.keywords.trim(),{_id:0,expiredDate:0},PAGE_SIZE,page)
            .then((feeds:IFeed[])=>{
                res.send({feeds:feeds});
            });
        }
    }

    static getRecommendedFeeds = (req: any,res: any,next: any)=>{
        feedDao.getTheFirstFeedsBySource().then((feeds:IFeed[])=>{
            res.send({feeds:feeds});
        })
    }
    
}