export interface ITemplate {
  judul: string;
  deskripsi: string;
  gambar?: string;
  file: string;
}

export interface ILoader {
  onload: (e: boolean) => void;
}
