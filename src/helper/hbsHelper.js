const helper = {};
module.exports = helper;
helper.toJSON = function (context) {
    return JSON.stringify(context);
};