
import { motion } from "framer-motion"

function UserTitle() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
    style={{ fontFamily: "IBM Plex Sans" }}
    className='flex flex-row items-center  rounded-lg p-3 my-5'>
        <span className='text-4xl font-bold'>
            Hello, Cavidan Bagirli
        </span>
    </motion.div>
  )
}

export default UserTitle