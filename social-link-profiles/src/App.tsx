import './App.css'
import myPhoto from './assets/490EB4B7-D766-4453-8DBF-5721EAE67D9D.jpg'


function ProfilePicture() {
  return (
    <div className='p-4'>
      <img src={myPhoto}
        alt="Me"
        className='rounded-full object-cover w-32 h-32'
      />
    </div>
  )
}

function FullName() {
  return (
    <div className='text-white font-bold text-xl'>
      Samuel Irvan Putra
    </div>
  )
}

function Address() {
  return (
    <div className='text-lime-400 text-sm'>
      Tangerang, Indonesia
    </div>
  )
}

function Description() {
  return (
    <div className='text-white text-xs gap-4'>
      "Full stack and Cyber Security wanna be."
    </div>
  )
}

function SocialMedia() {
  const socMedList: string[] = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"]

  return (
    <div className='text-white flex flex-col p-2 gap-4'>
      {socMedList.map((item: string) => (
        <div className=' text-sm bg-neutral-700 rounded-md p-2 flex flex-col justify-center items-center w-75'>{item}</div>
      ))}
    </div>
  )
}


function App() {

  return (
    <div className='bg-black h-screen flex flex-col items-center justify-center'>
      <div className='bg-neutral-900 flex flex-col items-center justify-center p-4 rounded-2xl w-85'>
        <ProfilePicture />
        <div className='flex flex-col items-center justify-center p-2'>
          <FullName />
          <Address />
        </div>
        <div className=' p-4'>
          <Description />
        </div>
        <SocialMedia />
      </div>
    </div>
  )
}

export default App
