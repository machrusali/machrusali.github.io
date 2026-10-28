# Panduan Langkah Demi Langkah Rilis GitHub Pages

**Repository:** `machrusalifuddin.github.io`  
**Domain:** `https://machrusalifuddin.github.io`

---

## Langkah 1: Membuat Repository Baru di GitHub
1. Login ke akun GitHub Anda (**machrusalifuddin**).
2. Klik tombol **`+`** (kanan atas) -> pilih **New repository**.
3. Set **Repository name** persis: `machrusalifuddin.github.io`.
4. Pilih **Public**.
5. Jangan centang "Add a README file" (agar repository dalam kondisi kosong).
6. Klik **Create repository**.

---

## Langkah 2: Menyiapkan Kode Lokal
1. Ekstrak seluruh file dari paket `.zip` ini ke dalam folder proyek lokal Anda.
2. Pastikan file `index.html` dan `styles.css` berada di tingkat paling atas (*root folder*).

---

## Langkah 3: Melakukan Push Kode ke GitHub
Buka Terminal / Command Prompt di dalam folder proyek Anda, lalu jalankan perintah berikut:

```bash
# Inisialisasi git lokal (jika belum)
git init

# Tambahkan semua file proyek
git add .

# Commit file
git commit -m "Feat: Initial release for Machrus Alifuddin portfolio"

# Pastikan nama branch adalah main
git branch -M main

# Hubungkan ke remote repository GitHub
git remote add origin https://github.com/machrusalifuddin/machrusalifuddin.github.io.git

# Push ke repository GitHub
git push -u origin main
```

---

## Langkah 4: Mengaktifkan & Konfigurasi GitHub Pages
1. Masuk ke halaman repository `machrusalifuddin/machrusalifuddin.github.io` di GitHub.
2. Klik menu **Settings** > **Pages** (di kolom navigasi sebelah kiri).
3. Di bagian **Build and deployment**:
   - **Source:** Pilih `Deploy from a branch`.
   - **Branch:** Pilih `main` dan folder `/ (root)`.
4. Klik **Save**.

---

## Langkah 5: Verifikasi Rilis
1. Tunggu 1 - 3 menit hingga GitHub Actions / Deployment selesai.
2. Buka browser dan kunjungi: **`https://machrusalifuddin.github.io`**.
3. Pastikan seluruh konten CV, riwayat kerja (Mumtaz Teknologi, PT SISI, jamtangan.com, Owner Panda Oren) tampil dengan rapi dan responsif.
