

import { motion } from "framer-motion"

function Header() {
  return (
    

      <div className='w-full flex flex-col '>

        <div className='flex flex-col p-3'>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ fontFamily: "Open Sans" }}
            className='text-5xl font-bold text-black'
          >
            Dashboard
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ fontFamily: "Open Sans" }}
            className="mt-4 text-[15px] text-gray-900"
          >
            Track your saved words, learn smarter with LinguaPocket
          </motion.p> */}
        </div>

        
      </div>
  )
}

export default Header