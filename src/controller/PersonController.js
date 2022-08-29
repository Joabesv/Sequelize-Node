import database from '../database/models/index.js';

export class Person {
  static async getPeople(ctx, next) {
    try {
      const people = await database.people.findAll();
      ctx.status = 200;
      ctx.body = people;
      return;
    } catch (err) {
      ctx.status = 500;
      return (ctx.body = err.message);
    }
  }

  static async getPerson(ctx, next) {
    try {
      const { id } = ctx.params;
      const person = await database.people.findOne({ where: { id } });
      if (!person)
        return (ctx.body = { msg: 'User not found', code: ctx.status });
      ctx.status = 200;
      ctx.body = person;
      return;
    } catch (err) {
      ctx.status = 500;
      ctx.body = err.message;
      return;
    }
  }

  static async createPerson(ctx, next) {
    const data = ctx.request.body;

    try {
      if (!data) return (ctx.body = { msg: 'deu ruim ai mano' });
      console.log(data);
      const newPerson = await database.people.create(data);
      ctx.status = 201;
      ctx.body = newPerson;
      return;
    } catch (err) {
      ctx.status = 500;
      ctx.body = err.message;
      return;
    }
  }

  static async updatePerson(ctx, next) {
    const { id } = ctx.params;
    const update = ctx.request.body;
    try {
      await database.people.update(update, { where: { id } });
      const updatePerson = await database.people.findOne({ where: { id } });
      return (ctx.body = updatePerson);
    } catch (err) {
      ctx.status = 500;
      ctx.body = err.message;
      return;
    }
  }

  static async deletePerson(ctx, next) {
    try {
      const { id } = ctx.params;
      if (!id) ctx.body = { msg: 'achei nao mano' };
      ctx.status = 200;
      await database.people.destroy({ where: { id } });
      return (ctx.body = { msg: `${id} deletado com sucesso` });
    } catch (err) {
      ctx.status = 500;
      ctx.body = err.message;
      return;
    }
  }

  static async getRegistration(ctx, next) {
    try {
      const { studentId, registrationId } = ctx.params;
      const registration = await database.Registration.findOne({
        where: { id: registrationId, student_id: studentId },
      });
      if (!registration)
        return (ctx.body = { msg: 'Registration not found', code: ctx.status });
      ctx.status = 200;
      ctx.body = registration;
      return;
    } catch (err) {
      ctx.status = 500;
      ctx.body = err.message;
      return;
    }
  }
}
