Tugas Submission ke 2

API Open Music 
Aplikasi ini dibangun dengan menggunakan nodejs framework hapi dan meggunakan database PSQL

untuk menjalankan aplikasi, database postgresql sudah  harus terinstal di PC, setelah 
(source code telah diDownload);
1. npm run install
2. npm run migrate up
3. npm run start-dev

jika server sudah jalan, maka dapat dicoba pada postman

---------------------------------------------------------------------------------------------------------------
Kriteria 1 : Terdapat fitur registrasi pengguna (Menambahkan user)
API yang Anda buat harus dapat menambahkan user melalui route:

Method : POST
URL : /users
Body Request:

{
    "username": string,
    "password": string,
    "fullname": string
}
----------------------------------------------------------------------------------------------------------------
Kriteria 2 : Terdapat fitur login pengguna (menambahkan authentication)
API yang Anda buat harus tersedia fitur login user melalui route:

Method : POST
URL : /authentications
Body Request:
{
    "username": string,
    "password": string
}

------------------------------------------------------------------------------------------------------------------
Kriteria 3 : Terdapat fitur refresh access token (memperbarui authentication)
API yang Anda buat harus tersedia fitur Refresh Access Token user melalui route:

Method : PUT
URL : /authentications
Body Request:
{
    "refreshToken": "jwt.refresh.token"
}
-------------------------------------------------------------------------------------------------------------------
Kriteria 4 : Terdapat fitur logout pengguna (menghapus authentication)
API yang Anda buat harus tersedia fitur logout user melalui route:

Method : DELETE
URL : /authentications
Body Request:
{
    "refreshToken": "jwt.refresh.token"
}
--------------------------------------------------------------------------------------------------------------------
Kriteria 5 : Terdapat fitur menambahkan playlist 
API yang Anda buat harus tersedia fitur menambahkan playlist melalui route:

Method : POST
URL : /playlists
Body Request:
{
    "name": string
}
---------------------------------------------------------------------------------------------------------------------

Kriteria 6 : Terdapat fitur melihat daftar playlist yang dimiliki 
API yang Anda buat harus tersedia fitur melihat daftar playlist yang dimiliki pengguna melalui route:

Method : GET
URL : /playlists
----------------------------------------------------------------------------------------------------------------------
Kriteria 7 : Terdapat fitur menghapus playlist 
API yang Anda buat harus tersedia fitur menghapus playlist melalui route:

Method : DELETE
URL : /playlists/{playlistId}
