"use strict";

class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>青い鳥</h1>
        <p>おいしい料理と楽しいひとときを提供します</p>

        <nav>
          <ul>
            <li><a href="index.html">ホーム</a></li>
            <li><a href="menu.html">メニュー</a></li>
            <li><a href="store.html">店舗情報</a></li>
            <li><a href="news.html">お知らせ</a></li>
            <li><a href="contact.html">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>
      `;
  }
}

class ContactForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="contact">
      <h2>お問い合わせ</h2>
      <p>
        ご質問やご予約に関するお問い合わせは、以下のフォームよりお気軽にご連絡ください。
      </p>
      <form method="post" action="/contact.html">
        <label for="name">お名前:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">メールアドレス:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">メッセージ:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <input type="submit" value="送信" />
      </form>
    </section>
    `;
  }
}

customElements.define("nav-header", HeaderComponent);
customElements.define("contact-form", ContactForm);

window.addEventListener("load", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("フォームを送信しました。");
    window.location.reload();
  });
});
