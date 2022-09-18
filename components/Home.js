import { Grid, TextField } from "@mui/material";
import Navbar from "./Navbar";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import GetAppIcon from '@mui/icons-material/GetApp';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient flex justify-center items-center">
      <Navbar />
      <Grid container sx={{ width: "85%" ,mt:'5rem'}}>
        <Grid xs={12} sm={6} item>
          <div className="text-primary text-5xl mb-4 font-bold">FRIFTY</div>
          <div className="text-white  sm:text-5xl text-3xl mb-3 font-bold">Experience search like never before</div>
         
          <div className="text-white  flex items-center  mb-1 text-sm "><FiberManualRecordIcon fontSize="10px" sx={{ color: "white" }} />Shows interactive widgets right under the search bar</div>
          <div className="text-white flex items-center  mb-1 text-sm "><FiberManualRecordIcon fontSize="10px" sx={{ color: "white" }} />Saves you from unnecessary links and stupid signups</div>
          <div className="text-white flex items-center mb-1 text-sm "><FiberManualRecordIcon fontSize="10px" sx={{ color: "white" }} />Brings your favorite games without the need to download</div>
          <div className='h-12 px-4 py-2 sm:w-[25rem] w-full mt-5 flex  justify-between items-center bg-primary text-white text-base rounded-md '>
           
              <input placeholder="Enter Your Email"  className="bg-transparent placeholder:text-white  placeholder:text-sm w-[65%] focus:outline-none border-b-2 border-white"/>
              <span className="w-auto cursor-pointer text-xs sm:text-base">
              Stay Tuned
              <ArrowCircleRightIcon sx={{ color: 'white',ml:1 }} />
              </span>
           
          </div>
        </Grid>
        <Grid xs={12} sm={6} item component={'div'} sx={{position:'relative',mt:2}} >
          <div className="h-full w-full card p-4 ">
            <span className="mb-4 -ml-1 absolute top-0">
              <FiberManualRecordIcon sx={{color:'rgb(237,106,94)'}}/>
              <FiberManualRecordIcon sx={{color:'rgb(245,191,79)'}}/>
              <FiberManualRecordIcon sx={{color:'rgb(98,197,84)'}}/>
            </span>
              <video className="mt-3" loop={true} autoPlay={true} muted controls={false} src="/json.mp4"></video>
          </div>
        </Grid>
      </Grid>
    </div >
  );
}

export default Home;