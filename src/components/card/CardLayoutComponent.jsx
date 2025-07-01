
import { useDispatch, useSelector } from 'react-redux';

import { CiStar } from "react-icons/ci";
import { PiBrainLight } from "react-icons/pi";

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';


import CardIconComponent from './CardIconComponent';



function CardLayoutComponent() {
  const { language_pair_stats_by_lang, language_pair_stats_by_lang_pending } = useSelector((state) => state.savedWordsSlice);

  return (
    <div className="flex justify-center w-full ">

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl w-full">
            {language_pair_stats_by_lang?.words?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-between text-white font-medium bg-gradient-to-br from-blue-500 to-indigo-600 
                        border border-blue-700 p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-105 
                        cursor-pointer h-48 w-full" // Remove fixed widths, let grid handle it
              >
                <div className='flex flex-col items-start justify-center mb-2  w-full'>
                  <div className='flex flex-row w-full justify-end '>

                    <CardIconComponent icon_name={CiStar} tooltipText={'Star'} />
                    <CardIconComponent icon_name={PiBrainLight} tooltipText={'Learned'} />

                  </div>
                  <h1 className='text-xl capitalize'>{item.word}</h1>
                  <p className=' text-gray-300 capitalize text-[16px]'>
                    {item.part_of_speech}
                  </p>
                </div>
                <p className='text-sm capitalize'>
                  {item.translation}
                </p>
              </div>
            ))}
          </div>
      }



    </div>
  );
}


export default CardLayoutComponent