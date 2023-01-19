import { useNavigate } from "react-router-dom";
const Unauthenticated = () => {
  const navigate = useNavigate()
  return (
    <div className="flex-none gap-2">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>
      <div className="flex">
        <button className="btn btn-primary mr-2" onClick={()=> navigate('/auth/login')}>Login</button>
        <button className="btn btn-outline btn-primary">Register</button>
      </div>
    </div>
  );
};

export default Unauthenticated