import database from '../database/models/index.js';

export class LevelsController {
  static async getAllLevels(ctx, next) {
    try {
      const levels = await database.Levels.findAll();
      ctx.status = 200;
      ctx.body = levels;
      return;
    } catch (error) {
      ctx.status = 500;
      return (ctx.body = err.message);
    }
  }

  static async getOneLevel(ctx, next) {
    const { id } = ctx.params;
    try {
      const levels = await database.Levels.findOne({
        where: {
          id,
        },
      });
      ctx.status = 200;
      ctx.body = levels;
      return;
    } catch (error) {
      ctx.status = 500;
      ctx.body = err.message;
      return;
    }
  }

  static async createLevel(ctx, next) {
    const data = ctx.request.body;
    try {
      const newLevelRegister = await database.Levels.create(data);
      ctx.status = 201;
      ctx.body = newLevelRegister;
      return;
    } catch (error) {
      ctx.status = 500;
      ctx.body = err.message;
      return;
    }
  }

  static async updateLevels(ctx, next) {
    const { id } = ctx.params;
    const newLevel = ctx.request.body;
    try {
      ctx.status = 204;
      await database.Levels.update(newLevel, { where: { id } });
      const updatedLevel = await database.Levels.findOne({
        where: { id },
      });
      return (ctx.body = updatedLevel);
    } catch (error) {
      ctx.status = 500;
      ctx.body = err.message;
      return;
    }
  }

  static async deleteLevels(ctx, next) {
    const { id } = ctx.params;
    try {
      ctx.status = 200;
      await database.Levels.destroy({ where: { id } });
      return (ctx.body = { msg: `${id} deletado com sucesso` });
    } catch (error) {
      ctx.status = 500;
      ctx.body = err.message;
      return;
    }
  }
}
