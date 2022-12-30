import html from "html-literal";

export default (state) => html`
<section id="Forms">
  <form id="forms" method="POST" action="">
    <h2 id="headtworeport">Herbicide Use Report & Weather</h2>
    <div id="reports">
      <div class="repone">
        <label for="servicename">Service Name:</label><br>
        <input type ="text" id="servicename" name="servicename"><br>
      </div>
      <div class="reptwo">
        <label for="client">Client:</label><br>
        <input type ="text" id="client" name="client"><br>
      </div>
      <div class="repthree">
        <label for="address">Address:</label><br>
        <input type ="text" id="address" name="address"><br>
      </div>
      <div class="repfour">
        <label for="city">City:</label><br>
        <input type ="text" id="city" name="city"><br>
      </div>
      <div class="repfive">
        <label for="zipCode">Zip Code:</label><br>
        <input type ="text" id="zipcode" name="zipcode"><br>
      </div>
      <div class="repsix">
        <label for="applicationdate">Application Date:</label><br>
        <input type ="text" id="applicationdate" name="applicationdate"><br>
      </div>
      <div class="repseven">
        <label for="timestarted">Time Started:</label><br>
        <input type ="text" id="timestarted" name="timestarted"><br>
      </div>
      <div class="repeight">
        <label for="timestopped">Time Stopped:</label><br>
        <input type ="text" id="timestopped" name="timestopped"><br>
      </div>
      <div class="repfifteen">
        <label for="applicatorname">Applicator Name:</label><br>
        <input type ="text" id="applicator" name="applicator"><br>
      </div>
      <div class="repsixteen">
        <label for="applicatorlicense">Applicator License:</label><br>
        <input type ="text" id="applic" name="applic"><br>
      </div>
      <div class="repnine">
        <label for="herbicideamount">Herbicide Amount:</label><br>
        <input type ="text" id="herbicideamount" name="herbicideamount"><br>
      </div>
      <div class="repeleven">
        <label for="herbicideapplied">Herbicide Applied:</label><br>
        <input type ="text" id="papplied" name="papplied"><br>
      </div>
      <div class="reptwelve">
        <label for="herbiciderate">Herbicide Rate:</label><br>
        <input type ="text" id="apprate" name="apprate"><br>
      </div>
      <div class="reptwelvetwo">
        <label for="surfactantrate">Surfactant Rate:</label><br>
        <input type ="text" id="apprate" name="apprate"><br>
      </div>
      <div class="repthirteen">
        <label for="herbicideepa">Herbicide EPA:</label><br>
        <input type ="text" id="epanum" name="epanum"><br>
      </div>
      <div class="repthirteentwo">
        <label for="surfactantepa">Surfactant EPA:</label><br>
        <input type ="text" id="epanum" name="epanum"><br>
      </div>
      <div class="repfourteen">
        <label for="additionalmaterials">Additional Materials:</label><br>
        <input type ="text" id="addmat" name="addmat"><br>
      </div>
      <div class="repten">
        <label for="targetspecies">Target Species:</label><br>
        <input type ="text" id="targetspecies" name="targetspecies"><br>
      </div>
    </div>
    <div id="weather">
      <div class="reptemp">
        <label for="tempf">Temperature:</label><br>
        <input type ="text" value=${state.weather.temp}&deg;F>
      </div>
      <div class="repwinddir">
        <label for="winddir">Wind Direction:</label><br>
        <input type ="text" id="winddir" name="winddir"><br>
      </div>
      <div class="repwindspe">
        <label for="windspe">Wind Speed:</label><br>
        <input type ="text" id="windspe" name="winspe"><br>
      </div>
      <div class="repcloudcov">
        <label for="cloudcov">Cloud Cover:</label><br>
        <input type ="text" id="cloudcov" name="cloudcov"><br>
      </div>
      <div class="rephumid">
        <label for="humid">Humidity:</label><br>
        <input type ="text" value=${state.weather.humidity}%><br>
      </div>
      <input type="submit" name="submit" value="Submit Report" />
      <div class="print">
        <button type="submit" onclick="window.print();return false;" />Print</button>
      </div>
    </div>
  </form>
</section>
  `;

