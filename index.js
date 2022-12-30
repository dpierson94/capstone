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
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Forms") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);c
    });
  }
};

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

            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
            store.Home.weather.humidity = response.data.main.humidity;
            store.Home.weather.wind = response.data.wind.speed;
            store.Home.weather.description = response.data.weather[0].main;
            done();
          })
          .catch(err => console.log(err));
          break;
      default :
        done();
    }

    switch (view) {
      case "Forms":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Forms.weather = {};
            store.Forms.weather.city = response.data.name;
            store.Forms.weather.temp = kelvinToFahrenheit(response.data.main.temp);
            store.Forms.weather.humidity = response.data.main.humidity;
            store.Forms.weather.wind = response.data.wind.speed;
            store.Forms.weather.description = response.data.weather[0].main;
            done();
          })
          .catch(err => console.log(err));
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
