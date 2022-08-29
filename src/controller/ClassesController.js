import database from '../database/models/index.js';

export class Classes {
  static async getAllClasses(ctx, next) {
    try {
      const allClasses = await database.Classes.findAll();
      ctx.status = 200;
      return (ctx.body = allClasses);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error.message;
      return;
    }
  }

  static async getOneClass(ctx, next) {
    const { id } = ctx.params;
    try {
      ctx.status = 200;
      const oneClass = await database.Classes.findOne({
        where: {
          id,
        },
      });
      return (ctx.body = oneClass);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error.message;
      return;
    }
  }

  static async createClass(ctx, next) {
    const newClass = ctx.request.body;
    try {
      ctx.status = 201;
      const createNewClass = await database.Classes.create(newClass);
      return (ctx.body = createNewClass);
    } catch (error) {
      ctx.body = error.message;
      ctx.status = 500;
      return;
    }
  }

  static async updateClass(ctx, next) {
    const { id } = ctx.params;
    const newInfos = ctx.body;
    try {
      ctx.status = 204;
      await database.Classes.update(newInfos, { where: { id } });
      const updatedClass = await database.Classes.findOne({
        where: { id },
      });
      return (ctx.body = updatedClass);
    } catch (error) {
      ctx.status = 500;
      ctx.body = error.message;
      return;
    }
  }

  static async deleteClass(ctx, next) {
    const { id } = ctx.params;
    try {
      ctx.status = 200;
      await database.Classes.destroy({ where: { id } });
      return (ctx.body = { mensagem: `id ${id} deletado` });
    } catch (error) {
      ctx.status = 500;
      ctx.body = error.message;
      return;
    }
  }
}
