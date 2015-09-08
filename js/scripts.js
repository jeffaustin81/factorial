var factorial = function(n) {
	if(n > 0) {
		return n * factorial(n -1);
	} else if(n === 0) {
		return 1;
	}
};

$(document).ready(function () {
	$("form#factorial").submit(function(event) {
		
		var n = parseInt($("input#n").val());
		var answer = factorial(n);
		
		$(".n").text(n);
		$(".answer").text(answer);

		
		$("#result").show();
		event.preventDefault();
	});
});