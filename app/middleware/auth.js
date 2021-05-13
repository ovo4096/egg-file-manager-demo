'use strict';

module.exports = async (ctx, next) => {
  const { isAuthed } = ctx.queries;
  if (isAuthed) {
    await next();
  }
};
