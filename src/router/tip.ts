import { Router } from "restify-router";
import { Tip } from '../handlers/tip'

const router = new Router();

router.get('/tips',Tip.getTipsByEmail);
router.del('/tips',Tip.removeATip);
router.post('/tips',Tip.addATip);
router.patch('/tips',Tip.updateTip)

export const tipRouter = router;