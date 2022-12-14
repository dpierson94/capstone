import { Header, Nav, Main, Footer } from "./components"
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config()

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Forms") {
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // const reportinput = [];
      //       for (let input of inputList.reportinput) {
      //         if (input.value = '') {
      //           reportinput.push(input.value);
      //         }
      //       }

      const requestData = {
        servicename: inputList.servicename.value,
        client: inputList.client.value,
        address: inputList.address.value,
        city: inputList.city.value,
        zipcode: inputList.zipcode.value,
        applicationdate: inputList.applicationdate.value,
        timestarted: inputList.timestarted.value,
        timestopped: inputList.timestopped.value,
        applicatorname: inputList.applicatorname.value,
        applicatorlicense: inputList.applicatorlicense.value,
        herbicideamount: inputList.herbicideamount.value,
        herbicideapplied: inputList.herbicideapplied.value,
        herbiciderate: inputList.herbiciderate.value,
        herbicideepa: inputList.herbicideepa.value,
        surfactant: inputList.surfactant.value,
        surfactantrate: inputList.surfactantrate.value,
        surfactantepa: inputList.surfactantepa.value,
        additionalmaterials: inputList.additionalmaterials.value,
        targetspecies: inputList.targetspecies.value,
        temperature: inputList.temperature.value,
        humidity: inputList.humidity.value,
        winddirection: inputList.winddirection.value,
        windspeed: inputList.windspeed.value,
        cloudcover: inputList.cloudcover.value,
      };
      console.log("request Body", requestData);
      // store.Submittedforms.forms.push(requestData);

      axios
        .post(`${process.env.INVASIVE_REPORTS_API_URL}/invasives`, requestData)
        .then((response) => {
          store.Submittedforms.forms.push(response.data);
          router.navigate("/Submittedforms");
        })
        .catch((error) => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Forms";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            const roundedSpeed = wispe =>
              Math.round(wispe)

            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
            store.Home.weather.humidity = response.data.main.humidity;
            store.Home.weather.wind = roundedSpeed(response.data.wind.speed);
            store.Home.weather.description = response.data.weather[0].main;
            done();
          })
          .catch(err => console.log(err));
          break;
      case "Forms":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            const roundedSpeed = wispe =>
              Math.round(wispe)

            store.Forms.weather = {};
            store.Forms.weather.city = response.data.name;
            store.Forms.weather.temp = kelvinToFahrenheit(response.data.main.temp);
            store.Forms.weather.humidity = response.data.main.humidity;
            store.Forms.weather.deg = response.data.wind.deg;
            store.Forms.weather.speed = roundedSpeed (response.data.wind.speed);
            store.Forms.weather.all = response.data.clouds.all;
            done();
          })
          .catch(err => console.log(err));
          break;
      case "Submittedforms":
        axios
          .get(`${process.env.INVASIVE_REPORTS_API_URL}/invasives`)
          .then(response => {
            store.Submittedforms.forms = response.data;
            console.log(response.data);
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      case "Submittedforms":
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`)
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            const roundedSpeed = wispe =>
              Math.round(wispe)

            store.Submittedforms.weather = {};
            store.Submittedforms.weather.city = response.data.name;
            store.Submittedforms.weather.temp = kelvinToFahrenheit(response.data.main.temp);
            store.Submittedforms.weather.humidity = response.data.main.humidity;
            store.Submittedforms.weather.wind = response.data.wind.deg;
            store.Submittedforms.weather.wind = roundedSpeed(response.data.wind.speed);
            store.Submittedforms.clouds = response.data.main.clouds;
            console.log(response.data);
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      default :
        done();
    }
  }
});

router
  .on({
    "/":() => render(),
      ":view": params => {
      let view = capitalize (params.data.view);
      render(store[view]);
    }
  })
    .resolve();
