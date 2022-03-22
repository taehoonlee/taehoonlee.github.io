(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 256;  /* updated on 2022-03-22 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
