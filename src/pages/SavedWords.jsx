
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import FilterSection from '../components/saved_words/FilterSection';
import CardLayoutComponent from '../components/card/CardLayoutComponent';

import SavedWordsService from '../service/savedwords-service.js';

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
        <div className='flex flex-col p-10'>

            <div className='flex justify-between items-center mb-4'>
                <h1 className=' text-4xl font-bold'>Saved words</h1>
            </div>


            <FilterSection />

            <CardLayoutComponent />

        </div>
    );
}

export default SavedWords;
