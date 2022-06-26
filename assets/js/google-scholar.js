(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 272;  /* updated on 2022-06-26 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
