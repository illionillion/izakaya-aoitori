"use strict";

class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <div class="logo">
            <a href="index.html">居酒屋「青い鳥」</a>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" class="menu-icon">&#9776;</label>
          <ul class="header-menu desktop">
            <li><a href="index.html">ホーム</a></li>
            <li><a href="menu.html">メニュー</a></li>
            <li><a href="store.html">店舗情報</a></li>
            <li><a href="news.html">お知らせ</a></li>
            <li><a href="contact.html">お問い合わせ</a></li>
          </ul>
          <ul class="header-menu mobile">
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
        <input type="text" id="name" name="name" placeholder="名前を入力" required />

        <label for="email">メールアドレス:</label>
        <input type="email" id="email" name="email" placeholder="メールアドレスを入力" required />

        <label for="message">メッセージ:</label>
        <textarea id="message" name="message" rows="4" placeholder="メッセージを入力" required></textarea>

        <button type="submit">送信</button>
      </form>
    </section>
    `;
  }
}

customElements.define("nav-header", HeaderComponent);
customElements.define("contact-form", ContactForm);

window.addEventListener("load", () => {
  document.querySelector("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("フォームを送信しました。");
    window.location.reload();
  });
});
