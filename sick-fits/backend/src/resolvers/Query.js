const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db'), // Forward the query from Yoga to Prisma (no extra logic needed)
  item: forwardTo('db'), // Forward the query from Yoga to Prisma (no extra logic needed)
  // async items(parent, args, ctx, info) {
  //   console.log('Getting Items!!');
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
