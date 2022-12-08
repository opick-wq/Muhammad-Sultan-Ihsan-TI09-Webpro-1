function validateForm() {
  var nama = document.forms["myForm"]["nama"].value;
  var email = document.forms["myForm"]["email"].value;
  var jam = document.forms["myForm"]["jam"].value;
  var tujuan = document.forms["myForm"]["tujuan"].value;
  var jumlah = document.forms["myForm"]["jumlah"].value;
  var errorMessage = "";

  if (nama == "") {
    errorMessage += "Nama Pelanggan harus diisi.\n";
  } else if (nama.length > 10) {
    errorMessage += "Nama Pelanggan tidak boleh lebih dari 30 karakter.\n";
  }

  if (email == "") {
    errorMessage += "Email harus diisi.\n";
  } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    errorMessage += "Format email salah.\n";
  }

  if (jam == "") {
    errorMessage += "Jam Keberangkatan harus diisi.\n";
  } else if (!jam.match(/^([01][0-9]|2[0-3]):[0-5][0-9]$/)) {
   
  }
}