(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 320;  /* updated on 2023-08-28 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
