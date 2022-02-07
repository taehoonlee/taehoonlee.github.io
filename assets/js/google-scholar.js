(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 250;  /* updated on 2022-02-07 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
