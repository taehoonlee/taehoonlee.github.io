(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 138;  /* updated on 2020-03-03 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
