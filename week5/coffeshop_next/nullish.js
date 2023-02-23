// const data = undefined
const data = {
    message:'aok',
    data:[]
    // data: [{title: 'aowk', images: [
    //     {title: 'aok', uri: 'http://.'}
    // ]},
    // {title: 'aowk', images: [
    //     {title: 'aok', uri: 'http://.'}
    // ]},
    // {title: 'aowk', images: [
    //     {title: 'aok', uri: 'http://.'}
    // ]},
    // {title: 'aowk', images: [
    //     {title: 'aok', uri: 'http://.'}
    // ]}]
}

// data?.data.map((item)=> { console.log(item.title) }) ?? console.log('data is undefined')
data?.data?.map((item)=> { console.log(item.title) }) ?? console.log('error')