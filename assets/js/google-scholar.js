(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 146;  /* updated on 2020-04-19 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
