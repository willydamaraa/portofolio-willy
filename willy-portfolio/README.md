# Willy Damara — Personal Portfolio

Portfolio pribadi (Sprint Minggu 1–2) dibuat dengan **Next.js 14 (App Router) + React + TypeScript + Tailwind CSS**. Tanpa CMS, tanpa API eksternal, semua dekorasi dibuat dengan CSS/SVG.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production

```bash
npm run build
npm run start
```

## Deploy ke Vercel

1. Push project ke GitHub (`git init`, `git add .`, `git commit`, `git push`).
2. Buka https://vercel.com → **Add New… → Project** → import repo.
3. Framework otomatis terdeteksi **Next.js**. Klik **Deploy** (tanpa environment variable).

Alternatif Netlify: build command `npm run build`, gunakan Next.js runtime bawaan Netlify.

## Struktur

```
app/            layout.tsx (font + SEO), page.tsx, globals.css, icon.svg
components/     Navbar, Hero, About, Education, Skills, Projects,
                Playlist, Currently, Contact, Footer
components/decorative/   BrowserWindow, CompactDisc, Sticker, SectionLabel
data/           profile, nav, education, skills, projects, playlist
types/          TypeScript interfaces
```

## Yang perlu diedit

| Yang diganti | File |
| --- | --- |
| Nama, lokasi, teks About, email, GitHub, LinkedIn, Instagram, status "Currently" | `data/profile.ts` |
| Project (nama, deskripsi, tech stack, link View project / View code) | `data/projects.ts` |
| Pendidikan | `data/education.ts` |
| Skill | `data/skills.ts` |
| Playlist | `data/playlist.ts` |
| Domain untuk OG metadata | `app/layout.tsx` (`metadataBase`) |

Catatan: link project masih `#`, tech stack project berupa perkiraan — sesuaikan dengan yang sebenarnya kamu pakai. Untuk screenshot project asli, simpan gambar di `public/` lalu ganti blok placeholder di `components/Projects.tsx` dengan `next/image`.
