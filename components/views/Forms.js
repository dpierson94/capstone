import html from "html-literal";

export default () => html`
<section id="forms">
<form id="forms" method="POST" action="">
  <h2>Fill out your report</h2>
  <div id="report">
    <label for="servicename">Service Name:</label><br>
    <input type ="text" id="servicename" name="servicename"><br>
    <label for="client">Client:</label><br>
    <input type ="text" id="client" name="client"><br>
    <label for="address">Address:</label><br>
    <input type ="text" id="address" name="address"><br>
    <label for="city">City:</label><br>
    <input type ="text" id="city" name="city"><br>
    <label for="zipCode">Zip Code:</label><br>
    <input type ="text" id="zipcode" name="zipcode"><br>
    <label for="applicationdate">Application Date:</label><br>
    <input type ="text" id="applicationdate" name="applicationdate"><br>
    <label for="timestarted">Time Started:</label><br>
    <input type ="text" id="timestarted" name="timestarted"><br>
    <label for="timestopped">Time Stopped:</label><br>
    <input type ="text" id="timestopped" name="timestopped"><br>
    <label for="herbicideamount">Herbicide Amount:</label><br>
    <input type ="text" id="herbicideamount" name="herbicideamount"><br>
    <label for="targetspecies">Target Species:</label><br>
    <input type ="text" id="targetspecies" name="targetspecies"><br>
  </div>
</form>
</section>
  `;
