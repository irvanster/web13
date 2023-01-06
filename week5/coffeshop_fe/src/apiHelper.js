    
const fetcher = async(method, ep, body={})=> {
    if(method == "GET") {
        const result = await getData(ep) //✅
        return result
    }else if(method =="POST"){
        postData(ep, body) //✅
    }else {
        deleteData(ep) //✅
    }

}
const getData= (ep) => {
    return new Promise((resolve, reject)=> {
        fetch(`http://localhost:3000/api/v1/${ep}`)
        .then(res => {
            if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));
    
            return res.json();
        })
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    })

} 

const postData= (ep, body) => {
    //METHOD POST = NAMBAH/NGASIH KE RESOURCE
    let Input = (params)=> {
    return document.getElementById(params)
    }
    Input('inputNameRegist').onchange = (text)=> {
    body.name = Input('inputNameRegist').value //$_POST //$_GET
    console.log(body)
    }
    Input('contentRegist').onchange = (text)=> {
    body.content = Input('contentRegist').value
    console.log(body)
    }
    fetch(`http://localhost:3000/api/v1/${ep}`,{
        method: 'POST',
        body: body
    })
        .then(res => {
            if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));

            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err));
}

const deleteData =(id) =>{
    if(confirm('apakah kamu yakin?')) {
        fetch(`http://localhost:3000/api/v1/feeds/${id}`,{
            method: 'delete',
        })
        .then(res => {
            if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));

            return res.json();
        })
        .then(data => {
            // alert("data berhasil dihapus")
            window.location.reload()
        })
        .catch(err => console.error(err));
    }else {
        alert('oke batal')
    }
}

