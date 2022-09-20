import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { Card, TextField, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Privacy = ({ handleClose }) => {
    const list1 = [
        "Email ID",
        "Personal identity information",
        "Location or IP Address",
        "Bookmarks",
        "Browser activity",
        "Installed apps/ other extensions",
        "Data you copy and paste"

    ]
    const list2 = ["Browser history"]
    return (
        <div className='p-5  flex flex-col  gap-5 items-center absolute top-1/2 left-1/2 h-full sm:h-auto sm:w-[85%] md:w-3/4 lg:w-1/2 w-full text-white  -translate-x-1/2 -translate-y-1/2 bg-[#1A212A] rounded'>
            <CloseIcon onClick={handleClose} className='text-white absolute cursor-pointer right-2 top-2' />
            <h1 className='text-center text-lg font-bold' >Privacy Policy 🔐</h1>
            <p className='text-center'>When you use our extension, you trust us with your data. We understand this is a big responsibility and work hard to protect your information.</p>
            <div className='flex w-[85%] justify-between mt-7'>
                <div>
                    <span className='mb-4'>Here is what we do not collect 🙅‍♂️</span>
                    <ul >

                        {
                            list1.map((item, index) => <li key={index}><CloseIcon className='text-red-500' /> {item}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <span className='mb-4'>Here is what we collect 🫡</span>
                    <ul >

                        {
                            list2.map((item, index) => <li key={index}><DoneIcon className='text-green-500' /> {item}</li>)
                        }
                    </ul>
                </div>
            </div>
            <p className='text-center text-sm '>We just want to understand what you browse so that we can build awesome apps to improve your
                search experience that&apos;s all. We honestly can&apos;t even tell it&apos;s you.</p>
        </div>
    )
}


const Footer = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const reasons = ['Feedback', 'Bug Report', 'Feature Request', 'Join Our Core Team', 'Freelancer Queries', 'Others']
    return (
        <footer className="bg-gradient flex justify-center flex-col  items-center min-h-36 text-white">
            <div className="w-full flex-wrap flex items-center sm:justify-between justify-center border-white border-b-[1px]">
                <span className='flex flex-col ml-3 mt-4 mb-4'>
                    <p className='text-sm'>💌 Get notified about new features and updates</p>
                    <div className='h-12  mb-2 px-4 py-2 sm:w-[25rem] w-full mt-2 flex  justify-between items-center  border-[1px] border-white text-white text-base rounded-md '>
                        <input placeholder="Enter Your Email" className="bg-transparent placeholder:text-white w-[65%] placeholder:text-sm focus:outline-none " />
                        <span className="w-[40%] sm:w-auto cursor-pointer text-xs">
                            Stay Tuned
                            <ArrowCircleRightIcon sx={{ color: 'white', ml: 1 }} />
                        </span>

                    </div>
                    <p className='text-xs'>No spam. Unsubscribe anytime.</p>
                </span>
                <div className='flex flex-col mr-3'>
                    <span className='flex gap-6  mb-3'>
                        <a >Blog</a>
                        <a onClick={handleOpen}>Privacy Policy</a>
                        <a onClick={() => setOpen1(true)}>Contact Us</a>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-privacy"
                            aria-describedby="modal-modal-privacy-policies"
                        >
                            <Privacy handleClose={handleClose} />
                        </Modal>

                        <Modal
                            open={open1}
                            onClose={() => setOpen1(false)}
                            aria-labelledby="modal-modal-privacy"
                            aria-describedby="modal-modal-privacy-policies"
                        >
                            <Card className='p-10  flex flex-col shadow  gap-5 items-center absolute top-1/2 left-1/2 h-full sm:h-auto sm:w-[85%] md:w-3/4 lg:w-1/2 w-full   -translate-x-1/2 -translate-y-1/2  rounded' >
                                <CloseIcon className='absolute right-4 top-4 text-teal-600 cursor-pointer' onClick={() => setOpen1(false)} />
                                <Grid container spacing={2} >
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Who Are You ?</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={''}
                                                label="Age"
                                                onChange={''}
                                                variant='standard'
                                            >
                                                <MenuItem value={10}>Individual</MenuItem>
                                                <MenuItem value={20}>Company</MenuItem>

                                            </Select>
                                        </FormControl>

                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Reason</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={''}
                                                label="Age"
                                                onChange={''}
                                                variant='standard'
                                            >
                                                {
                                                    reasons.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)
                                                }
                                                {/* <MenuItem value={10}>Feedback</MenuItem>
                                                <MenuItem value={20}>Company</MenuItem> */}

                                            </Select>
                                        </FormControl>

                                    </Grid>
                                    <Grid

                                        item xs={12} sm={12}>
                                        <TextField
                                            variant='outlined'
                                            label='Name'
                                            type='text'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid

                                        item xs={12} sm={6}>
                                        <TextField
                                            variant='outlined'
                                            label='Email'
                                            type='email'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid

                                        item xs={12} sm={6}>
                                        <TextField
                                            variant='outlined'
                                            label='Phone Number'
                                            type='number'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid

                                        item xs={12} sm={12}>
                                        <TextField
                                            multiline
                                            variant='outlined'
                                            label='Message'
                                            type='text'
                                            rows={5}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Button
                                        variant='contained'

                                        className='mt-5 ml-4 bg-primary text-white'
                                    >Send Enquiry
                                        <ArrowRightIcon />
                                    </Button>
                                </Grid>
                            </Card>
                        </Modal>
                    </span>
                </div>
            </div>
            <span className="text-white text-xs mt-2 mb-2">© Frifty {new Date().getFullYear()}- All rights reserved</span>
        </footer>
    );
}

export default Footer;