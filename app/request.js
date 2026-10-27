const nama = document.getElementById("nama");
const nim = document.getElementById("nim");
const semester = document.getElementById("semester");
const divisi = document.getElementById("divisi");
const tanggalLahir = document.getElementById("tanggal-lahir");
const usia = document.getElementById("usia");
const alamat = document.getElementById("alamat");
const btnKirim = document.getElementById("btn-daftar");

async function postData(data) {
  try {
    const request = await fetch("http://localhost:3001/daftar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const hasil = await request.json();
    console.log("request berhasil");
  } catch (error) {
    console.log("request gagal");
  }
}

