const sayHello = (name, cb) => {
    let greetings = `Hello ${name}`
    return cb(greetings)
}
const greeting = (text)=> {
    return text
}



console.log(sayHello('Adriel', greeting))






const posts = [
    {title: 'Elon Musk beli twitter'},
    {title: 'Windows 12 bakal launching'},
]

// const getData = (data, cb)=> {
//     data.forEach(element => {
//         return cb(element)
//     });
// }
const getData = (data, param2) => {
    //fungsi inti perulangan
    // return param2(data)
    data.forEach(element => {
        return param2(element)
    });
}

// const tampilkanText = (params) => {
//     return params
// }
// getData(['adriel','letto'], tampilkanText)
// getData(['adriel','letto'], (item)=> {
//     console.log(item)
// })

// const posts = {
//     data: [    {title: 'Elon Musk beli twitter'},
//     {title: 'Windows 12 bakal launching'}],
//     map: (item)=> {
//         console.log(item)
//     }
// }



// const mapPost = (item)=> {
//         console.log(item)
// }


// posts.map((item, index)=> {
//     return index+item
// })

// getData(posts, (data)=> {
//     console.log(data)
// })

const searchBook = (param1, param2, cb)=> {
    //fungsi inti
    const name = [
        'cinta', 'sayang', 'galau',
        'manga', 'anime', 'donghua','cinta kasih',
    ]
    //untuk membuat agar nama, search, olahan
    //internet aku down
    const search = '' //logic untuk searching
    const logic = name.slice(0, param2) //logic untuk pembatasan
    const sorting = logic.sort()

    return cb(sorting) //argument untuk manggil showResult

}

const showResult = (data)=> {
        console.log(data)
} 
searchBook('CINTAa', 3, showResult)
//meneruskan
// fungsi yang dijadikan sebuah parameter
//


// const showResult = (data)=> {
//     console.log(data)
// }

// showResult('oawkwkoakowakowakowako')