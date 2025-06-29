
import { motion } from "framer-motion"

import user_img from '../../assets/user.png'

function UserTitle() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
    style={{ fontFamily: "Roboto" }}
    className='flex flex-row items-center bg-gray-100 rounded-lg p-3'>
        <img className='w-20 rounded-full '
        src={user_img} alt="" />
        <span className='text-lg font-bold'>
            Unknown-1000
        </span>
    </motion.div>
  )
}

export default UserTitle