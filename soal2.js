
const pijarFood = (harga,voucher,jarak,pajak) => {

    //menentukan potongan berdasarkan voucher
    let potongan;
    let diskon;

    if(voucher == 'PIJARFOOD5' && harga >= 50000) {
        diskon = 50 / 100;
        potongan = harga * diskon;
        if(potongan >= 50000) potongan = 50000 ;

    } else if(voucher == 'DITRAKTIRPIJAR' && harga >= 25000) {
        diskon = 60 / 100;
        potongan = harga * diskon;
        if(potongan >= 30000) potongan = 30000 ;

    } else {
        potongan = 0
    }


    //menentukan ongkos kirim
    let ongkosKirim ;

    if(jarak <= 2) {
        ongkosKirim = 5000;
    } else {
        ongkosKirim = 5000 + (jarak - 2) * 3000
    }


    //menentukan biaya pajak
    let biayaPajak ;

    if(pajak) {
        biayaPajak = harga * 5 / 1000;
    } else {
        biayaPajak = 0 ;
    }


    //subtotal
    let subTotal = harga - potongan + ongkosKirim + biayaPajak;

    //output
    console.log(`Harga : Rp.${harga}`);
    console.log(`Potongan : Rp.${potongan}`);
    console.log(`Ongkos Kirim : Rp.${ongkosKirim}`);
    console.log(`Pajak : Rp.${biayaPajak}`);
    console.log(`Total Pembayaran : Rp.${subTotal}`);
}

//input
pijarFood(25000,'DITRAKTIRPIJAR',1,false)


