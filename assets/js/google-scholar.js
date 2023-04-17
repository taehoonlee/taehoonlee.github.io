(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 303;  /* updated on 2023-04-18 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
