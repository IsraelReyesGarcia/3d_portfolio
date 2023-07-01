import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';

import { styles } from '../styles';

const Hero = () => {
  return (
    <section 
      className='relative w-full h-screen mx-auto '
    >
      <div 
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5 `}
      >
        <div
          className='flex flex-col justify-center items-center mt-5'
        >
          <div className='w-5 h-5 rounder-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div
          className=''
        >
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, i'm <span className='text-[#915eff]'>Israel</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            I develop 3D visuals, user <br className='sm:block hidden' /> interfaces and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero