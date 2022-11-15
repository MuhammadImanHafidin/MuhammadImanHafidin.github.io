var dataBarang = [{
  nama_barang: "Nama Barang",
  jumlah: "Banyak",
  total: 0
}];

function showBarang() {
  var listBarang = document.getElementById("table");

  listBarang.innerHTML = "<tr><th>Nama Barang</th><th>Jumlah</th><th>Total Harga</th><th>Aksi</th></tr>";

  for (let i = 0; i < dataBarang.length; i++) {
    if (i !== 0) {
      var btnEdit = "<a href='#' class='btn btn-primary btn-sm' onclick='editBarang(" + i + ")'>Edit</a>";
      var btnHapus = "<a href='#' class='btn btn-danger btn-sm' style='margin:5px;' onclick='deleteBarang(" + i + ")'>Hapus</a>";
      listBarang.innerHTML +=
        "<tr><td>" + dataBarang[i].nama_barang + "</td><td>" + dataBarang[i].jumlah + "</td><td>" + dataBarang[i].total + "</td><td>" + btnEdit + btnHapus + "</td></tr>";
    } else {
      // listBarang.innerHTML = "Data Belum Di Masukan";
    }
  }

  const sum = dataBarang.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const totalBayar = document.getElementById("total_bayar");
  totalBayar.innerHTML = sum;

}

function cekTotalHarga(jenisBarang, jumlah) {
  if (jenisBarang == "Minyak") {
    const total = jumlah * 14000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }
   else if (jenisBarang == "Gas") {
    const total = jumlah * 24000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }
    else if (jenisBarang == "Terigu") {
      const total = jumlah * 12000;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
  } else if (jenisBarang == "Telur") {
    const total = jumlah * 32000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }
}
function bayar()
  {
    var bayar = $("#bayar").val()
    var totalBayar = $("#total_bayar").text()
    $("#kembalian").html(parseInt(bayar) - parseInt(totalBayar));
  
  }
function addBarang() {
  var jenisBarang = document.getElementById("jenis_barang").value;
  var jumlah = document.getElementById("jumlah").value;

  const newDataBarang = cekTotalHarga(jenisBarang, jumlah);
  dataBarang.push(newDataBarang);
  showBarang();
}

function editBarang(id) {
  var newjumlah = prompt("Edit jumlah", dataBarang[id].jumlah);
  const detailJenisBarang = dataBarang[id].nama_barang;

  const newDataBarang = cekTotalHarga(
    detailJenisBarang,
    newjumlah || dataBarang[id].jumlah
  );

  dataBarang[id] = newDataBarang;
  showBarang();
}

function deleteBarang(id) {
  dataBarang.splice(id, 1);
  showBarang();
}

showBarang();