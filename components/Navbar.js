import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Github = 'https://github.com/frifty-search'
const Chrome = 'https://chrome.google.com/webstore/detail/frifty/dkdenkncjfpmcifijnfghnimpgnogdnb'
export {Chrome,Github}


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
      <Link href='/'>
        <span className='cursor-pointer flex items-center'>
          <Image src='/HQ.png'
            alt='HQ'
            width={50}
            height={50}


          />
          <div className="text-white   font-bold">FRIFTY</div>
        </span>
      </Link>

      <div className='sm:flex gap-6 mr-5  sm:visible hidden' >
        <a
          className='-mt-2'
          href={Github} rel="noreferrer" target='_blank'>  <GitHubIcon fontSize='20' sx={{ color: "white", mt: 0.5 }} className='cursor-pointer' /> </a>
        <a href={Chrome} rel="noreferrer" target='_blank'>
          <div className='cursor-pointer h-8 px-4 py-2 flex gap-2 items-center bg-primary text-white w-auto text-base rounded-sm '>
            <Image
              src='/chrome.png'
              width={30}
              height={30}
              alt='chrome'

            />
            Chome Store</div>
        </a>

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
          <MenuItem onClick={handleClose}> <a
            className='-mt-2'
            href={Github} rel="noreferrer" target='_blank'>  <GitHubIcon className='mr-1' />Github</a></MenuItem>
          <MenuItem onClick={handleClose}>
            <a href={Chrome} rel="noreferrer" target='_blank'>
              <Image
                src='/chrome.png'
                width={25}
                height={25}
                alt='chrome'
                className='-mt-[0.9px]'

              />Chome Store</a></MenuItem>

        </Menu>
      </div>
    </nav>
  )
}

export default Navbar;