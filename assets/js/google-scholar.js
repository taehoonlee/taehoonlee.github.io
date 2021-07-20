(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 219;  /* updated on 2021-07-20 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
