import { GoogleSpreadsheet } from "google-spreadsheet";
import { ITemplate } from "../model/ITemplate";

export default async function (id: string, callback: (d: ITemplate[]) => void) {
  const GS = new GoogleSpreadsheet(id, {
    apiKey: "AIzaSyCgd0d1fF1qms7KxVz1FhfgQIcdHvLA02w",
  });

  await GS.loadInfo(); // loads document properties and worksheets
  const Sheet = GS.sheetsByIndex[0];

  const rows = await Sheet.getRows();
  const undang: ITemplate[] = [];
  rows.forEach((data) => {
    undang.push({
      judul: data.get("Nama"),
      deskripsi: data.get("Deskripsi"),
      gambar: data.get("Screenshot"),
      file: data.get("File"),
    });
  });

  callback(undang);
}
