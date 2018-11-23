const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

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
  async users(parent, args, ctx, info) {
    // 1. check if logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    // 3. If they do, query all the users.
    return ctx.db.query.users({}, info);
  },
};

module.exports = Query;
