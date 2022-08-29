import Router from '@koa/router';
import { Classes } from '../controller/ClassesController.js';

const classesRoutes = new Router();

classesRoutes.get('/classes', Classes.getAllClasses);
classesRoutes.get('/classes/:id', Classes.getOneClass);
classesRoutes.put('/classes/:id', Classes.updateClass);
classesRoutes.post('/classes', Classes.createClass);
classesRoutes.del('/classes/:id', Classes.deleteClass);

export { classesRoutes };
