
import { useSelector } from 'react-redux';

import { IoFilterOutline } from "react-icons/io5";


import PartSpeechDropdownComponent from './PartSpeechDropdownComponent';
import LangStats from './LangStats';



function FilterSection() {


    return (
        <div style={{ fontFamily: "Roboto" }}
            className='flex flex-row my-5'>

            <div className='flex flex-row justify-between items-center rounded-lg p-1 w-full '>

                <div>
                    <input type="text" placeholder='Search' className='text-[14px] text-black py-2 px-5 w-96 outline-none bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none' />
                </div>

                <div className='flex flex-row justify-between items-center'>

                    <div>
                        <PartSpeechDropdownComponent />
                    </div>

                    <div>
                        <LangStats />
                    </div>

                </div>
                


            </div>

        </div>
    )
}

export default FilterSection