(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 144;  /* updated on 2020-03-13 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
