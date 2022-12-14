// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { Card, TextField, Grid, FormControl, InputLabel, Select, MenuItem, Alert } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import IconButton from '@mui/material/IconButton';
import SimpleSnackbar from './Snackbar';
import { queryHandler, subscribeHandler } from './Subscribe';


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
    const list2 = ["Google Search"]
    return (
        <div className='p-5  flex flex-col  gap-5 items-center absolute top-1/2 left-1/2 h-full sm:h-auto sm:w-[85%] md:w-3/4 lg:w-1/2 w-full text-white  -translate-x-1/2 -translate-y-1/2 bg-[#1A212A] rounded'>
            <CloseIcon onClick={handleClose} className='text-white absolute cursor-pointer right-2 top-2' />
            <h1 className='text-center text-lg font-bold' >Privacy Policy 🔐</h1>
            <p className='text-center'>When you use our extension, you trust us with your data. We understand this is a big responsibility and work hard to protect your information.</p>
            <div className='flex w-[85%] flex-col sm:flex-row gap-3 sm:gap-0 justify-between mt-7'>
                <div>
                    <span className='mb-4'>Here is what we do not collect 🙅‍♂️</span>
                    <ul >

                        {
                            list1.map((item, index) => <li key={index}><CloseIcon className='text-red-500' /> {item}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <span className='mb-4'>Here is what we collect <VerifiedUserIcon className='text-primary' /></span>
                    <ul >

                        {
                            list2.map((item, index) => <li key={index}><DoneIcon className='text-green-500' /> {item}</li>)
                        }
                    </ul>
                </div>
            </div>
            <p className='text-center text-sm '>We only monitor your Google searches to build awesome widgets. We honestly can&apos;t even tell it&apos;s you.</p>

        </div>
    )
}


const Footer = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const reasons = ['Feedback', 'Bug Report', 'Feature Request', 'Join Our Core Team', 'Freelancer Queries', 'Others']
    const reason1 = ['Feedback', 'Suggest New Feature', 'Propose a partnership', 'Others']
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        phoneNo: '',
        type: '',
        reason: '',

    });

    const formDataHandler = (e) => {
        setForm(pre => ({ ...pre, [e.target.name]: e.target.value }))

    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        const res = await queryHandler(form);
        if (res) {
            setForm(pre => ({ ...pre, name: '', email: '', message: '', phoneNo: '', type: '', reason: '' }))
            setIsSuccess(true);
        }
    }


    const handleSubscribe = async () => {
        const [bool, data] = await subscribeHandler(email);
        console.log(bool, data);
        if (bool) {
            setOpen2(true);
        }
    }
    useEffect(() => {
        setEmail('');
    }, [open2])
    return (
        <footer className="bg-gradient flex justify-center flex-col  items-center min-h-36 text-white">
            <div className="w-full flex-wrap flex items-center sm:justify-between justify-center border-white border-b-[1px]">
                <span className='flex flex-col ml-3 mt-4 mb-4'>
                    <div className='h-12 rounded-l-full rounded-r-full overflow-hidden mb-2  sm:w-[25rem] w-full mt-2 flex  justify-between items-center  border-[1px] border-primary text-white text-base rounded-md '>
                        <input placeholder="Enter Your Email" className="bg-transparent pl-3 placeholder:text-white w-[65%] placeholder:text-sm xl:placeholder:text-base focus:outline-none "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <span onClick={handleSubscribe} className="w-[45%] px-6  rounded-l-full flex justify-center items-center bg-primary text-white h-full sm:w-auto cursor-pointer text-sm xl:text-base">
                            Subscribe
                            {/* <ArrowCircleRightIcon sx={{ color: 'white', ml: 1 }} /> */}
                        </span>

                    </div>
                    <p className='text-xs text-center xl:text-sm'>Get notified about new features and updates. No spam. Unsubscribe anytime.</p>
                    {/* <p className='text-xs text-center'>No spam. Unsubscribe anytime.</p> */}
                </span>
                <div className='flex flex-col mr-3'>
                    <span className='flex  sm:gap-4 gap-1 sm:flex-row flex-col  mb-3'>
                        <a >For Developers</a>
                        <span className='sm:block hidden'>|</span>
                        <a >Blog</a>
                        <span className='sm:block hidden'>|</span>
                        <a onClick={handleOpen}>Privacy Policy</a>
                        <span className='sm:block hidden'>|</span>
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
                            <Card className=' outline-none  p-10 flex flex-col shadow  gap-5 items-center absolute top-1/2 left-1/2 h-full sm:h-auto sm:w-[85%] md:w-3/4 lg:w-1/2 w-full   -translate-x-1/2 -translate-y-1/2  rounded' >
                                <CloseIcon className='absolute right-4 top-4 text-teal-600 cursor-pointer' onClick={() => setOpen1(false)} />
                                <Grid
                                    onSubmit={handleFormSubmit}
                                    component={"form"} container spacing={2} className='flex justify-center items-center' >
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Who Are You ?</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={form.type}
                                                name='type'
                                                label="Who Are You ?"
                                                onChange={formDataHandler}
                                                variant='standard'
                                            >
                                                <MenuItem value={'individual'}>Individual</MenuItem>
                                                <MenuItem value={'company'}>Company</MenuItem>

                                            </Select>
                                        </FormControl>

                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Reason</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={form.reason}
                                                label="Reason"
                                                name='reason'
                                                onChange={formDataHandler}
                                                variant='standard'
                                            >
                                                {
                                                    form.type === 'individual' ? reasons.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>) : reason1.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)

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
                                            name='name'
                                            type='text'
                                            value={form.name}
                                            onChange={formDataHandler}
                                            className='focus:border-primary'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid

                                        item xs={12} sm={6}>
                                        <TextField
                                            variant='outlined'
                                            label='Email'
                                            type='email'
                                            name='email'
                                            value={form.email}
                                            onChange={formDataHandler}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid

                                        item xs={12} sm={6}>
                                        <TextField
                                            variant='outlined'
                                            label='Phone Number'
                                            type='number'
                                            name='phoneNo'
                                            value={form.phoneNo}
                                            onChange={formDataHandler}
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
                                            name='message'
                                            value={form.message}
                                            onChange={formDataHandler}
                                            rows={5}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Button
                                        variant='contained'
                                        type='submit'
                                        className='mt-5 ml-4 bg-primary text-white'
                                    >Send Message
                                        {/* <ArrowRightIcon /> */}
                                    </Button>
                                    {isSuccess && <Alert className='w-full mt-5' severity="success">Hurray! We got you.</Alert>}

                                </Grid>
                            </Card>
                        </Modal>
                    </span>
                </div>
            </div>
            <span className="text-white text-xs mt-2 mb-2">© Frifty {new Date().getFullYear()}- All rights reserved</span>
            <SimpleSnackbar open={open2} setOpen={setOpen2} />
        </footer>
    );
}

export default Footer;