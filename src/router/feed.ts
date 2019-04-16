import { Router } from "restify-router";
import { Feed } from '../handlers/feed'

const router = new Router();

router.get('/feeds',Feed.getFeedsByKeyword);
router.get('/recommendations',Feed.getRecommendedFeeds);

export const feedRouter = router;