
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

import { setChangedWordStatusFalse } from '../../store/savedwords-store';

import CardComponent from './CardComponent';
import MessageBox from '../../layouts/MessageBox';

function CardLayoutComponent() {

  const dispatch = useDispatch();


  const { language_pair_stats_by_lang, language_pair_stats_by_lang_pending, changed_word_staus } = useSelector((state) => state.savedWordsSlice);


  useEffect(()=>{
    if (changed_word_staus.show) {
      setTimeout(() => {
        dispatch(setChangedWordStatusFalse());
      }, 2000);
    }
  }, [changed_word_staus]);

  return (
    <div className="flex justify-center w-full ">

      {
        changed_word_staus.show &&
        <MessageBox message={changed_word_staus.message} color={changed_word_staus.color} />
      }


      {
        language_pair_stats_by_lang_pending ?
          <Box
            sx={{
              p: 8,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rectangular" width={230} height={192} />
            <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rectangular" width={230} height={192} />
            <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rectangular" width={230} height={192} />
            <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rectangular" width={230} height={192} />
          </Box>
          :
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5 w-full">
            {language_pair_stats_by_lang?.words?.map((item, index) => (
              <CardComponent key={index} item={item} />
            ))}
          </div>
      }



    </div>
  );
}


export default CardLayoutComponent