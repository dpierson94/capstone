import html from "html-literal";

export default (state) => html`
<section id="Home">
  <h2>IS Report MO</h2>
    <p>Welcome to Invasive Species(IS) Report MO.</p>
    <h3>
    The cloud conditions in ${state.weather.city} are ${state.weather.description}. Temperature is ${state.weather.temp}F,
    Humidity is ${state.weather.humidity}%, Wind Speed is ${state.weather.wind}m/s;
</h3>
</section>
  `;
