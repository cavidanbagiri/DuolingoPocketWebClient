

import PartSpeechDropdownComponent from './PartSpeechDropdownComponent';



function FilterSection() {


    return (
        <div style={{ fontFamily: "IBM Plex Sans" }}
            className='flex flex-row my-5'>

            <div className='flex flex-row justify-between items-center rounded-lg p-1 w-full '>

                <div className='flex flex-row justify-between items-center '>
                    <input type="text" placeholder='Search' className='text-[14px] text-black py-2 px-5 w-72 outline-none bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none' />
                </div>

                <div className='flex flex-row justify-between items-center ml-5'>
                    {/* Show learned words */}
                    <div className='flex flex-row justify-between items-center ml-5'>
                        <label className='text-black py-2 px-2 outline-none text-sm'>Show Learned Words</label>
                        <input type="checkbox" className='mr-2 text-black py-2 outline-none bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none cursor-pointer' />
                    </div>

                    {/* Show learned words */}
                    <div className='flex flex-row justify-between items-center ml-5'>
                        <label className='text-black py-2 px-2 outline-none text-sm'>Show Starred</label>
                        <input type="checkbox" className='mr-2 text-black py-2 outline-none bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none cursor-pointer' />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default FilterSection