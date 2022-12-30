document.getElementById('form-validation').addEventListener('submit', function(event) {
  event.preventDefault(); // menghentikan submit form secara default

  // mengambil nilai dari semua input yang dibutuhkan
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var departureTime = document.getElementById('departure-time').value;
  var destination = document.getElementById('destination').value;
  var ticketQuantity = document.getElementById('ticket-quantity').value;

  // menyimpan semua pesan error
  var errors = [];

   // menghapus semua pesan error sebelumnya
   document.querySelector('#name-error').innerHTML = '';
   document.querySelector('#email-error').innerHTML = '';
   document.querySelector('#departure-error').innerHTML = '';
   document.querySelector('#destination-error').innerHTML = '';
   document.querySelector('#tiket-error').innerHTML = '';

  // validasi form disini
  if (name === '') {
    document.getElementById("name-error").innerHTML = "Nama tidak boleh kosong";
      
    // Tandai elemen dengan warna merah
    name.style.borderColor = "red";
  }

  if (name.length > 30) {
    document.getElementById("name-error").innerHTML = "Nama tidak boleh lebih dari 30 karakter";
      
    // Tandai elemen dengan warna merah
    name.style.borderColor = "red";
  }

  if (email === '') {
    document.getElementById("email-error").innerHTML = "Email tidak boleh kosong";
      
    // Tandai elemen dengan warna merah
    name.style.borderColor = "red";
  }
  if (departureTime === '') {
    document.getElementById("departure-error").innerHTML = "jam keberangkatan tidak boleh kosong";
      
    // Tandai elemen dengan warna merah
    name.style.borderColor = "red";
  }
  if (destination === '') {
    document.getElementById("destination-error").innerHTML = "Destination tidak boleh kosong";
      
    // Tandai elemen dengan warna merah
    name.style.borderColor = "red";
  }
  if (ticketQuantity === '') {
    document.getElementById("tiket-error").innerHTML = "tiket tidak boleh kosong";
      
            // Tandai elemen dengan warna merah
    name.style.borderColor = "red";
  }

  // mengecek apakah email memiliki format yang benar
  if (email !== '') {
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      document.getElementById("email-error").innerHTML = "Email Format salah";
      
            // Tandai elemen dengan warna merah
      name.style.borderColor = "red";
    }
  }

  // mengecek apakah jam keberangkatan memiliki format yang benar (00:00 - 23:59)
  if (departureTime !== '') {
    var timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(departureTime)) {
      document.getElementById("departure-error").innerHTML = "jam tidak boleh kosong";
      
            // Tandai elemen dengan warna merah
      name.style.borderColor = "red";
    }
  }

  // mengecek apakah jumlah tiket merupakan bilangan bulat antara 1 - 10
  if (ticketQuantity !== '') {
    if (!Number.isInteger(Number(ticketQuantity)) || Number(ticketQuantity) < 1 || Number(ticketQuantity) > 10) {
      document.getElementById("tiket-error").innerHTML = "tiket harus diisi menggunakan bilangan bukat 1-10";
      
            // Tandai elemen dengan warna merah
      name.style.borderColor = "red";
    }
  }
  // jika tidak ada error, tampilkan inputan di bawah form
  if (errors.length === 0) {
    var output = '<p>Nama Pelanggan: ' + name + '</p>';
    output += '<p>Email: ' + email + '</p>';
    output += '<p>Jam Keberangkatan: ' + departureTime + '</p>';
    output += '<p>Tujuan Keberangkatan: ' + destination + '</p>';
    output += '<p>Jumlah Tiket: ' + ticketQuantity + '</p>';

    document.getElementById('output').innerHTML = output;
  }
});
