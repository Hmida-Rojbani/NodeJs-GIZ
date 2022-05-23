const _ = require('lodash');


 module.exports.testEqual=function (array,array2)
 { return _.isEqual(array,array2)?'Arrays are equals':'Arrays not equals'; }