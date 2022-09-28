# API Open Music App
![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)
[![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://https://npmjs.com/)
#### _Back-end Pemula Dicoding_
Ini adalah Aplikasi API Open Music yang dibangun dengan menggunakan framework nodejs yaitu hapi dan menggunkan database PSQL sebagai persyarat submission ke 2 dari kelas Belajar Membuat Aplikasi Back-End untuk Pemula

## Kriteria App
Kriteria 1 : Terdapat fitur registrasi pengguna (Menambahkan user) API yang Anda buat harus dapat menambahkan user melalui route:
Method : POST URL : /users Body Request:
    { 
        "username": string,
        "password": string, 
        "fullname": string 
    }
    
Kriteria 2 : Terdapat fitur login pengguna (menambahkan authentication) API yang Anda buat harus tersedia fitur login user melalui route:
Method : POST URL : /authentications Body Request: 
    {  
        "username": string, 
        "password": string 
    }
    
Kriteria 3 : Terdapat fitur refresh access token (memperbarui authentication) API yang Anda buat harus tersedia fitur Refresh Access Token user melalui route:
Method : PUT URL : /authentications Body Request: 
    {
        "refreshToken": "jwt.refresh.token"
    }
    
Kriteria 4 : Terdapat fitur logout pengguna (menghapus authentication) API yang Anda buat harus tersedia fitur logout user melalui route:
Method : DELETE URL : /authentications Body Request: 
    {
        "refreshToken": "jwt.refresh.token" 
    }

Kriteria 5 : Terdapat fitur menambahkan playlist API yang Anda buat harus tersedia fitur menambahkan playlist melalui route:
Method : POST URL : /playlists Body Request: 
    {
        "name": string 
    }

Kriteria 6 : Terdapat fitur melihat daftar playlist yang dimiliki API yang Anda buat harus tersedia fitur melihat daftar playlist yang dimiliki pengguna melalui route:
Method : GET URL : /playlists

Kriteria 7 : Terdapat fitur menghapus playlist API yang Anda buat harus tersedia fitur menghapus playlist melalui route:
Method : DELETE URL : /playlists/{playlistId}

## Teknologi
- Hapi Framework
- Nodejs
- NPM
- JWT

## Features Katalog Restaurant App
1. Dapat membuat user
2. Dapat membuat playlist lagu
3. Dapat Mengubah playlist lagu
4. Data Menghapus playlis lagu

## Installation
- `App di Clone`
- `npm run install`
- `npm run migrate up`
- `npm run start-dev`
- `jika server sudah jalan, maka dapat dicoba pada postman`

## License

MIT

