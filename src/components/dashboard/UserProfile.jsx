
import user_img from '../../assets/user.png'

function UserProfile() {
  return (
    <div style={{ fontFamily: "IBM Plex Sans" }}
    className='flex flex-col items-center justify-center bg-white border border-gray-100 h-full w-full  p-4 rounded-xl shadow-md hover:shadow-2xl duration-150 cursor-pointer '>
        
        <img src={user_img} alt='user' className='w-full rounded-full' />

        <span className='text-2xl font-bold mt-4'>
            Cavidan Bagirli
        </span>

        <div className='mt-10'>
            <span>English 
                <span style={{ fontFamily: "IBM Plex Mono" }} className='text-sm font-medium ml-5'>
                    Native
                </span>
            </span>
        </div>

    </div>
  )
}

export default UserProfile