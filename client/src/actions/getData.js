import { FETCH_GEODATA, FETCH_WEATHER } from './types';

export const fetchGeoData = () => dispatch => {
  console.log("fetching geodata");
  navigator.geolocation.getCurrentPosition(
    position => {
    console.log("got data");
      console.log(position.coords);
      dispatch({
        type: FETCH_GEODATA,
        payload: position
      });

      var url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=20a5ca4f642080493675e573392c7e03`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('GOT WEATHER DATA!', data);
          dispatch({
            type: FETCH_WEATHER,
            payload: data
        });
      })
    },
    error => {
      console.log('ERROR', error.message);
      console.error(JSON.stringify(error));
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
  );
};