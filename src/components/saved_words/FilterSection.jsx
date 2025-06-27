

import { IoFilterOutline } from "react-icons/io5";



function FilterSection() {
  return (
    <div style={{ fontFamily: "Roboto" }}
    className='flex flex-row p-2 mt-5'>
        
        <div className='flex flex-row justify-between items-center rounded-lg p-1 w-full border-[1px] border-gray-100'>
            
            <div>
                <button className='flex flex-row text-[13px] items-center bg-gray-100 rounded-lg p-2 w-full'>
                    <span className='mr-2'>
                        Part of Speech
                    </span> 
                    <IoFilterOutline className='text-[14px]' />
                </button>
            </div>

            <div>
                <input type="text" placeholder='Search' className='bg-gray-100 text-[14px] text-black rounded-lg p-2 w-96 outline-none' />
            </div>


        </div>

    </div>
  )
}

export default FilterSection