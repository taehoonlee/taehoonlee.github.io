(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 317;  /* updated on 2023-08-04 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
