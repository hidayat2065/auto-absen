# Auto Absen --- Zepp OS QR Attendance Widget

Widget QR Code untuk **Amazfit Active Max** berbasis **Zepp OS**.

Project ini menampilkan QR Code absensi langsung pada smartwatch
sehingga pengguna cukup membuka widget **Absen** untuk menampilkan QR
yang dapat dipindai oleh mesin absensi.

## 📁 Struktur Project

``` text
auto-absen/
├── assets/
│   └── default.r/
│       ├── icon.png
│       ├── preview.png
│       ├── preview_en-US.png
│       ├── preview_id-ID.png
│       └── qr.png          <-- QR CODE DI SINI
├── page/
│   └── index.js
├── secondary-widget/
│   └── index.js             <-- Tampilan QR & brightness
├── app.json
└── README.md
```

## 🔄 Cara Mengganti QR Code

Jika ingin mengganti QR Code, **tidak perlu mengubah kode JavaScript**
selama nama file dan ukuran tetap sama.

File QR berada di:

``` text
assets/default.r/qr.png
```

### Ukuran QR Code

Gunakan:

``` text
348 × 348 px
```

Format:

``` text
PNG
```

Jadi file yang digunakan adalah:

``` text
assets/default.r/qr.png
```

dengan ukuran **348 × 348 px**.

### Langkah mengganti QR

1.  Buat QR Code baru sesuai data absensi.
2.  Buat langsung dengan ukuran **348 × 348 px**.
3.  Simpan dalam format PNG.
4.  Rename menjadi `qr.png`.
5.  Replace file:

``` text
D:\Amazfit-Dev\auto-absen\assets\default.r\qr.png
```

6.  Build ulang project:

``` powershell
cd D:\Amazfit-Dev\auto-absen
zeus build
```

7.  Install package baru ke Amazfit Active Max.

## 📐 Kenapa 348 × 348 px?

Layar Amazfit Active Max menggunakan area 480 × 480 px.

QR menggunakan ukuran 348 × 348 px dan ditempatkan di tengah:

``` text
(480 - 348) / 2 = 66
```

Konfigurasi pada `secondary-widget/index.js`:

``` javascript
createWidget(widget.IMG, {
  x: 66,
  y: 66,
  w: 348,
  h: 348,
  src: 'qr.png'
})
```

Artinya:

  Parameter        Nilai Fungsi
  ----------- ---------- -------------------
  `x`                 66 Posisi horizontal
  `y`                 66 Posisi vertikal
  `w`                348 Lebar QR
  `h`                348 Tinggi QR
  `src`         `qr.png` File QR

## ⚠️ Penting Saat Mengganti QR

Agar QR mudah dibaca scanner:

-   Gunakan **PNG**.
-   Gunakan ukuran **348 × 348 px**.
-   Jangan stretch secara tidak proporsional.
-   Jangan crop QR.
-   Jangan menghilangkan white border/margin QR.
-   Sebaiknya QR dibuat langsung pada ukuran final.
-   Test QR dengan scanner sebelum digunakan.

Hindari resize berulang seperti:

``` text
330 × 330 → 348 × 348
500 × 500 → 348 × 348
348 × 300 → 348 × 348
```

Lebih baik generate QR langsung pada ukuran final **348 × 348 px**.

## 🧩 Jika Ingin Mengubah Ukuran QR di Watch

File yang mengatur ukuran dan posisi QR:

``` text
secondary-widget/index.js
```

Contoh QR **360 × 360 px**:

``` javascript
createWidget(widget.IMG, {
  x: 60,
  y: 60,
  w: 360,
  h: 360,
  src: 'qr.png'
})
```

Karena:

``` text
(480 - 360) / 2 = 60
```

Ukuran standar project tetap:

``` text
348 × 348 px
```

## 🔆 Brightness

Saat widget **Absen** aktif, brightness dapat dinaikkan agar QR lebih
mudah dipindai.

Konsep:

``` text
Masuk Widget
      ↓
Brightness 100%
      ↓
QR ditampilkan
      ↓
Keluar Widget
      ↓
Brightness dikembalikan
```

Watch tidak mengetahui apakah mesin absensi sedang melakukan scan.
Karena itu brightness dibuat maksimal ketika **widget QR sedang aktif**.

## 🛠️ Development Environment

Contoh environment:

``` text
Device     : Amazfit Active Max
Display    : 480 × 480
Node.js    : v24.19.0
npm        : v11.17.0
Zeus CLI   : v1.9.3
ZPM        : v3.4.2
API Level  : 4.0
```

## 🚀 Build

``` powershell
cd D:\Amazfit-Dev\auto-absen
zeus login
zeus status
zeus build
```

Setelah QR diganti, lakukan build ulang agar QR baru masuk ke package.

## 🔍 Contoh Mengganti QR

Misalnya QR lama:

``` text
xxxxxx01
```

ingin diganti menjadi:

``` text
xxxxxx02
```

Langkah:

1.  Generate QR dengan isi `Y20260926123`.
2.  Pastikan ukuran **348 × 348 px**.
3.  Simpan sebagai `qr.png`.
4.  Replace:

``` text
assets/default.r/qr.png
```

5.  Jalankan:

``` powershell
zeus build
```

6.  Install package baru.
7.  Buka widget **Absen**.
8.  Test scan.

Tidak perlu mengubah `secondary-widget/index.js` selama ukuran QR tetap
**348 × 348 px** dan nama file tetap `qr.png`.

## 📌 Ringkasan

Jika hanya ingin mengganti QR:

``` text
Generate QR baru
      ↓
Ukuran 348 × 348 px
      ↓
Format PNG
      ↓
Rename menjadi qr.png
      ↓
Replace assets/default.r/qr.png
      ↓
zeus build
      ↓
Install ke smartwatch
```

**File QR:**

``` text
assets/default.r/qr.png
```

**Ukuran:**

``` text
348 × 348 px
```

**Format:**

``` text
PNG
```

**File untuk mengatur posisi/ukuran QR:**

``` text
secondary-widget/index.js
```

## 📄 License

Project ini dibuat untuk kebutuhan pengembangan dan eksperimen Zepp OS /
sistem absensi QR.
