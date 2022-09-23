document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();
  //WA No
  //let randValue = Math.floor(Math.random() * 100) + 1;
  let tel = "";
  let url = "";
  //if(randValue % 2 == 0) {
  tel = "6281221896676";
  //}else{
  //tel = "628112198876";
  //}
  let location = document.querySelector("#locationselectio").value;
  let droplocation = document.querySelector("#droplocationselectio").value;
  let tanggal = document.querySelector("#tanggal").value;
  let jam = document.querySelector("#jam").value;
  let numdays = document.querySelector("#daysnum").value;
  let pelayan = document.querySelector("#pelayan").value;
  let layanan = document.querySelector("#layanan").value;
  let tanggapan = document.querySelector("#tanggapan");
  tanggapan.classList.remove("fail");
  tanggapan.classList.remove("send");
  url = `https://api.whatsapp.com/send?phone=${tel}&text=
      *_BASTIAN RENTAL MOBIL_*%0A
      *Juaranya Rental Mobil*%0A
    Kami hadir di kota - kota di Indonesia%0A
      *R E S E R V A S I*%0A
    ------------------------------------------------------%0A%0A
      *Lokasi Penjemputan:*%0A
    ${location}%0A
      *Tanggal Sewa:*%0A
    ${tanggal}%0A
      *Jam:*%0A
    ${jam}%0A
      *Jumlah Hari:*%0A
    ${numdays}%0A
      *Tipe Layanan:*%0A
    ${pelayan}%0A
      *Tipe Mobil:*%0A
    ${layanan}%0A
      *Tujuan Destinasi:*%0A
    ${droplocation}%0A%0A
    Follow us :%0A
    Website : www.bastianrental.com%0A
    https://www.instagram.com/bastianrentalmobil/.%0A
    https://web.facebook.com/bastianrentalbandung%0A%0A
    Reservation WA (62812-2189-6676)%0A
    Reservation WA (6281-1219-8876)%0A`;

  //if (klien === "" || tanggal === "" || jam === "") {
  if (location === "" || tanggal === "" || jam === "" || numdays === "") {
    tanggapan.classList.add("fail");
    //tanggapan.innerHTML = `Please fill all data, ${klien}`;
    tanggapan.innerHTML = `Silahkan isikan seluruh data dengan lengkap!`;
    return false;
  }
  tanggapan.classList.remove("fail");
  tanggapan.classList.add("send");
  tanggapan.innerHTML = `Reservasi anda telah dikirimkan`;

  window.open(url);
});
