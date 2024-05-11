import { Button, Label } from 'flowbite-react';
import { FaMicrophone } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

function Microphone () {
    const [isRecording, setRecording] = useState(false);

    const toggleRecord = () => {
        setRecording(!isRecording);
    };

    useEffect(() => {
        if (isRecording){
            console.log('Now recording');
            startRecording();
        }
        else {
            console.log('Stopped recording');
            stopRecording();
        }
    }, [isRecording]);

    const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({audio: true, askPermissionOnMount: true});

    const submitToServer = async () => {
        const response = await fetch(mediaBlobUrl);
        const blob = await response.blob();
        
        const formData = new FormData();
        formData.append('file', blob, 'audio.mp3');

        try {
            const response = await fetch('http://127.0.0.1:8080/submit', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload audio')
            }

            const data = await response.json();
            console.log('Audio uploaded successfully:', data);
        } catch (e) {
            console.error('Error uploading audio: ', e)
        }
    }
    
    return(
    <>
        <div className='flex h-screen'>
            <div className='flex flex-col bg-gray-100 h-88 w-68 m-auto rounded-lg shadow-lg'>
                <Label className='p-6 flex justify-center text-lg'>Hit the button to start recording!</Label>
                <div className='flex justify-center p-6'>
                    <Button onClick={toggleRecord} className={`toggle-button ${isRecording ? 'on' : 'off'} rounded-full w-40 h-40 items-center text-gray-900 group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400`}>
                        <FaMicrophone className='text-8xl text-neutral-50'/>
                    </Button>
                </div>
                <audio src={mediaBlobUrl} controls/>
                <Button onClick={submitToServer} className={'bg-blue-400 rounded-2xl enabled:hover:bg-blue-500'}>
                    Submit
                </Button>
            </div>
        </div>
    </>
    );
}

export default Microphone