
import CloseIcon from '@mui/icons-material/Close';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DoneIcon from '@mui/icons-material/Done';

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
        <div className='p-5   flex flex-col  gap-5 items-center   h-[85vh] pt-[9rem]  w-full text-white  bg-[#1A212A] '>
            <CloseIcon  className='text-white absolute cursor-pointer right-2 top-2' />
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
export default Privacy;