export function padNumber(num) {
	if (num <= 99) {
		return num.toString().padStart(3, "0") // '1 => 001'	}
	} else {
		return num
	}
}
