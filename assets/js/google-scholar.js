(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 338;  /* updated on 2023-12-30 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
