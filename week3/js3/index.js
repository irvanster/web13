import fetch from "node-fetch"
import axios from "axios"

let getUsers = (params)=> {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=> {
                if(response.ok) {
                    return response.json()
                }else {
                    return reject({
                        message: "failed to fetch",
                        data: []
                    })
                }
            })
            .then((json)=> {
                //kalo servernya ngga mati, 404 (request) = response
                return resolve({
                    message: "successfully get all users",
                    data: json.map((item)=> item.email)
                })
                
            })
            .catch(()=> reject({
                message: "failed to fetch",
                data: []
            }))
    })
}
// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
// let getPost = ()=> {
//     return new Promise((resolve, reject) => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((res)=> {
//             return resolve({
//                 message: "successfully get all users",
//                 data: res.data.map((item)=> item.email)
//             })
//         }).catch((err)=> {
//             return reject({
//                 message: "failed to fetch",
//                 data: []
//             })
//         }) 
//     })
// }
// getPost().then((res)=> {
//     console.log(res)
// }).catch((err)=> {
//     console.log(err)
// })
// getUsers().then((result)=> {
//     console.log(result)
// }).catch((err)=> {
//     console.log(err)
// })

const fetchApi = async ()=> {
    try {
        const dataUser = await getUsers()
        return dataUser
        // dataUser.data.map((item)=> {
        //     console.log(item)
        // })
        // const array = ['aokwoa','aowkao','awkwoa']
        // console.log(e)
    } catch (error) {
        console.log('data user tidak ada')
    }
}
const data = await fetchApi()
console.log(data)
// fetchApi('user').then((res)=> {
//     console.log(res)
// })
// const fetchApi = async ()=> {
//     try {
//         const dataUser = await getUsers
//         console.log(dataUser)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchApi()

// let getUsers = ()=> {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=> response.json())
//     .then((json)=> console.log(json))
//     // return new Promise((resolve, reject) => {
//     // })
// }
// getUsers()


//then and catch

// getUsers('rheza').then((res) => {
//     console.log(res)
// }).catch((err)=> {
//     console.log(err)
// })
// async function userLists() {
//     let result={}
//     try {
//         let res = await getUsers()
//         result = res.data
//     } catch (error) {
//         console.log(error)
//     }
// con
// }

// console.log(userLists())