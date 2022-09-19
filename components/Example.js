import { Grid } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Example = ({heading,desc,url,rev}) => {
    return (
        
           <Grid container spacing={10} sx={{ mt:1,flexDirection:rev &&'row-reverse'}}  >
             <Grid xs={12} sm={6} item className="flex flex-col justify-center items-center">
        
          <div className="text-gray-600  sm:text-3xl mb-3 font-bold">{heading}</div>     
          <div className="text-gray-600  sm:text-base mb-3 font-bold">{desc}</div>     
        </Grid>
        <Grid xs={12} sm={6} item   >
          <div className="h-full w-full relative bg-white rounded-md p-4 ">
            <span className="mb-4 -ml-1 absolute top-0">
              <FiberManualRecordIcon sx={{color:'rgb(237,106,94)'}}/>
              <FiberManualRecordIcon sx={{color:'rgb(245,191,79)'}}/>
              <FiberManualRecordIcon sx={{color:'rgb(98,197,84)'}}/>
            </span>
              <video className="mt-3" loop={true} autoPlay={true} muted controls={false} src="/demo.mp4"></video>
          </div>
        </Grid>
      </Grid>
      
    );
}

export default Example;