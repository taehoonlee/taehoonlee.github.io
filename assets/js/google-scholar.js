(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 226;  /* updated on 2021-10-08 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
