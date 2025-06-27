

import FilterSection from '../components/saved_words/FilterSection';
import CardLayout from '../components/card/CardLayout';

function SavedWords() {
    return (
        <div className='flex flex-col '>
            <FilterSection />

            <CardLayout />
        </div>
    );
}

export default SavedWords;
