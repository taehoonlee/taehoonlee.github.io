(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 207;  /* updated on 2021-04-16 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
