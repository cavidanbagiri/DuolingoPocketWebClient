
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactCountryFlag from 'react-country-flag';

import SavedWordsService from '../../service/savedwords-service';

function LangStats() {

  const dispatch = useDispatch();

  const { language_pair_stats } = useSelector((state) => state.dashboardSlice);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState(null);

  useEffect(() => {
    const savedFilter = JSON.parse(localStorage.getItem('languageFilter'));
    if (savedFilter) {
      const pair = language_pair_stats.find(
        item => item.from_lang === savedFilter.from_lang && 
               item.to_lang === savedFilter.to_lang
      );
      if (pair) setSelectedPair(pair);
    }
  }, [language_pair_stats]);

  const getCountryCode = (lang) => {
    const map = {
      en: 'GB', ru: 'RU', es: 'ES', fr: 'FR', de: 'DE',
      zh: 'CN', ja: 'JP', ko: 'KR', ar: 'SA', pt: 'PT',
      it: 'IT', nl: 'NL', tr: 'TR', pl: 'PL', uk: 'UA'
    };
    return map[lang] || lang;
  };

  return (
    <div className="relative inline-block">
      {/* Button with dynamic width but min-width constraint */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none min-w-[10rem]"
      >
        {selectedPair ? (
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center flex-1 justify-between">
              <ReactCountryFlag 
                countryCode={getCountryCode(selectedPair.from_lang)} 
                svg 
                className="!w-5 !h-5 flex-shrink-0"
                title={selectedPair.from_lang}
              />
              <span className="mx-1">→</span>
              <ReactCountryFlag 
                countryCode={getCountryCode(selectedPair.to_lang)} 
                svg 
                className="!w-5 !h-5 flex-shrink-0"
                title={selectedPair.to_lang}
              />
            </div>
            <span className="text-xs flex-shrink-0">({selectedPair.total_word})</span>
          </div>
        ) : (
          <span className="text-sm">Select language pair</span>
        )}
      </button>

      {/* Dropdown with matching width */}
      {isOpen && (
        <div className="absolute z-10 top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto w-full">
          {language_pair_stats.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedPair(item);
                setIsOpen(false);
                localStorage.setItem('languageFilter', JSON.stringify({
                  from_lang: item.from_lang,
                  to_lang: item.to_lang
                }));
                dispatch(SavedWordsService.get_language_pair_stats_by_lang({
                from_lang: item.from_lang,
                to_lang: item.to_lang
            }));
              }}
              className="flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <ReactCountryFlag 
                  countryCode={getCountryCode(item.from_lang)} 
                  svg 
                  className="!w-4 !h-4 flex-shrink-0"
                />
                <span className="text-xs">→</span>
                <ReactCountryFlag 
                  countryCode={getCountryCode(item.to_lang)} 
                  svg 
                  className="!w-4 !h-4 flex-shrink-0"
                />
              </div>
              <span className="text-xs text-gray-500">({item.total_word})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LangStats;