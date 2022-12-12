import html from "html-literal";

export default () => html`
<section id="contact">
<form id="contact" method="POST" action="">
  <h2>Contact and Suggestions</h2>
  <div id="suggestion">
    <label for="suggestion">Suggestions:</label><br>
    <input type ="text" id="suggestion" name="suggestion">
  </div>
  </form>
  </section>
  `;
