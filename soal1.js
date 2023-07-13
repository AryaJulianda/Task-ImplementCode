// Deteksi Palindrom
const readline = require('readline');
const colors = require('colors/safe');

const rl = readline.createInterface({   // method readline : method built-in javascript yang memungkinkan kita 
        input: process.stdin,           //                   untuk dapat menangkap input user didalam comand-line 
        output: process.stdout,
    });

rl.question("Masukan kata : ", (kata) => {
    
    //validasi minimal panjang kata
    if(kata.length < 3) {
        console.log(colors.red('Kata harus lebih dari 2 huruf'))
        rl.close();
        return;
    }
    
    //membalikan kata
    let newKata = kata.toLowerCase();
    let reverse = newKata.split('').reverse().join('');

    //menentukan output
    if(reverse === newKata) {
        console.log(colors.black.bgGreen(`'${kata}' adalah palindrom`));
    } else {
        console.log(colors.black.bgRed(`'${kata}' bukan palindrom`));
    }

    rl.close();
});


//-------------------------------------------------------------------------------------------------

// //Reverse Word
// rl.question('Masukan kalimat : ', (sentence) => {
    
//     // Memisahkan kalimat menjadi array
//     var words = sentence.split(" ");
  
//     //validasi panjang kalimat
//     if(words.length < 2) {
//         console.log(colors.red(`Kalimat minimal memiliki 2 kata`))
//         return rl.close();
//     }

//     // Membalikkan urutan kata dalam array
//     const reversedWords = words.reverse();
  
//     // Menggabungkan kata-kata yang sudah dibalikkan menjadi kalimat baru
//     const reversedSentence = reversedWords.join(" ");
  
//     // Menampilkan kalimat yang sudah dibalikkan
//     console.log(colors.blue(reversedSentence))

//     rl.close()
// })