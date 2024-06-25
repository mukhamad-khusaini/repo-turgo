import style from "../assets/css/template-publikasi.module.css";

export default function Template_publikasi() {
  return (
    <div className={style["template-publikasi"]}>
      <div className={style["template-single"]}>
        <img src="/images/kopSurat.png" alt="kop surat" />
        <h4>Kop Surat Pemuda</h4>
        <p>Gunakan sebagai kop surat atas nama pemuda</p>
        <button type="button" className={style.download}>
          <h4>Download</h4>
        </button>
      </div>
    </div>
  );
}
