(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 264;  /* updated on 2022-05-16 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
