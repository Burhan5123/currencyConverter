function setAmount(){

	document.getElementById("amount").disabled = false;	
	document.getElementById("convertTo").disabled = false;

	var onhandcurrency = document.getElementById("onhand").value;
	document.getElementById("EURO").disabled = false;
	document.getElementById("USD").disabled = false;
	document.getElementById("CAD").disabled = false;
	document.getElementById("BTC").disabled = false;
	document.getElementById("ETH").disabled = false;

	if(onhandcurrency == "EUR"){
	document.getElementById("EURO").disabled = true;	
	}

	else if(onhandcurrency == "USD"){
	document.getElementById("USD").disabled = true;	
	}

	else if(onhandcurrency == "CAD"){
	document.getElementById("CAD").disabled = true;	
	}

	else if(onhandcurrency == "BTC"){
	document.getElementById("BTC").disabled = true;	
	}

	else if(onhandcurrency == "ETH"){
	document.getElementById("ETH").disabled = true;	
	}

}

function currencyConverter(){

	var onhandcurrency = document.getElementById("onhand").value;
	var onhandamount = parseFloat(document.getElementById("amount").value);
	var convertToCurrency = document.getElementById("convertTo").value;
	var convertedAmount = parseFloat(0);

	if(onhandcurrency == "EUR" && convertToCurrency == "USD1"){
		convertedAmount = onhandamount * 1.06;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "USD (1:1.06)";

	}

	else if(onhandcurrency == "EUR" && convertToCurrency == "CAD1"){
		convertedAmount = onhandamount * 1.36;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "CDN (1:1.36)";

	}

	else if(onhandcurrency == "EUR" && convertToCurrency == "BTC1"){
		convertedAmount = onhandamount * 0.000050;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "BTC (1:0.000050)";
	}

	else if(onhandcurrency == "EUR" && convertToCurrency == "ETH1"){
		convertedAmount = onhandamount * 0.00086;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "ETH (1:0.00086)";
	}

	else if(onhandcurrency == "USD" && convertToCurrency == "EUR1"){
		convertedAmount = onhandamount * 0.95;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "EUR (1:0.95)";

	}

	else if(onhandcurrency == "USD" && convertToCurrency == "CAD1"){
		convertedAmount = onhandamount * 1.29;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "CDN (1:1.29)";

	}

	else if(onhandcurrency == "USD" && convertToCurrency == "BTC1"){
		convertedAmount = onhandamount * 0.000047;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "BTC (1:0.000047)";

	}

	else if(onhandcurrency == "USD" && convertToCurrency == "ETH1"){
		convertedAmount = onhandamount * 0.00082;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "ETH (1:0.00082)";

	}
	else if(onhandcurrency == "CAD" && convertToCurrency == "EUR1"){
		convertedAmount = onhandamount * 0.73;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "EUR (1:0.73)";

	}

	else if(onhandcurrency == "CAD" && convertToCurrency == "USD1"){
		convertedAmount = onhandamount * 0.78;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "USD (1:0.78)";

	}

	else if(onhandcurrency == "CAD" && convertToCurrency == "BTC1"){
		convertedAmount = onhandamount * 0.000037;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "BTC (1:0.000037)";

	}

	else if(onhandcurrency == "CAD" && convertToCurrency == "ETH1"){
		convertedAmount = onhandamount * 0.00064;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "ETH (1:0.00064)";

	}

	else if(onhandcurrency == "BTC" && convertToCurrency == "EUR1"){
		convertedAmount = onhandamount * 19967.74;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "EUR (1:19,967)";

	}

	else if(onhandcurrency == "BTC" && convertToCurrency == "USD1"){
		convertedAmount = onhandamount * 21075.80;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "USD (1:21,075)";

	}

	else if(onhandcurrency == "BTC" && convertToCurrency == "CAD1"){
		convertedAmount = onhandamount * 27170.92;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "CDN (1:27,170)";

	}

	else if(onhandcurrency == "BTC" && convertToCurrency == "ETH1"){
		convertedAmount = onhandamount * 17.32;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "ETH (1:17.32)";

	}

	else if(onhandcurrency == "ETH" && convertToCurrency == "EUR1"){
		convertedAmount = onhandamount * 1147.89;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "EUR (1:1147)";

	}

	else if(onhandcurrency == "ETH" && convertToCurrency == "USD1"){
		convertedAmount = onhandamount * 1211.85;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "USD (1:1211)";

	}

	else if(onhandcurrency == "ETH" && convertToCurrency == "CAD1"){
		convertedAmount = onhandamount * 1560.48;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "CDN (1:1560)";

	}

	else if(onhandcurrency == "ETH" && convertToCurrency == "BTC1"){
		convertedAmount = onhandamount * 0.057;
		document.getElementById("convertedamount").disabled = false;
		document.getElementById("convertedamount").value = convertedAmount.toFixed(2) + "BTC (1:0.057)";

	}

}

