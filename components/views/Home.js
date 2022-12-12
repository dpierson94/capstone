import html from "html-literal";

export default () => html`
<section id="Home">
  <h2>IS Report MO</h2>
    <p>Welcome to Invasive Species(IS) Report MO.</p>
    <h3>
    The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
</h3>
</section>
  `;
