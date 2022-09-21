import { Grid, TextField } from "@mui/material";
import Navbar from "./Navbar";
import SendIcon from '@mui/icons-material/Send';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddIcon from '@mui/icons-material/Add';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SearchIcon from '@mui/icons-material/Search';
import PolylineIcon from '@mui/icons-material/Polyline';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  return (
    <div className="relative min-h-screen bg-gradient flex justify-center items-center">
      <Navbar />
      <Grid container sx={{ width: "85%", mt: '5rem' }}>
        <div className="text-white mx-auto  sm:text-5xl text-3xl mb-16 font-bold"><SendIcon fontSize="150px" className="-rotate-45 -mt-4" />The ultimate search extension</div>
        <Grid    xs={12} sm={6} item className="flex  flex-col justify-center">
          {/* <div className="text-primary text-5xl mb-4 font-bold">FRIFTY</div> */}
          <div className="text-white   flex items-center  mb-3 text-lg "><SearchIcon className="mr-1" fontSize="10px" sx={{ color: "white" }} />Interactive widgets on Google search page</div>
          <div className="text-white  flex items-center  mb-3 text-lg "><PolylineIcon className="mr-1" fontSize="10px" sx={{ color: "white" }} />No unnecessary signups or stupid links</div>
          <div className="text-white  flex items-center mb-3 text-lg"><SportsEsportsIcon className="mr-1" fontSize="10px" sx={{ color: "white" }} />Play games without any downloads</div>
          <div className="text-white  flex items-center mb-3 text-lg "><ThumbsUpDownIcon className="mr-1" fontSize="10px" sx={{ color: "white" }} />Dislike a widget and never see it again</div>
          <div className='h-12 cursor-pointer gap-2    sm:w-[25rem] border-black border-[1px] w-full mt-8 flex rounded-l-full rounded-r-full overflow-hidden  justify-center text-white font-bold items-center bg-primary  text-base rounded-md '>
            <AddIcon />
            Add To Your Browser Now
            <p className="text-gray-300 text-sm">It&apos;s free!</p>

          </div>
        </Grid>
        <Grid   xs={12} sm={6} item className="mb-2 mt-2 sm:m-0" component={'div'} sx={{ position: 'relative' }} >
          <div className="h-full w-full bg-white card p-4 ">
            <span className="mb-4 -ml-1 absolute top-0">
              <FiberManualRecordIcon sx={{ color: 'rgb(237,106,94)' }} />
              <FiberManualRecordIcon sx={{ color: 'rgb(245,191,79)' }} />
              <FiberManualRecordIcon sx={{ color: 'rgb(98,197,84)' }} />
            </span>
            <video className="mt-3" loop={true} autoPlay={true} muted controls={false} src="/demo.mp4"></video>
          </div>
        </Grid>
      </Grid>
    </div >
  );
}

export default Home;