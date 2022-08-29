import Router from '@koa/router';
import { LevelsController } from '../controller/LevelsController.js';

const levelsRoutes = new Router();

levelsRoutes.get('/levels', LevelsController.getAllLevels);
levelsRoutes.get('/levels/:id', LevelsController.getOneLevel);
levelsRoutes.put('/levels/:id', LevelsController.updateLevels);
levelsRoutes.del('/levels/:id', LevelsController.deleteLevels);
levelsRoutes.post('/levels', LevelsController.createLevel);

export { levelsRoutes };
