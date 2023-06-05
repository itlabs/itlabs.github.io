var MECHAT_ID = "merchant.test.example.com";
var BACKEND_URL_VALIDATE_SESSION = window.location.href + "validateSession";
var BACKEND_URL_PAY = window.location.href + "pay";

var appleButton = document.querySelection(".apple-pay-button");

//check if apple pay is available
if (window.ApplePaySession && ApplePaySession.canMakePaymentsWithActiveCard(MECHAT_ID) {
    appleButton.style.display = "block";
}

appleButton.addEventListener("click", function () {

    var request = {
        countryCode: 'US',
        currencyCode: 'USD',
        supportedNetworks: ['visa', 'masterCard', 'amex', 'discover'],
        merchantCapabilities: ['supports3DS'],
        total: {
            label: 'Your Merchant Name',
            amount: '10.00'
        },
    }
    var session = new ApplePaySession(3, request);
		
	session.begin();

        var applePaySession = new ApplePaySession(6, {
            countryCode: "US",
            currencyCode: "USD",
            supportedNetworks: ["visa", "masterCard", "amex", "discover"],
            merchantCapabilities: ["supports3DS],
                		total: {label: " Amazing Shop ", amount: " 10.00 "}
                	});

                	//applePaySession.begin();

                	//applePaySession.onvalidateMerchant = function(event) {

                	//};

                	//applePaySession.onpaymentauthorized = function(event) {

                	//};

});