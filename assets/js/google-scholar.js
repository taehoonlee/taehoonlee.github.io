(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 237;  /* updated on 2021-12-30 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
