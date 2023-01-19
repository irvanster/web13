const Authenticated = ({setIsLogin}) => {
  return (
    <div className="flex-none gap-2">
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
          <li onClick={()=> {
            localStorage.removeItem('@userLogin')
            setIsLogin(false)
          }}>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Authenticated