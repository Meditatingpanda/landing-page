import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Footer = () => {
    return (
        <footer className="bg-gradient flex justify-center flex-col  items-center min-h-36 text-white">
            <div className="sm:w-[85%] w-[85%] flex-wrap flex items-center justify-between border-white border-b-[1px]">
            <div className="text-primary text-5xl mb-4 font-bold">FRIFTY</div>
               <div className='flex flex-col'>

                <div className='h-12 mb-4 px-4 py-2 sm:w-[25rem] w-full mt-5 flex  justify-between items-center  border-[1px] border-white text-white text-base rounded-md '>
                    <input placeholder="Enter Your Email" className="bg-transparent placeholder:text-white w-[65%] placeholder:text-sm focus:outline-none " />
                    <span className="w-[40%] sm:w-auto cursor-pointer text-xs">
                        Stay Tuned
                        <ArrowCircleRightIcon sx={{ color: 'white', ml: 1 }} />
                    </span>

                </div>


                <span className='flex gap-6  mb-3'>
                <a >Blog</a>
                <a>Contact Us</a>
                <a>Privacy Policy</a>
                </span>
             </div>
            </div>
            <span className="text-white text-xs mt-2 mb-2">© Frifty {new Date().getFullYear()}- All rights reserved</span>
        </footer>
    );
}

export default Footer;