import { Grid, TextField } from "@mui/material";
import Navbar from "./Navbar";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import GetAppIcon from '@mui/icons-material/GetApp';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect, useState } from "react";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const [btn,setBtn] = useState('h-full px-4 flex items-center  justify-center rounded-l-full  bg-black cursor-pointer text-xs sm:text-base');
  const [input,setInput]=useState('bg-transparent  pl-4 placeholder:text-white  placeholder:text-sm w-[65%] focus:outline-none')
  useEffect(()=>{
    if(clicked){
        setInput(pr=>pr+' hidden')
        setBtn(pr=>pr+' w-full');
    }
    console.log(btn);
  },[clicked,btn])
  return (
    <div className="relative min-h-screen bg-gradient flex justify-center items-center">
      <Navbar />
      <Grid container sx={{ width: "85%" ,mt:'5rem'}}>
        <Grid xs={12} sm={6} item>
          {/* <div className="text-primary text-5xl mb-4 font-bold">FRIFTY</div> */}
          <div className="text-white  sm:text-5xl text-3xl mb-10 font-bold">Experience search like never before</div>
         
          <div className="text-white  flex items-center  mb-3 text-sm "><FiberManualRecordIcon fontSize="10px" sx={{ color: "white" }} />Shows interactive widgets right under the search bar</div>
          <div className="text-white flex items-center  mb-3 text-sm "><FiberManualRecordIcon fontSize="10px" sx={{ color: "white" }} />Saves you from unnecessary links and stupid signups</div>
          <div className="text-white flex items-center mb-3 text-sm "><FiberManualRecordIcon fontSize="10px" sx={{ color: "white" }} />Brings your favorite games without the need to download</div>
          <div className='h-12   sm:w-[25rem] border-black border-[1px] w-full mt-8 flex rounded-l-full rounded-r-full overflow-hidden  justify-between items-center bg-primary text-white text-base rounded-md '>
           
              <input placeholder="Enter Your Email"  className={input}/>
              <span
               onClick={()=>setClicked(!clicked)}
              className={btn}>
               {!clicked?'Subscribe':'Ready To Roll 🤙🏻'}
            { !clicked && <ArrowCircleRightIcon sx={{ color: 'white',ml:1 }} />}
              </span>
           
          </div>
        </Grid>
        <Grid xs={12} sm={6} item className="mb-2 mt-2 sm:m-0" component={'div'} sx={{position:'relative'}} >
          <div className="h-full w-full bg-white card p-4 ">
            <span className="mb-4 -ml-1 absolute top-0">
              <FiberManualRecordIcon sx={{color:'rgb(237,106,94)'}}/>
              <FiberManualRecordIcon sx={{color:'rgb(245,191,79)'}}/>
              <FiberManualRecordIcon sx={{color:'rgb(98,197,84)'}}/>
            </span>
              <video className="mt-3" loop={true} autoPlay={true} muted controls={false} src="/demo.mp4"></video>
          </div>
        </Grid>
      </Grid>
    </div >
  );
}

export default Home;