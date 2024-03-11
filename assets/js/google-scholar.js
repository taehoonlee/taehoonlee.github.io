(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 352;  /* updated on 2024-03-11 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
