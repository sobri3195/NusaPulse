# NusaPulse Dashboard

![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-Prototype%20Ready-22C55E)

NusaPulse adalah dashboard civic-tech bergaya command center untuk mengonsolidasikan sinyal strategis nasional dalam satu antarmuka: bisnis UMKM, risiko pasar, layanan publik, dan kesiapan talenta. Proyek ini dibangun dengan fokus pada pengalaman visual modern, keterbacaan data tinggi, serta interaksi cepat untuk kebutuhan demo, pilot, atau eksplorasi produk.

---

## ✨ Fitur Utama

- **Dashboard Overview real-time style**
  - KPI ringkas untuk _Trust Score_, _Risk Level_, _Queue Index_, dan status modul aktif.
- **Tren multi-modul 6 bulan**
  - Visualisasi area chart untuk PulseBiz, PulseMarket, PulsePublic, dan PulseTalent.
- **Action Center**
  - Tambah/hapus alert operasional langsung dari UI.
- **Manajemen modul dinamis (CRUD ringan)**
  - Tambah modul baru, edit konten modul, hapus, dan toggle status aktif/nonaktif.
- **Persistensi data lokal**
  - Semua perubahan modul dan alert disimpan di `localStorage`.
- **UI modern dan responsif**
  - Sidebar desktop + mobile drawer, tema gelap futuristik, komponen modular.

---

## 🧩 Fungsi Setiap Modul

### 1) PulseBiz
Fungsi: memantau kualitas trust signal UMKM, readiness ekspor, dan indikator narasi bisnis.

### 2) PulseMarket
Fungsi: mengamati risiko kelangkaan/harga komoditas dan memberi sinyal eskalasi wilayah.

### 3) PulsePublic
Fungsi: memetakan tekanan antrian layanan publik serta prediksi jam sibuk.

### 4) PulseTalent
Fungsi: menilai kesiapan talenta, pemetaan skill, dan alignment ke kebutuhan kerja.

---

## 🏗️ Analisis Arsitektur Codebase (Ringkas namun Mendalam)

### Struktur utama

```bash
.
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── Sidebar.jsx
│       ├── StatCard.jsx
│       ├── TrendsChart.jsx
│       └── ModuleCards.jsx
├── public/
├── tailwind.config.js
├── vite.config.js
└── package.json
```

### Alur aplikasi

1. **Bootstrap** lewat `src/main.jsx` (render `App` ke root React).
2. **State global sederhana** di `App.jsx`:
   - `modules`, `alerts`, `newAlert`, `newModule`.
3. **Persistensi lokal**:
   - `useEffect` membaca dan menyimpan state ke `localStorage`.
4. **Komposisi UI**:
   - `Sidebar` (navigasi), `StatCard` (KPI), `TrendsChart` (grafik), `ModuleCards` (kartu modul editable).
5. **Styling system**:
   - Tailwind + token warna kustom + animasi CSS ringan.

### Kekuatan desain kode

- **Komponen terpisah jelas**: setiap concern UI ada pada file berbeda.
- **Skalabel untuk MVP**: mudah menambah widget/dashboard baru.
- **Interaktivitas tinggi tanpa backend**: ideal untuk prototipe cepat.
- **Visual konsisten**: tema/warna modul sudah ditokenisasi di Tailwind.

### Catatan pengembangan lanjutan

- Integrasi API/backend (saat ini masih mock + local state).
- Validasi form dan notifikasi UX yang lebih kaya.
- Tambah state management (`Zustand`/`Redux Toolkit`) bila data makin kompleks.
- Tambah testing (`Vitest`, `React Testing Library`) untuk reliability.
- Tambah i18n untuk dukungan bilingual.

---

## 🚀 Menjalankan Proyek

### Prasyarat
- Node.js 18+
- npm

### Instalasi

```bash
npm install
```

### Development mode

```bash
npm run dev
```

### Build production

```bash
npm run build
```

### Preview build

```bash
npm run preview
```

---

## 🛠️ Stack Teknologi

- **Frontend**: React 18
- **Bundler**: Vite
- **Styling**: Tailwind CSS + custom CSS animation
- **Charting**: Recharts
- **Icon**: Lucide React
- **Animation**: Framer Motion

---

## 👤 Author

**Lettu Kes dr. Muhammad Sobri Maulana, S.Kom, CEH, OSCP, OSCE**

- GitHub: [github.com/sobri3195](https://github.com/sobri3195)
- Email: [muhammadsobrimaulana31@gmail.com](mailto:muhammadsobrimaulana31@gmail.com)
- Website: [muhammadsobrimaulana.netlify.app](https://muhammadsobrimaulana.netlify.app)

### Social & Community

- YouTube: [@muhammadsobrimaulana6013](https://www.youtube.com/@muhammadsobrimaulana6013)
- Telegram: [t.me/winlin_exploit](https://t.me/winlin_exploit)
- TikTok: [@dr.sobri](https://www.tiktok.com/@dr.sobri)
- Grup WhatsApp: [Join Grup](https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl)

### Toko Online

- [Toko Online Sobri - pegasus-shop.netlify.app](https://pegasus-shop.netlify.app)

---

## ❤️ Donasi & Dukungan

Jika proyek ini bermanfaat, dukung pengembangan selanjutnya melalui:

- Lynk.id: <https://lynk.id/muhsobrimaulana>
- Trakteer: <https://trakteer.id/g9mkave5gauns962u07t>
- Gumroad: <https://maulanasobri.gumroad.com/>
- KaryaKarsa: <https://karyakarsa.com/muhammadsobrimaulana>
- Nyawer: <https://nyawer.co/MuhammadSobriMaulana>
- Sevalla Page: <https://muhammad-sobri-maulana-kvr6a.sevalla.page/>

---

## 📄 Lisensi

Belum ditentukan. Tambahkan file `LICENSE` sesuai lisensi yang diinginkan sebelum rilis publik.
