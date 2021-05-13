'use strict';

const path = require('path');
const fs = require('fs');
const Controller = require('egg').Controller;

class FileController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, files';
  }

  async show() {
    const { ctx } = this;
    const fileName = ctx.params.id;
    const filePath = path.resolve(process.cwd(), 'files', fileName);
    try {
      // eslint-disable-next-line no-bitwise
      await fs.promises.access(filePath, fs.constants.F_OK | fs.constants.R_OK);
      ctx.body = fs.createReadStream(filePath);
      ctx.attachment(filePath);
    } catch (e) {
      ctx.status = 404;
    }
  }
}

module.exports = FileController;
