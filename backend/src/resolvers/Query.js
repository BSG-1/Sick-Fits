//this forwards the query from yoga to prisma
const { forwardTo } = require('prisma-binding');

//used for pulling data
const Query = {
    //anytime someone specifically asks for items, forward to the database; use the same api on the server as the client; quick mockup without authentication for pushing and pulling info to and from databse
    items: forwardTo('db'),
    // async items(parent, args, ctx, info) {
    //     const items = await ctx.db.query.items();
    //     return items;
    // }
};

module.exports = Query;
