(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 230;  /* updated on 2021-11-14 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
