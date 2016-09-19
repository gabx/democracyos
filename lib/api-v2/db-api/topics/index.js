var Topic = require('lib/models').Topic

/**
 * Default find Method, to be used in favor of Model.find()
 * @method find
 * @param  {object} query - mongoose query options
 * @return {Mongoose Query}
 */
module.exports.find = function find (query) {
  return Topic.find(Object.assign({
    deletedAt: null
  }, query))
}
