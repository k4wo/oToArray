'use strict';

module.exports = function(obj, flag) {
	return Object.keys(obj).map(function(key) {
		return flag ? [key, obj[key]] : obj[key];
	});
};