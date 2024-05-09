
import { Button, Label } from 'flowbite-react';
import { FaMicrophone } from "react-icons/fa6";
function Microphone () {
    return(
    <>
        <div className='flex h-screen'>
            <div className='flex flex-col bg-gray-100 h-80 w-68 m-auto rounded-lg shadow-lg'>
                <Label className='p-6 flex justify-center text-lg'>Hit the button to start recording!</Label>
                <div className='flex justify-center p-6'>
                    <Button className='rounded-full w-40 h-40 items-center text-gray-900 group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'>
                        <FaMicrophone className='text-8xl text-neutral-50'/>
                    </Button>
                </div>
            </div>
            
        </div>
    </>
    );
}

export default Microphone