(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 310;  /* updated on 2023-07-14 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
