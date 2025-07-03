
import { useDispatch, useSelector } from 'react-redux';


import { CiStar } from "react-icons/ci";
import { PiBrainLight } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";
import { CiSquareRemove } from "react-icons/ci";




import SavedWordsService from '../../service/savedwords-service';

import CardIconComponent from './CardIconComponent';
import MessageBox from '../../layouts/MessageBox';


function CardComponent({ index, item }) {

    const dispatch = useDispatch();

    const { changed_word_staus } = useSelector((state) => state.savedWordsSlice);


    return (
        <div
            key={index}
            className="flex flex-col items-start justify-between text-white font-medium bg-gradient-to-br from-blue-500 to-indigo-600 
                        border border-blue-700 p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-105 
                        cursor-pointer h-48 w-full">


            <div className='flex flex-col items-start justify-center w-full'>
                <div className='flex flex-row w-full justify-end'>

                    {/* Star Icon */}
                    <span onClick={() => {
                        dispatch(SavedWordsService.change_word_status({
                            word_id: item.id,
                            status: 'starred'
                        }));
                    }}>
                        <CardIconComponent
                            icon_name={CiStar}
                            tooltipText={'Star'}
                            color={item.starred ? 'text-yellow-400' : 'text-gray-400'}
                        />
                    </span>

                    {/* Learned Icon */}
                    <span onClick={() => {
                        if (!changed_word_staus.pending) {
                            dispatch(SavedWordsService.change_word_status({
                                word_id: item.id,
                                status: 'learned'
                            }));
                        }
                    }}>
                        <CardIconComponent
                            icon_name={PiBrainLight}
                            tooltipText={'Learned'}
                            color={item.learned ? 'text-green-400' : 'text-gray-400'}
                        />
                    </span>

                    {/* Delete Icon */}
                    <span onClick={() => {
                        if (!changed_word_staus.pending) {
                            dispatch(SavedWordsService.change_word_status({
                                word_id: item.id,
                                status: 'delete'
                            }));
                        }
                    }}>
                        <CardIconComponent
                            icon_name={CiSquareRemove}
                            tooltipText={'Delete'}
                            color={item.learned ? 'text-green-400' : 'text-gray-400'}
                        />
                    </span>


                </div>
                <h1 className='text-xl capitalize'>{item.word}</h1>
                <p className='text-gray-300 capitalize text-[16px]'>
                    {item.part_of_speech} {item.id}
                </p>
            </div>
            <p className='text-sm capitalize'>
                {item.translation}
            </p>
        </div>
    )
}

export default CardComponent