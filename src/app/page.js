import Beams from './Beams/Beams.jsx';
import TextTrail from './TextTrail/TextTrail.jsx';
export default function Home() {
  return (
    <main>
      
      <div className=' h-[100vh]'>
        <Beams/>
      </div>
      <div className='absolute top-0 left-0 w-full h-full opacity-50'>
        <TextTrail
          text="hello im harrison"/>
      </div>
    </main>
  );
}
