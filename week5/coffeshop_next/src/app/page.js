import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'

export default function Home() {
  return (
    <div className='flex flex-row flex-wrap'>
      {[1,2,3,4,5].map((item, index)=> {
        return(
          <div class="card w-96 bg-base-100 shadow-xl m-5 mb-5">
            {/* kalo kita pake link -> ini bisa di open new tab */}
            <Link href={`/products/${index}`} title='view product'>
              <figure><img src="https://loremflickr.com/640/480/fashion" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">
                  Shoes!
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
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
  )
}


// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'

// export default function Home() {
//   const router = useRouter()
//   return (
//     <div className='flex flex-row flex-wrap'>
//       {[1,2,3,4,5].map(()=> {
//         return(
//           <div class="card w-96 bg-base-100 shadow-xl m-5 mb-5" onClick={()=> router.push('/products')}>
//             {/* kalo kita pake link -> ini bisa di open new tab */}
//             {/* <Link href='/products'> */}
//               <figure><img src="https://loremflickr.com/640/480/fashion" alt="Shoes" /></figure>
//               <div class="card-body">
//                 <h2 class="card-title">
//                   Shoes!
//                   <div class="badge badge-secondary">NEW</div>
//                 </h2>
//                 <p>If a dog chews shoes whose shoes does he choose?</p>
//                 <div class="card-actions justify-end">
//                   <div class="badge badge-outline">Fashion</div> 
//                   <div class="badge badge-outline">Products</div>
//                 </div>
//               </div>
//             {/* </Link> */}
//           </div>  
//         )
//       })}
//     </div>
//   )
// }
