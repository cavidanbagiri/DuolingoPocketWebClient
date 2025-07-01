
import { useSelector } from 'react-redux';

import { IoFilterOutline } from "react-icons/io5";


import PartSpeechDropdownComponent from './PartSpeechDropdownComponent';



function FilterSection() {

    
    return (
        <div style={{ fontFamily: "Roboto" }}
            className='flex flex-row my-5'>

            <div className='flex flex-row justify-between items-center rounded-lg p-1 w-full '>

                <div>
                    <PartSpeechDropdownComponent />
                </div>

                <div>
                    <input type="text" placeholder='Search' className='bg-gray-100 text-[14px] text-black rounded-lg p-2 w-96 outline-none' />
                </div>


            </div>

        </div>
    )
}

export default FilterSection