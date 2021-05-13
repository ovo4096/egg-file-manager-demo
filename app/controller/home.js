'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<html><body>auth: <img src="http://127.0.0.1:7001/files/demo.jpg?isAuthed"><br/>no auth: <img src="http://127.0.0.1:7001/files/demo.jpg"></body></html>';
  }
}

module.exports = HomeController;
