import html from "html-literal";

export default (state) => html`
<body>
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
  <div class="embut">
  <button type="submit">Send</button>
  </div>
</form>
</section>
</body>
`;
