

import PartSpeechDropdownComponent from './PartSpeechDropdownComponent';



function FilterSection() {


    return (
        <div style={{ fontFamily: "Roboto" }}
            className='flex flex-row mb-5'>

            <div className='flex flex-row justify-between items-center rounded-lg p-1 w-full '>

                <div className='flex flex-row justify-between items-center'>
                    <input type="text" placeholder='Search' className='text-[14px] text-black py-2 px-5 w-72 outline-none bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none' />
                </div>
                
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <PartSpeechDropdownComponent />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FilterSection