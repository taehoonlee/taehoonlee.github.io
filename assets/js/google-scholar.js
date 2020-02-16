(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 136;  /* updated on 2020-02-16 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
