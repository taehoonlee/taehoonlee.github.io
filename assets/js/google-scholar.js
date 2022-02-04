(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 248;  /* updated on 2022-02-04 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
