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
    // return param2(data)
    data.forEach(element => {
        return param2(element)
    });
}

// const tampilkanText = (params) => {
//     return params
// }
// getData(['adriel','letto'], tampilkanText)
getData(['adriel','letto'], (item)=> {
    console.log(item)
})

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