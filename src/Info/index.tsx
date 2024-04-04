import { GithubFilled, MailFilled, PhoneFilled } from "@ant-design/icons";

import { info } from "../_template";
import styles from "./index.module.less";
import { USE_AVATAR, avatar } from "../assets/avatar";

function Info() {
  return (
    <header>
      <div className={styles.info}>
        {USE_AVATAR ? (
          <div className={styles.avatar}>
            <img src={avatar} width={120}></img>
          </div>
        ) : null}
        <div className={styles.info_right}>
          <div className={styles.top}>
            <div className={styles.left}>
              <span className={styles.name}>{info.name}</span>
              {info.github ? (
                <a
                  className={styles.github}
                  href={`https://github.com/${info.github}`}
                  target="_blank"
                >
                  <GithubFilled />
                  <span className={styles.username}>{info.github}</span>
                </a>
              ) : null}
            </div>
            <span className={styles.job}>{info.job}</span>
          </div>
          <div className={styles.bottom}>
            <div className={styles.tags}>
              {info.tags.map((line, i) => (
                <span key={i}>{line.join(" · ")}</span>
              ))}
            </div>
            <div className={styles.contact}>
              <div>
                <MailFilled />
                <span>{info.email}</span>
              </div>
              <div>
                <PhoneFilled />
                <span>{info.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Info;
