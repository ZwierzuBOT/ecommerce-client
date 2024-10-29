import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-screen h-[87vh] flex justify-center items-center'>
      <SignIn />
    </div>
)
}