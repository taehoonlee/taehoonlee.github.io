(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 263;  /* updated on 2022-05-08 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
