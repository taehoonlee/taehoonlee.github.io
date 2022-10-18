(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 287;  /* updated on 2022-10-18 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
