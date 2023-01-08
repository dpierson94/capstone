import html from "html-literal";

export default (state) => html`
<section id="contact">
  <form action="https://formspree.io/f/xvonovql" method="POST">
  <label id="email">
    Your email:
    <input type="email" name="email">
  </label>
  <label id="suggest">
    Your suggestions:
    <textarea name="message"></textarea>
  </label>
  <button type="submit">Send</button>
</form>
</section>
`;
