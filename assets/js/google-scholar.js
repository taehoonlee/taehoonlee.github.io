(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 192;  /* updated on 2021-02-02 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
