(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 283;  /* updated on 2022-10-10 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
