
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import ReactCountryFlag from "react-country-flag";

import { getCountryCode } from '../../utils/languageFlags';

function Card({ data }) {

  const navigate = useNavigate();

  return (
    <div

      onClick={() => {
        localStorage.setItem('languageFilter', JSON.stringify({
          from_lang: data?.from_lang,
          to_lang: data?.to_lang
        }));
    
        navigate('/savedwords');
      }}

      style={{ fontFamily: "Open Sans" }}
      className='flex items-center justify-between flex-col w-full  p-4 rounded-xl shadow-md bg-white hover:shadow-2xl duration-150 cursor-pointer ' >
      <div className='flex items-center gap-2 mb-2'>
        <div className='flex items-center'>
          <ReactCountryFlag
            countryCode={getCountryCode(data?.from_lang)}
            svg
            style={{
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              border: '1px solid #ccc',
              objectFit: 'cover'
            }}
            title={data?.from_lang.toUpperCase()}
          />
          <span className='ml-2 text-sm font-medium'>
            {data?.from_lang.toUpperCase()}
          </span>
        </div>

        <span className='mx-2 text-gray-500'>→</span>

        <div className='flex items-center'>
          <ReactCountryFlag
            countryCode={getCountryCode(data?.to_lang)}
            svg
            style={{
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              border: '1px solid #ccc',
              objectFit: 'cover'
            }}
            title={data?.to_lang.toUpperCase()}
          />
          <span className='ml-2 text-sm font-medium'>
            {data?.to_lang.toUpperCase()}
          </span>
        </div>
      </div>


      {/* Progress Circle */}
      <div className='flex w-40 h-40 items-center justify-center rounded-full border-12 font-bold text-xl border-gray-500'>
        {data?.total_word} / {data?.learned}
      </div>
    </div>
  )
}

export default Card;