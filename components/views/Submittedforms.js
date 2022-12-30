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
    ${state.custdata
        .map(subform => {
          return `<tr><td><a href="/custdata/${subform._id}">${
            subform.servicename
          }</a></td><td>${subform.client}</td><td>${
            subform.address
          }</td><td>${subform.city}</td><td>${
            subform.zipcode
          }</td></tr>`;
        })
        .join("")}

        ${state.timedata
        .map(subform => {
          return `<tr><td><a href="/timedata/${subform._id}">${
            subform.applicationdate
          }</a></td><td>${subform.timestarted}</td><td>${
            subform.timestopped
          }`;
        })
        .join("")}

        ${state.workdata
        .map(subform => {
          return `<tr><td><a href="/timedata/${subform._id}">${
            subform.applicatorname
          }</a></td><td>${subform.applicatorlicense}</td><td>${
            subform.herbicideamount
          }</td><td>${subform.herbicideapplied}</td><td>${
            subform.herbiciderate
          }</td></tr>${subform.herbicideepa}</td><td>${
            subform.surfactant
          }</td></tr>${subform.surfactantrate}</td><td>${
            subform.surfactantepa
          }</td></tr>${subform.targetspecies}</td><td>`;
        })
        .join("")}
  </table>
</section>
`;
