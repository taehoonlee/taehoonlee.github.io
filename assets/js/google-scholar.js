(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 137;  /* updated on 2020-02-25 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
