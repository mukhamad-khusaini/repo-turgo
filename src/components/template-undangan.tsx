import style from "../assets/css/template-undangan.module.css";

export default function Template_undangan() {
  return (
    <div className={style["template-undangan"]}>
      <div className={style["template-single"]}>
        <img src="/images/undangan.png" alt="undangan" />
        <div>
          <h4>Template undangan layatan</h4>
          <hr />
          <p>Download template undangan layatan</p>
        </div>
      </div>
    </div>
  );
}
