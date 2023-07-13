const divideAndSort = (int) => {
    //memisahkan dengan pemisah 0 dan menjadikan sebuah array
    const arr = int.toString().split(0)

    //mengurutkan setiap item pada array
    const sorteredArr = arr.map(item => item.split('').sort().join(''))

    //menggabungkan kembali item item
    const result = sorteredArr.join('')

    //menampilkan output
    console.log(result)
}

divideAndSort(5956560159466056);
