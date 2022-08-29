import Router from '@koa/router';
import { classesRoutes } from './classesRoutes.js';
import { personRoutes } from './personRoutes.js';
import { levelsRoutes } from './levelsRoutes.js';
const router = new Router();

router
  .use(personRoutes.routes(), personRoutes.allowedMethods())
  .use(classesRoutes.routes(), classesRoutes.allowedMethods())
  .use(levelsRoutes.routes(), levelsRoutes.allowedMethods());

router.get('/', async (ctx, next) => {
  ctx.status = 200;
  ctx.body = 'Welcome to my API';
  return;
});

export { router };
