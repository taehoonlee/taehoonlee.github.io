(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 232;  /* updated on 2021-12-06 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
