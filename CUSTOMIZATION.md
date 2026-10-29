# Panduan kustomisasi template

Mulai kustomisasi dari `src/data/portfolio.ts`. File ini memuat data profil,
teks halaman, tautan, proyek, pratinjau proyek, riwayat karier, dan pendidikan.
Komponen di `src/sections/` membaca data tersebut, jadi isi halaman bisa diganti
tanpa mengubah markup setiap bagian.

## Struktur kode

- `src/App.tsx` menyusun urutan navigasi dan bagian halaman.
- `src/data/portfolio.ts` adalah satu tempat untuk mengganti konten template.
- `src/components/` berisi komponen umum seperti ikon, foto profil, dan judul bagian.
- `src/sections/` berisi komponen khusus untuk tiap bagian landing page.
- `src/index.css` berisi token tema, gaya dasar, aturan tiap bagian, dan layout responsif.
- `public/assets/` menyimpan gambar yang bisa diakses oleh browser.

## Mengganti profil dan tautan

Edit objek `identity` di `src/data/portfolio.ts` untuk mengganti nama, peran,
lokasi, status ketersediaan, gambar, alamat email, dan profil LinkedIn. Nilai
`portraitSrc` harus berupa path dari folder publik, misalnya
`/assets/foto-profil.jpg`; salin gambar baru ke `public/assets/` terlebih dahulu.

Edit objek `navigation` untuk mengganti label atau tujuan navigasi. Semua tujuan
internal menggunakan ID bagian seperti `#projects` dan `#journey`.

## Mengganti konten bagian halaman

- `about`: headline, pengantar, statistik, daftar teknologi, dan bidang keahlian.
- `expertise`: judul serta deskripsi bagian keahlian.
- `capabilities`: judul, ringkasan, dan daftar teknologi tiap kartu.
- `projects`: kategori, deskripsi, tema warna, dan isi pratinjau tiap proyek.
- `experience`: perusahaan, periode, peran, deskripsi, dan label teknologi.
- `education`: gelar, institusi, label, dan tanggal studi.
- `contact` dan `footer`: teks ajakan, label kontak, dan deskripsi footer.

Gunakan bentuk data proyek yang sudah ada sebagai contoh saat menambah proyek.
Nilai `color` memilih modifier kelas `project-card--blue`,
`project-card--orange`, atau `project-card--dark`; nilai `preview.kind`
memilih tampilan demo yang cocok.

## Mengubah tema dan ukuran layout

Variabel di `:root` pada awal `src/index.css` adalah titik awal untuk mengganti
warna utama, warna latar, warna aksen, warna garis, lebar konten, dan gutter.
Aturan global ditempatkan dalam `@layer base`. Gaya per bagian berada di luar
layer tersebut agar kelas komponen mengatur tampilannya secara konsisten.

Gunakan kelas modifier `project-card--...` untuk variasi komponen dan awalan
`is-...` untuk status sementara, seperti navigasi yang sudah di-scroll atau
tab karier yang sedang dipilih. Aturan tablet dan ponsel berada di dalam media
query pada stylesheet yang sama.
