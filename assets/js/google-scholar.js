(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 134;  /* updated on 2020-02-02 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
