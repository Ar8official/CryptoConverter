class CryptoAPI {
	async getCryptoCurrenciesList() {
		const url = await fetch('https://api.alternative.me/v1/ticker/', {mode: 'cors'});
		
		//return as json
		const cryptoCurrencies = await url.json();
		console.log(cryptoCurrencies);
		//return the object
		return {
			cryptoCurrencies
		}
	}
}