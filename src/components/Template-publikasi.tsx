import style from "../assets/css/template-publikasi.module.css";
import { ITemplate } from "../model/ITemplate";

export default function Template_publikasi({
  judul,
  deskripsi,
  gambar = "",
  file,
}: ITemplate) {
  return (
    <div className={style["template-publikasi"]}>
      <div className={style["template-single"]}>
        <img
          src={
            gambar
              ? "https://drive.google.com/thumbnail?id=" +
                gambar.split("=")[1] +
                "&sz=w1000"
              : "https://mukhamad-khusaini.github.io/repoturgo/images/default.jpg"
          }
          alt="kop surat"
        />
        <h4>{judul}</h4>
        <p>{deskripsi}</p>
        <button
          type="button"
          onClick={() => (location.href = file)}
          className={style.download}
        >
          <h4>Download</h4>
        </button>
      </div>
    </div>
  );
}
