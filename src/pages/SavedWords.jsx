
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import FilterSection from '../components/saved_words/FilterSection';
import CardLayoutComponent from '../components/card/CardLayoutComponent';

import Logo from '../assets/logo.svg';

import LangStats from '../components/saved_words/LangStats';

import SavedWordsService from '../service/savedwords-service.js';
import Statistic from '../components/saved_words/Statistic.jsx';

function SavedWords() {

    const dispatch = useDispatch();
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const savedFilter = JSON.parse(localStorage.getItem('languageFilter'));

        if (savedFilter && isInitialLoad) {
            dispatch(SavedWordsService.get_language_pair_stats_by_lang({
                from_lang: savedFilter.from_lang,
                to_lang: savedFilter.to_lang
            }));
            setIsInitialLoad(false);
        }
    }, [dispatch]);

    return (
        <div className='flex flex-col p-6'>

            {/* Logo and title */}
            <div className='flex justify-between items-center mb-4 bg-gray-100 p-2 rounded-lg'>

                <div className='flex flex-row justify-between items-center'>
                    <img src={Logo} alt='logo' className='w-10 h-10 mr-3' /> 
                    <h1 style={{ fontFamily: "IBM Plex Sans" }}
                        className=' text-3xl font-bold'>Saved Words</h1>
                </div>

                <div className='flex flex-row justify-between items-center'>
                    <LangStats />
                </div>

            </div>

            <Statistic />

            <FilterSection />

            <CardLayoutComponent />

        </div>
    );
}

export default SavedWords;
