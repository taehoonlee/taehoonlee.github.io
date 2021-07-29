(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 220;  /* updated on 2021-07-29 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
