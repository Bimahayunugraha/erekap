# eRekap merupakan sebuah website untuk melakukan rekap nilai

## Penjelasan singkat tentang website ini

Website ini digunakan untuk mengelola data dan melakukan input nilai. Dalam website ini tersedia untuk role admin dan guru. Admin dapat mengelola data seperti data siswa, guru, mata pelajaran, dan pelajaran diampu. Sedangkan, guru dapat melakukan input nilai.

## Fitur yang ada pada website ini

1. Mengelola data siswa
2. Mengelola data guru
3. Mengelola data mata pelajaran
4. Mengelola data pelajaran yang diampu oleh siswa dan guru
5. Input nilai siswa

## Structure Folder

```
┌── public
│   └── icon.ico
├── src
│	├── assets
│   │   └── img
│   │       ├── jpg
│   │       │   └── bg-hero.jpg
│   │       ├── png
│   │       │   ├── default-image.png
│   │       │   ├── icon-avatar.png
│   │       │   ├── img-admin.png
│   │       │   └── img-guru.png
│   │       └── svg
│   │           ├── icon.svg
│   │           └── not-found.svg
│	├── components
│   │   ├── Admin
│   │   │   ├── GuruList.jsx
│   │   │   ├── GuruListItem.jsx
│   │   │   ├── MataPelajaranList.jsx
│   │   │   ├── MataPelajaranListItem.jsx
│   │   │   ├── ModalCreateGuru.jsx
│   │   │   ├── ModalCreateMataPelajaran.jsx
│   │   │   ├── ModalCreateSiswa.jsx
│   │   │   ├── ModalDelete.jsx
│   │   │   ├── ModalEditGuru.jsx
│   │   │   ├── ModalEditSiswa.jsx
│   │   │   ├── OverviewData.jsx
│   │   │   ├── PelajaranDiampuDetailList.jsx
│   │   │   ├── PelajaranDiampuInput.jsx
│   │   │   ├── PelajaranDiampuList.jsx
│   │   │   ├── PelajaranDiampuListItem.jsx
│   │   │   ├── SiswaList.jsx
│   │   │   └── SiswaListItem.jsx
│   │   ├── General
│   │   │   ├── Drawer.jsx
│   │   │   ├── Dropdown.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── ToTop.jsx
│   │   ├── Guest
│   │   │   ├── ContactUs.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Service.jsx
│   │   └── Guru
│   │         ├── ModalInputNilai
│   │         ├── PenilaianDetailItem
│   │         ├── PenilaianList
│   │         └── PenilaianListItem
│	├── configs
│   │   └── firebase.js
│	├── graphqls
│   │   ├── typeDefs
│   │   │   ├── guru.graphql.js
│   │   │   ├── mataPelajaran.graphql.js
│   │   │   ├── pelajaranDiampu.graphql.js
│   │   │   ├── siswa.graphql.js
│   │   │   └── users.graphql.js
│   │   └── index.js
│	├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useLogin.jsx
│   │   ├── useRegister.jsx
│   │   └── useUser.jsx
│	├── mocks
│   │   ├── isAuthorized.jsx
│   │   └── isNotAuthorized.jsx
│	├── pages
│	│   ├── Admin
│   │   │   ├── CreatePelajaranDiampuPage.jsx
│   │   │   ├── GuruPage.jsx
│   │   │   ├── MataPelajaranPage.jsx
│   │   │   ├── PelajaranDiampuDetailPage.jsx
│   │   │   ├── PelajaranDiampuPage.jsx
│   │   │   └── SiswaPage.jsx
│	│	├── General
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── NotFoundPage.jsx
│   │   │   └── RegisterPage.jsx
│	│	├── Guest
│   │   │   └── LandingPage.jsx
│	│	└── Guru
│   │       ├── PenilaianDetailPage.jsx
│   │       └── PenilaianPage.jsx
│   ├── routes
│   │   ├── index.jsx
│   │   ├── PrivateRouter.jsx
│   │   └── ProtectedRouter.jsx
│   ├── stores
│   │   ├── features
│   │   │   ├── index.js
│   │   │   ├── navbarSlice.js
│   │   │   ├── scrollSlice.js
│   │   │   └── sidebarSlice.js
│   │   └── index.js
│   └── utils
│       ├── auth.js
│       ├── bcrypt.js
│       ├── contants.js
│       └── getInitialName.js
├── .env
├── .eslintrc.json
├── .gitignore
├── index.html
├── package.lock.json
├── package.json
├── postcss.config.cjs
├── readme.md
├── tailwind.config.cjs
└── vite.config.js
```
