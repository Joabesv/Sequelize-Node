import Router from '@koa/router';
import { Person } from '../controller/PersonController.js';

const personRoutes = new Router();

personRoutes.get('/people', Person.getPeople);
personRoutes.get('/people/:id', Person.getPerson);
personRoutes.get(
  '/people/:studentId/registration/:registrationId',
  Person.getRegistration
);
personRoutes.put('/people/:id', Person.updatePerson);
personRoutes.del('/people/:id', Person.deletePerson);
personRoutes.post('/people', Person.createPerson);

export { personRoutes };
