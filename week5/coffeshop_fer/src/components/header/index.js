import { useEffect, useState } from "react";
import Authenticated from "./authenticated";
import Unauthenticated from "./unauthenticated";

const pageTitle = (title) => {
  if (typeof title == "undefined") {
    return "Coffe Shop";
  }
  return `${title} - Coffe Shop`;
};

const Header = ({ headerShown, title }) => {
  const [isLogin, setIsLogin] = useState(false)

  // const RenderMenu = ()=> {
  //   if(isLogin) {
  //     return(<Authenticated setIsLogin={setIsLogin} />)
  //   }
  //   return <Unauthenticated />
  // }

  //simmiliar with componentDidmount() but use hooks
  useEffect(()=> {
    //akan berjalan ketika awal pertama kali user load page, dan hanya 1x
  if(localStorage.getItem('@userLogin')) {
    setIsLogin(true)
  }else {
    setIsLogin(false)
  }
  },[])
  return (
    <>
      <nav className="navbar bg-base-100 fixed backdrop-blur-md bg-white/30 z-[2]">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            {pageTitle(title)}
          </a>
        </div>
        
        {/* <RenderMenu /> */}
        {isLogin ? (<Authenticated setIsLogin={setIsLogin} />):<Unauthenticated />}
      </nav>
      {headerShown && <header className="h-[50vh] bg-primary"></header>}
    </>
  );
};

export default Header;
