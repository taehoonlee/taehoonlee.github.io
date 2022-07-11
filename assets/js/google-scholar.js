(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 275;  /* updated on 2022-07-11 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
