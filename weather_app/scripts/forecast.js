
console.log('========= Weather App ============');


class Forecast{
    constructor(){        
        this.key = 'wv7g8G5xUHn3S6Fk0lyS2Sz9LGdeTbDV';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
    
        //object shorthand notation
        return { cityDets, weather };
    }
    
    // get city information

    async getCity(city){

        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0];
    };

    // get weather information
    async getWeather(id){

        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        return data[0];
    };

     
}





// getCity('sahiwal')
//     .then(data => {
//         return getWeather(data.Key);
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// getWeather('259645');