export default function ProductDetail() {
    // Arbitrary values tailwind
    return (
      <div className="bg-primary">
        <div className="navbar bg-base-100 fixed backdrop-blur-md bg-white/30 z-[2]">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="italic text-3xl text-[#999] font-bold">HELLOW WORLD</div>
        <h1 className="font-bold text-3xl underline">aowkow</h1>
        <h6>aowkow</h6>
        <p>aowkow</p>
        <section className="h-[500px] bg-[#aaa]"></section>
        <section className="h-[500px] bg-[#aaa]"></section>
        <section className="h-[500px] bg-[#aaa]"></section>
        <section className="h-[500px] bg-[#aaa]"></section>
        <button
          className="btn btn-primary hover:shadow-lg"
          onClick={() => alert("klik")}
        >
          Show Data
        </button>
      
      <div className="p-5 flex flex-wrap justify-center">
          {[1,2,3,4,5,23,23,2,32,3,23,2].map(()=> {
              //100 = mobile
              // 50 = tablet
              // 70 = pc
              
              return(
                  <div className="w-[100%] md:w-[50%] lg:w-[30%] p-3">
                  <div class="card card-side bg-white shadow-xl">
                  <figure>
                    <img src="https://placeimg.com/200/280/arch" alt="Movie" />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div class="card-actions justify-end">
                      <button class="btn btn-primary">Watch</button>
                    </div>
                  </div>
                  </div>
                </div>
              )
          })}
  
      </div>
      </div>
    );
  }
  