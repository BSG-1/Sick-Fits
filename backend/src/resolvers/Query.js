//used for pulling data
const Query = {
    //this is where database calls are going to go
    dogs(parent, args, ctx, info) {
        global.dogs = global.dogs || [];
        return global.dogs;
    },

};

module.exports = Query;
