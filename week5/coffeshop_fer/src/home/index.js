import Header from "../components/header";

export default function Home() {
    // Arbitrary values tailwind
    return (
      <div className="bg-accents">
        <Header headerShown={true} />
      <div className="p-5 flex flex-wrap justify-center">
          {[1,2].map(()=> {
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
  