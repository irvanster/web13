import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Head from '../head'
import Voucher from './components/voucher'
import './style.css'

const getProducts = async ()=> {
  try {
    const res = await fetch('http://localhost:5000/api/v1/products')
    if(!res.ok) {
      return {
        message: `error ${res.statusText}`,
      }
    } 
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function Products() {
  const data = await getProducts()
  return (<>
  {/* <Head title={'Products'} /> */}
    <Header dataProducts={data} />
    <div className='flex flex-row flex-wrap cardless'>
      {/* <Voucher /> */}
      {data?.data?.map((item, index)=> {
        return(
          <div class="card w-96 bg-base-100 shadow-xl m-5 mb-5">
            <Link href={`/products/${item.id}`} title={item.title}>
              <figure><img src={`http://localhost:5000/uploads/images/${item.images[0].filename}`} alt={item.title} /></figure>
              <div class="card-body">
                <h2 class="card-title">
                  {item.title}
                  <div class="badge badge-secondary">{item.category}</div>
                </h2>
                <p>{item.price}</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div> 
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </Link>
          </div>  
        )
      })}
    </div>
  </>)
}


