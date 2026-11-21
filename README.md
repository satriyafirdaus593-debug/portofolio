# Satriya Firdaus | Retro-HUD Portfolio

Portofolio interaktif bergaya **Editorial Retro-HUD** yang dibangun dengan React, TypeScript, Vite, dan Tailwind CSS.

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Aplikasi berjalan di `http://localhost:3000`.

## Build Produksi

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

Proyek ini sudah dikonfigurasi dengan `vercel.json` (Vite static build, SPA rewrite, caching aset, dan header keamanan) dan **tidak membutuhkan Environment Variables** tambahan.

### Opsi 1 — Melalui Vercel Dashboard (GitHub / GitLab / Bitbucket)
1. Push repositori ini ke GitHub.
2. Buka [vercel.com/new](https://vercel.com/new) dan impor repositori.
3. Vercel akan otomatis mendeteksi konfigurasi dari `vercel.json`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Klik **Deploy**.

### Opsi 2 — Melalui Vercel CLI
```bash
npm i -g vercel
vercel
# Untuk deploy ke production:
vercel --prod
```
