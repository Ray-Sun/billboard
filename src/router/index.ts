import { feedRouter } from "./feed";
import { tipRouter } from './tip';

const _routers = [];

_routers.push(feedRouter);
_routers.push(tipRouter);


export const routers = _routers;