# eRekap is a a website for recap and input students grades.

## Short description of this website

This website is used to manage data, input grades, and recap grades for students. This website is available for admin and teacher roles. Admin can manage data such as student, teacher, subject, and taught data. Meanwhile, the teacher can input the grades. This website is build with `React Js`, `Vite`, `Tailwind CSS`, `GraphQL`, `Apollo`, and several libraries.

## Features on this website

1. Manage student data
2. Manage teacher data
3. Manage subject data
4. Manage lesson data taught by students and teachers
5. Input student grades

## How to try this website

1. Clone this project by type command `git clone https://github.com/Bimahayunugraha/erekap.git`.
2. After clone success, then type command `cd erekap` to enter the main folder.
3. After that type command `code .` to open this project in Visual Studio Code
4. On your Visual Studio Code type command `npm install` to install all modules that used ini this project.
5. Last step is run this project by type command `npm run dev`.
6. Finally you can try this website and happy testing.

## Structure folder

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

## Preview website

![preview-website](./src/assets/img/png/preview-website.png)
