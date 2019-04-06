// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
		if (currency >= H && currency <= 10000) {
			return findHalf();
		} else if (currency < H && currency > Q) {
			return findQuarters();
		} else if (currency < Q && currency > D) {
			return findDimes();
		} else if (currency < D && currency > N) {
			return findNickels();
		} else if (currency < N && currency !== 0) {
			return obj.P = currency / P;
		} else if (currency <= 0) {
			return obj;
		} else if (currency > 10000) {
			return obj = "error: \"You are rich, my friend! We don't have so much coins for exchange\"";
		}


		function findHalf() {
			b = Math.floor(currency / H);
			if (b > 0) {
				obj.H = b;
			}	
			currency -= H * b;
			findQuarters();

			for (var i = 0; i < keys.length; i++) {
				keys[i] + ": " + obj[keys[i]];
			}
		}

		function findQuarters() {
			b = Math.floor(currency / Q);
			if (b > 0) {
				obj.Q = b;
			}
			currency -= Q * b;
			findDimes();
		}

		function findDimes() {
			b = Math.floor(currency / D);
			if (b > 0) {
				obj.D = b;
			}
			currency -= D * b;
			findNickels();
		}

		function findNickels() {
			b = Math.floor(currency / N);
			if (b > 0) {
				obj.N = b;
			}
			currency -= b;
			findPennies();
		}

		function findPennies() {
			if (currency > 0) {
				obj.P = currency / P;
			}
		}
}

		var obj = {};
		var keys = Object.keys(obj);

		var H = 50;
		var Q= 25;
		var D = 10;
		var N = 5;
		var P = 1;
		var b;

