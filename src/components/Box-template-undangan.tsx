import { useEffect } from "react";
import CallData from "../services/CallData";
import Template_undangan from "./Template-undangan";
import { ITemplate } from "../model/ITemplate";

export default function Box_template_undangan({
  getter,
  setter,
  onload,
}: {
  getter: [];
  setter: (d: ITemplate[]) => void;
  onload: (e: boolean) => void;
}) {
  useEffect(() => {
    CallData("1-I349arfKOwTCPkGNb25LGnbsJEYbKze1TUVITo2Kss", setter);
  }, []);

  return (
    <>
      {getter.map((u: ITemplate) => {
        return (
          <Template_undangan
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
