import { Card, Label } from 'flowbite-react'
import Microphone from '../components/microphone';


function Home() {
    return (
        <div className="h-screen flex items-center justify-center">
          <div className="max-w-lg rounded-lg">
            <Card href="#">
              <Label>Hit the button to start recording!</Label>
              <div className='flex justify-center'>
              <Microphone/>
              </div>
            </Card>
          </div>
        </div>
    );
}

export default Home