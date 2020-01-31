(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 133;  /* updated on 2020-01-31 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
