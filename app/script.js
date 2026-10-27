const form = document.querySelector("#registration-form");
const dataValid = document.querySelector("#success-message");

//inputUser
const usia = document.querySelector("#usia");
const tanggalLahir = document.querySelector("#tanggal-lahir");
const nama = document.getElementById("nama");
const nim = document.getElementById("nim");
const semester = document.getElementById("semester");
const divisi = document.getElementById("divisi");

tanggalLahir.max = new Date().toISOString().split("T")[0];

tanggalLahir.addEventListener("input", () => {
  if (!tanggalLahir.value) {
    usia.value = "";
    return;
  }

  const birthDate = new Date(`${tanggalLahir.value}T00:00:00`);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const birthdayHasPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!birthdayHasPassed) age -= 1;
  usia.value = age > 0 ? age : "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const name = document.querySelector("#nama").value.trim();
  dataValid.textContent = `Formulir pendaftaran untuk ${name} berhasil divalidasi. Hubungkan halaman ini ke backend untuk mengirimkan datamu.`;
  dataValid.classList.add("visible");
  const data = {
    nama: nama.value,
  };
});
