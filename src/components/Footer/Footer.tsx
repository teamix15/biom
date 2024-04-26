import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>©2024 Novik Timofei</p>
      <div className={styles.media}>
        <a href="https://github.com/teamix15" title="GitHub" target="_blank">
          <img src="github-mark.svg" alt="GitHub" />
        </a>
        <a href="https://t.me/timofeinovik" title="Telegram" target="_blank">
          <img src="iconmonstr-telegram-1.svg" alt="Telegram" />
        </a>
      </div>
    </div>
  );
}
