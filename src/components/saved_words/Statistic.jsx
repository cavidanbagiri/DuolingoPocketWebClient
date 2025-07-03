import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';

function Statistic() {

    const { language_pair_stats } = useSelector((state) => state.dashboardSlice);
    const {language_pair_stats_by_lang} = useSelector((state) => state.savedWordsSlice);

    // console.log(' language_pair_stats', language_pair_stats);
    const [statistic, setStatistic] = useState({});

    useEffect(()=>{
        const savedFilter = JSON.parse(localStorage.getItem('languageFilter'));

        if (savedFilter) {
            const pair = language_pair_stats.find(
                item => item.from_lang === savedFilter.from_lang && 
                       item.to_lang === savedFilter.to_lang
            );
            if (pair) {
                setStatistic(pair);
            }
        }
        console.log(' statistic', statistic);

    }, [language_pair_stats_by_lang]);


    return (
        <div style={{ fontFamily: "IBM Plex Sans" }}
            className='flex flex-row items-center justify-between w-full p-1 '>
            <div className='flex flex-row justify-start items-center'>
                <div className='flex flex-col justify-center items-center mr-5 border-10 border-amber-500 rounded-full w-24 h-24'>
                    <p className='text-gray-500 text-sm font'>Total</p>
                    <p className='text-lg font-medium'>{statistic.total_word}</p>
                </div>
                <div className='flex flex-col justify-center items-center mr-5 border-10 border-purple-500 rounded-full w-24 h-24'>
                    <p className='text-gray-500 text-sm font'>Learned</p>
                    <p className='text-lg font-medium'>{statistic.learned}</p>
                </div>
                <div className='flex flex-col justify-center items-center mr-5 border-10 border-indigo-500 rounded-full w-24 h-24'>
                    <p className='text-gray-500 text-sm font'>Starred</p>
                    <p className='text-lg font-medium'>{statistic.starred}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Statistic