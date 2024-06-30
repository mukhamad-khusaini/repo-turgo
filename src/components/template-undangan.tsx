import style from "../assets/css/template-undangan.module.css";
import { ILoader, ITemplate } from "../model/ITemplate";

export default function Template_undangan({
  judul,
  deskripsi,
  gambar = "",
  file,
  onload,
}: ITemplate & ILoader) {
  return (
    <div
      onClick={() => (location.href = file)}
      onLoad={() => onload(false)}
      className={style["template-undangan"]}
    >
      <div className={style["template-single"]}>
        <img
          src={
            gambar != ""
              ? "https://drive.google.com/thumbnail?id=" +
                gambar.split("=")[1] +
                "&sz=w1000"
              : "https://mukhamad-khusaini.github.io/repoturgo/images/default.jpg"
          }
          alt="undangan"
        />
        <div>
          <h4>{judul}</h4>
          <hr />
          <p>{deskripsi}</p>
        </div>
      </div>
    </div>
  );
}
