(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 191;  /* updated on 2021-01-29 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
