import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { router } from './routes/index.js';
import { personRoutes } from './routes/personRoutes.js';

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.use(personRoutes.routes());

app.listen(PORT, () => console.log(`Started at localhost:${PORT}`));
