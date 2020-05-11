$(function(){
	$.get('http://data.fixer.io/api/latest', {'access_key': '522d2267aef52804675f59a1fa14ac49'}, function(response){
		var EUR = String(response.rates.RUB).slice(0,5);
		var USD = String(EUR / response.rates.USD).slice(0,5);
		$('.USD-value').text(USD);
		$('.EUR-value').text(EUR);
	});
});