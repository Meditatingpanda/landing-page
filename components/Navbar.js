import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ChromeStore from './logo';
import Image from 'next/image';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="z-10 w-full top-0  text-3xl h-16 sm:h-20 fixed flex items-center justify-between  bg-black ">
      <span>
        <div className="text-white ml-5  font-bold">FRIFTY</div>
      </span>

      <div className='sm:flex gap-6 mr-5  sm:visible hidden' >
        <GitHubIcon sx={{ color: "white", mt: 0.5 }} />
        <div className='cursor-pointer h-8 px-4 py-2 flex gap-2 items-center bg-primary text-white w-auto text-base rounded-sm '>
         <Image 
          src='/chrome.png'
          width={25}
          height={25}
          alt='chrome'

         />
          Chome Store</div>
          
      </div>
      <div className='sm:hidden visible mr-5'>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon className='text-white' />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}

          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}> <GitHubIcon className='mr-1' />Github</MenuItem>
          <MenuItem onClick={handleClose}> <Image 
          src='/chrome.png'
          width={25}
          height={25}
          alt='chrome'

         />Chome Store</MenuItem>

        </Menu>
      </div>
    </nav>
  )
}

export default Navbar;