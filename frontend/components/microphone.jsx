"use client";

import { Button } from 'flowbite-react';
import { FaMicrophone } from "react-icons/fa6";
function Microphone () {
    return(
    <Button className='rounded-full w-10'>
        <FaMicrophone/>
    </Button>
    );
}

export default Microphone