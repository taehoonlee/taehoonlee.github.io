(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 234;  /* updated on 2021-12-09 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
