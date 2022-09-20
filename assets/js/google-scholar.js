(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 280;  /* updated on 2022-09-20 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
