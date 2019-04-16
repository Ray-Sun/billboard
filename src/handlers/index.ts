import { Dao } from "bargain-dao";
import { DBtype } from "bargain-dao/dist/shared/dbList";
let dao = new Dao(DBtype.MONGO);
let feed = dao.feed;
let tip = dao.tip;

export const feedDao = feed;
export const tipDao = tip;