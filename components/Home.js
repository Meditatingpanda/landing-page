import { Grid, TextField } from "@mui/material";
import Navbar from "./Navbar";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import GetAppIcon from '@mui/icons-material/GetApp';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
const Home = () => {
 
  return (
    <div className="relative min-h-screen bg-gradient flex justify-center items-center">
      <Navbar />
      <Grid container sx={{ width: "85%" ,mt:'5rem'}}>
        <Grid xs={12} sm={6} item>
          {/* <div className="text-primary text-5xl mb-4 font-bold">FRIFTY</div> */}
          <div className="text-white   sm:text-5xl text-3xl mb-10 font-bold">Give wings to your search</div>
         
          <div className="text-white   flex items-center  mb-3 text-lg "><FiberManualRecordIcon fontSize="10px" sx={{ color: "white" }} />Interactive widgets under Google search</div>
          <div className="text-white  flex items-center  mb-3 text-lg "><FiberManualRecordIcon fontSize="10px" sx={{ color: "white" }} />No unnecessary links or stupid signups</div>
          <div className="text-white  flex items-center mb-3 text-lg"><FiberManualRecordIcon fontSize="10px" sx={{ color: "white" }} />Play games without any downloads</div>
          <div className="text-white  flex items-center mb-3 text-lg "><FiberManualRecordIcon fontSize="10px" sx={{ color: "white" }} />Dislike and don’t see it ever again</div>
          <div className='h-12 cursor-pointer gap-2 hover:animate-pulse   sm:w-[25rem] border-black border-[1px] w-full mt-8 flex rounded-l-full rounded-r-full overflow-hidden  justify-center text-white font-bold items-center bg-primary  text-base rounded-md '>
           
              {/* <input placeholder="Enter Your Email"  className={input}/>
              <span
               onClick={()=>setClicked(!clicked)}
              className={btn}>
               {!clicked?'Subscribe':'Ready To Roll 🤙🏻'}
            { !clicked && <ArrowCircleRightIcon sx={{ color: 'white',ml:1 }} />}
              </span> */}
              <AddIcon/>
              Add To Your Browser Now
              <p className="text-gray-300 text-sm">It&apos;s free!</p>
           
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