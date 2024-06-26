import style from "../assets/css/topper.module.css";

export default function Topper({ setter }: { setter: (a: boolean) => void }) {
  return (
    <div className={style.topper}>
      <svg
        className={style["vector-background"]}
        xmlns="http://www.w3.org/2000/svg"
        width="390"
        height="368"
        viewBox="0 0 390 368"
        fill="none"
      >
        <path d="M127.401 278.149C-26.9281 251.717 -27.3318 103.717 -24 51L-24 -44C-6.49999 -53.5 388.01 -49.5 410.5 -49.5C432.99 -49.5 418.492 411.959 400.5 363.5C382.508 315.041 320.312 311.189 127.401 278.149Z" />
      </svg>
      <div className={style["background-template"]}></div>
      <img className={style["logo"]} src="/logo.png" alt="logo" />
      <div className={style["click-box"]}>
        <div onClick={() => setter(true)} className={style["clicker1"]}>
          <img src="/images/template-pic.png" alt="tmp" />
          <p>Template</p>
        </div>
        <svg
          className={style["line-sparator"]}
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="35"
          viewBox="0 0 2 35"
          fill="none"
        >
          <path d="M1 0V34.5" stroke="black" />
        </svg>
        <div onClick={() => setter(false)} className={style["clicker2"]}>
          <img src="/images/publikasi-pic.png" alt="pub" />
          <p>Publikasi</p>
        </div>
      </div>
      <div className={style["box-hr"]}>
        <hr className={style.hr} />
      </div>
    </div>
  );
}
