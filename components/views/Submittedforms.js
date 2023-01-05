import html from "html-literal";

export default (state) => html`
<section id="subform">
  <table id="workdata">
    <tr>
      <th>Service Name</th>
      <th>Client</th>
      <th>Address</th>
      <th>City</th>
      <th>Zip Code</th>
      <th>Application Date</th>
      <th>Time Started</th>
      <th>Time Stopped</th>
      <th>Applicator Name</th>
      <th>Applicator License #</th>
      <th>Herbicide Amount</th>
      <th>Herbicide Applied</th>
      <th>Herbicide Rate</th>
      <th>Herbicide EPA #</th>
      <th>Surfactant</th>
      <th>Surfactant Rate</th>
      <th>Surfactant EPA #</th>
      <th>Additional Materials</th>
      <th>Target Species</th>
      <th>Temperature</th>
      <th>Humidity</th>
      <th>Wind Direction</th>
      <th>Wind Speed</th>
      <th>Cloud Cover</th>
    </tr>
    ${state.invasives
        .map(subform => {
          return `<tr><td><a href="/workdata/${subform._id}">${
            subform.servicename
          }</a></td><td>${subform.client}</td><td>${
            subform.address
          }</td><td>${subform.city}</td><td>${
            subform.zipcode
          }</td><td>${subform.applicationdate}</td><td>${
            subform.timestarted
          }</td><td>${subform.timestopped}</td><td>${
            subform.applicatorname
          }</td><td>${subform.applicatorlicense}</td><td>${
            subform.herbicideamount
          }</td><td>${subform.herbicideapplied}</td><td>${
            subform.herbiciderate
          }</td><td>${subform.herbicideepa}</td><td>${
            subform.surfactant
          }</td><td>${subform.surfactantrate}</td><td>${
            subform.surfactantepa
          }</td><td>${subform.additionalmaterials}</td><td>${
            subform.targetspecies
          }</td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;
