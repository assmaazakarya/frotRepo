
import "react-icons";
import "./Register.css";
//icons 
import { AiFillEdit } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import { IoKeySharp } from "react-icons/io5";
//animation
import pic from '../assets/registeration.gif'
// import animationData from '../assets/animation.json'
// import registerAnimation from '../assets/register.json'
//formHook
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
function Register() {
  const loc=useLocation()
  const nav =useNavigate()
  console.log(loc.state );
  const form=useForm()
  const {register,handleSubmit,formState }=form
  // function onSub(){
  //   localStorage.setItem('token', "true");
  //   if(loc.state){
  //     nav('/login')
  //   }else{
  //     nav('/home')
  //   }

  // }
  return (
    <div className="container d-flex justify-content-center mt-4 align-items-center height containerWidth ">
      <div className="row w-100">
        <div className="col  p-0 d-flex align-items-center slidein">
          <form onSubmit={handleSubmit((data)=>{
            console.log(data);
            if(loc.state){
              nav('/login')
            }else{
              nav('/home')
            }
          })} className="p-4 d-flex align-items-center flex-column w-75  shadow rounded  justify-content-evenly ">
            <div className="input-group mb-2">
              <span
                className="input-group-text  rounded-0 border-0 bg-white"
                id="basic-addon1"
              >
                <i>
                  <AiFillEdit className="icon fs-3" />
                </i>
              </span>
              <input
              {...register('fullname',{
                required:{
                  value:true,
                  message:'invalid email'
                }
              })}
                type="text"
                className="form-control inputBorder border-top-0 border-end-0 border-start-0 rounded-0  shadow-none"
                placeholder="Full Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="text-danger input-group mx-5 p-2"> {formState.errors.fullname?.message}</span>
            </div>
            <div className="input-group mb-2">
              <span
                className="input-group-text  rounded-0 border-0 bg-white"
                id="basic-addon1"
              >
                <i>
                  <MdEmail className="icon fs-3" />
                </i>
              </span>
              <input
              {...register('email',{
                required:{
                  value:true,
                  message:'email is requirred'
                },
                pattern:/^[\w-.]+@/i
              })}
                type="email"
                className="form-control  inputBorder border-top-0 border-end-0 border-start-0 rounded-0 shadow-none"
                placeholder="Email Address"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="text-danger input-group mx-5 p-2"> {formState.errors.email?.message}</span>

            </div>

            <div className="input-group mb-2">
              <span
                className="input-group-text  rounded-0 border-0 bg-white"
                id="basic-addon1"
              >
                <i>
                  <TiUserAdd className="icon fs-3" />
                </i>
              </span>
              <input
                 {...register('username',{
                  required:{
                    value:true,
                    message:'user name is requirred'
                  },
                  
                })}
                type="text"
                className="form-control inputBorder border-top-0 border-end-0 border-start-0 rounded-0 shadow-none"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="text-danger input-group mx-5 p-2"> {formState.errors.username?.message}</span>

            </div>

            <div className="input-group mb-2">
              <span
                className="input-group-text rounded-0 border-0 bg-white"
                id="basic-addon1"
              >
                <i>
                  <IoKeySharp className="icon fs-3" />
                </i>
              </span>
              <input
                {...register('password',{
                  required:{
                    value:true,
                    message:'password  is requirred'
                  },
                  
                })}
                type="password"
                className="form-control inputBorder border-top-0 border-end-0 border-start-0 rounded-0 shadow-none"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="text-danger input-group mx-5 p-2"> {formState.errors.password?.message}</span>

            </div>
            <div className="input-group mb-2">
              <span
                className="input-group-text rounded-0 border-0 bg-white"
                id="basic-addon1"
              >
                <i>
                  <IoKeySharp className="icon fs-3" />
                </i>
              </span>
              <input
               {...register('confirmpassword',{
                required:{
                  value:true,
                  message:'password  is requirred'
                },
                
              })}
                type="password"
                className="form-control inputBorder border-top-0 border-end-0 border-start-0 rounded-0 shadow-none"
                placeholder="Confirm Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="text-danger input-group mx-5 p-2"> {formState.errors.confirmpassword?.message}</span>

            </div>

            <button type="submit" className="submit ">
              Signup
            </button>
          </form>
        </div>
        <div className="col me-3 d-flex flex-column align-items-center justify-content-center slideinLeft">
        <div className='d-flex align-items-center justify-content-center img'>  
          <img src={pic} className="w-75 " />
          </div>
          <div className="mt-5">
          <h5 >Have an account already? <a href="" className="link-primary text-decoration-none icon fs-5">Login</a></h5>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
