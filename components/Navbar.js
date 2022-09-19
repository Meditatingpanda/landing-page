import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
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
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 12.317 37.683 2 25 2 z M 8.0429688 12.664062 L 15.046875 24.076172 C 15.514875 18.994172 19.798 15 25 15 L 43.462891 15 C 43.813891 15.646 44.125203 16.316 44.408203 17 L 30.974609 17 C 33.412609 18.825 35 21.727 35 25 C 35 26.787 34.522266 28.463016 33.697266 29.916016 C 33.690266 29.930016 33.691594 29.944984 33.683594 29.958984 L 24.537109 45.976562 C 23.790109 45.959562 23.054125 45.902547 22.328125 45.810547 L 28.976562 34.171875 C 27.756563 34.702875 26.413 35 25 35 C 21.441 35 18.318875 33.124406 16.546875 30.316406 C 16.523875 30.287406 16.496562 30.264422 16.476562 30.232422 L 6.8320312 14.515625 C 7.2030312 13.874625 7.6079688 13.259062 8.0429688 12.664062 z M 25 17 A 8 8 0 0 0 17 25 A 8 8 0 0 0 25 33 A 8 8 0 0 0 33 25 A 8 8 0 0 0 25 17 z" /></svg>
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
          <MenuItem onClick={handleClose}>  <svg className='mr-1' fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 12.317 37.683 2 25 2 z M 8.0429688 12.664062 L 15.046875 24.076172 C 15.514875 18.994172 19.798 15 25 15 L 43.462891 15 C 43.813891 15.646 44.125203 16.316 44.408203 17 L 30.974609 17 C 33.412609 18.825 35 21.727 35 25 C 35 26.787 34.522266 28.463016 33.697266 29.916016 C 33.690266 29.930016 33.691594 29.944984 33.683594 29.958984 L 24.537109 45.976562 C 23.790109 45.959562 23.054125 45.902547 22.328125 45.810547 L 28.976562 34.171875 C 27.756563 34.702875 26.413 35 25 35 C 21.441 35 18.318875 33.124406 16.546875 30.316406 C 16.523875 30.287406 16.496562 30.264422 16.476562 30.232422 L 6.8320312 14.515625 C 7.2030312 13.874625 7.6079688 13.259062 8.0429688 12.664062 z M 25 17 A 8 8 0 0 0 17 25 A 8 8 0 0 0 25 33 A 8 8 0 0 0 33 25 A 8 8 0 0 0 25 17 z" /></svg>Chome Store</MenuItem>

        </Menu>
      </div>
    </nav>
  )
}

export default Navbar;