import html from "html-literal";

export default (state) => html`
<section id="subform">
  <table id="custdata">
    <tr>
      <th>Service Name</th>
      <th>Client</th>
      <th>Address</th>
      <th>City</th>
      <th>Zip Code</th>
    </tr>
  </table><br><br>
  <table id="timedata">
    <tr>
      <th>Application Date</th>
      <th>Time Started</th>
      <th>Time Stopped</th>
    </tr>
  </table><br><br>
  <table id="workdata">
    <tr>
      <th>Applicator Name</th>
      <th>Applicator License #</th>
      <th>Herbicide Amount</th>
      <th>Herbicide Applied</th>
      <th>Herbicide Rate</th>
      <th>Herbicide EPA #</th>
      <th>Surfactant</th>
      <th>Surfactant Rate</th>
      <th>Surfactant EPA #</th>
      <th>Target Species</th>
    </tr>
  </table><br><br>
  <table id="weatherdata">
    <tr>
      <th>Temperature</th>
      <th>Humidity</th>
      <th>Wind Direction</th>
      <th>Wind Speed</th>
      <th>Cloud Cover</th>
    </tr>
  </table>
</section>
`;
