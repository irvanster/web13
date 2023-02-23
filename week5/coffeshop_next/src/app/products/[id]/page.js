// 'use client'

import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import Script from 'next/script';
// import { useEffect } from 'react';

const getDetail = async (id)=> {
  const res = await fetch(`http://localhost:5000/api/v1/products/${id}`)
  if(!res.ok) {
    return {
      message: `error ${res.statusText}`,
    }
  } 
  return res.json()
}
export default async function ProductDetail({params}) {
  const product = await getDetail(params.id)
  // if(typeof window !== undefined) {
  //   window.alert(JSON.stringify(props))
  // }
  // const path = usePathname();
  // const id = path.split('/')[2]

  // const path = usePathname();
  // const id = path.split('/')[2]
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.setItem('aowkwoakowa','aowkowakowako')
  }
    return (<div className='p-[5rem]'>
    <div class="card lg:card-side shadow-xl">
    <figure><img src="https://loremflickr.com/640/480/person" alt="Album"/></figure>
    <div class="card-body">
      <h2 class="card-title"></h2>
      <p>{product.data.title}</p>
      {/* <p>{JSON.stringify(params)}</p> */}
      Rp {product.data.price}
      <div class="card-actions justify-end">
        <button class="btn btn-primary">BUY</button>
      </div>
    </div>
  </div>
    </div>)
  }
  

// 1. home.module.css/product.module.css, dll
// 2. <style jsx> untuk local & <style global jsx> untuk global
// 3. bisa pake css biasa.