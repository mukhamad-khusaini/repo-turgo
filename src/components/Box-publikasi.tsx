import { useEffect } from "react";
import CallData from "../services/CallData";
import Template_publikasi from "./Template-publikasi";
import { ITemplate } from "../model/ITemplate";

export default function Box_publikasi({
  getter,
  setter,
  onload,
}: {
  getter: [];
  setter: (d: ITemplate[]) => void;
  onload: (e: boolean) => void;
}) {
  useEffect(() => {
    CallData("1qrVYEfXv4-vOOy1Wzse_wKPEgtt4a4rrr24FIRC05MY", setter);
    onload(true);
  }, []);

  return (
    <>
      {getter.map((u: ITemplate) => {
        return (
          <Template_publikasi
            key={u.judul}
            judul={u.judul}
            deskripsi={u.deskripsi}
            gambar={u.gambar}
            file={u.file}
            onload={onload}
          />
        );
      })}
    </>
  );
}
