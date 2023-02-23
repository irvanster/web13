import Image from 'next/image'
import Head from '../head'

export default function Users() {
  return (<>
  {/* <Head title={'Products'} /> */}
    <div className='flex flex-row flex-wrap'>
      {[1,2,3,4,5].map(()=> {
        return(
          <div class="card w-96 bg-base-100 shadow-xl m-5 mb-5">
            <figure><img src="https://loremflickr.com/640/480/person" alt="Shoes" /></figure>
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
          </div>  
        )
      })}
    </div>
  </>)
}
