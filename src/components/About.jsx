import React from 'react' 
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import {fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  return ( 
   <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
        Introduction</p>
        <h2 className={styles.sectionHeadText}>
        Overview.</h2>

     </motion.div>
      
     <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I am a Junior at UC San Diego, majoring in Electrical Engineering aimimg to pursue
       specialization in Machine Learning and Controls. My passion lies in coding, building, and 
       delving into the intricacies of autonomous robots. Actively driven to advance my skills
       and knowledge in this domain, I am actively seeking research and internship opportunities that align 
       with my interests. My enthusiasm for learning is unwavering, and I am committed to honing
       my engineering skills and expanding my expertise to contribute meaningfully to this dynamic field.

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
   )
  }

  export default SectionWrapper(About, "about");
