const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db'), // Forward the query from Yoga to Prisma (no extra logic needed)
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  // me() is a ES6 shorthand method syntax for me: function()
  me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    ); // `info` is the query that's coming from the client side.
  },
};

module.exports = Query;
