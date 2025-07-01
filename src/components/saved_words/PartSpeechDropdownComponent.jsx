
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

import SavedWordsService from "../../service/savedwords-service";
import { IoFilterOutline } from "react-icons/io5";

function FilterSection() {
    const dispatch = useDispatch();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const language_pair_stats_by_lang = useSelector((state) => state.savedWordsSlice.language_pair_stats_by_lang);

    // Safely get pos_stats or default to empty object
    const posStats = language_pair_stats_by_lang?.stats?.pos_stats || {};

    // Convert pos_stats object to array format for rendering
    const posStatsArray = Object.entries(posStats).map(([partOfSpeech, count]) => ({
        partOfSpeech,
        count
    }));

    return (
        <div style={{ fontFamily: "Roboto" }} className='flex flex-row my-5'>
            <div className='flex flex-row justify-between items-center rounded-lg p-1 w-full '>
                <div className="relative">
                    <button
                        className='flex flex-row text-[13px] items-center bg-gray-100 rounded-lg p-2 w-full'
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        disabled={!language_pair_stats_by_lang} // Disable button while loading
                    >
                        <span className='mr-2'>
                            Part of Speech
                        </span>
                        <IoFilterOutline className='text-[14px]' />
                        {!language_pair_stats_by_lang && (
                            <span className="ml-2 text-xs text-gray-500">Loading...</span>
                        )}
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                            <div className="py-1">
                                {posStatsArray.length > 0 ? (
                                    posStatsArray.map((stat) => (
                                        <div
                                            onClick={()=>{
                                                const savedFilter = JSON.parse(localStorage.getItem('languageFilter'));
                                                const newFilter = {...savedFilter, partOfSpeech: stat.partOfSpeech};
                                                dispatch(SavedWordsService.get_filter_by_part_of_speech(newFilter));
                                                setIsDropdownOpen(false);
                                            }}
                                            key={stat.partOfSpeech}
                                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between cursor-pointer"
                                        >
                                            <span className="capitalize">{stat.partOfSpeech}</span>
                                            <span className="text-gray-500">{stat.count}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-4 py-2 text-sm text-gray-500">
                                        {language_pair_stats_by_lang
                                            ? "No parts of speech available"
                                            : "Loading data..."}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
}

export default FilterSection;

