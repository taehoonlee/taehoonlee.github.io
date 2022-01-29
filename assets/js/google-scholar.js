(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 242;  /* updated on 2022-01-29 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
