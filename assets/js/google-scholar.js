(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 190;  /* updated on 2021-01-24 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
