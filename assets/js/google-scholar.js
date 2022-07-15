(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 277;  /* updated on 2022-07-15 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
