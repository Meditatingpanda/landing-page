import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <nav className="z-10 w-full top-0  text-3xl h-16 sm:h-20 fixed flex items-center justify-between  bg-black ">
          <div className="text-white ml-5  font-bold">FRIFTY</div>

           <div className='sm:flex gap-6 mr-5  sm:visible hidden' >
           <GitHubIcon sx={{color:"white",mt:0.5}}/>
           <div className='cursor-pointer h-8 px-4 py-2 flex gap-2 items-center bg-primary text-white w-auto text-base rounded-sm '>
            <GetAppIcon sx={{color:'white'}}/>
            Chome Store</div>
           </div>
              <div className='sm:hidden visible mr-5'>
                <MenuIcon sx={{color:'white'}}/>
              </div>
        </nav>
    )
}

export default Navbar;