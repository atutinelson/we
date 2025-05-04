import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import {AiOutlineGlobal} from 'react-icons/ai'
import {FaMobileAlt,  FaPaintBrush,FaShoppingBag } from 'react-icons/fa'
import { title } from 'framer-motion/client';

const FeaturesSection = () => {
  const features = [
    {
      icon: <AiOutlineGlobal/>, 
      title: "Website development",
      description: "Our team of creative professionals can provide the best Web Design and Development Solutions that meet your vision and goals.We are the best Software Developers in kenya."
    },
    {
      icon: <FaMobileAlt/>,
      title: "Mobile App Development", 
      description: "We build creative apps compatible with multiple mobile operating systems with complete backend and frontend implementations.Contact us for Mobile app development in Kenya"
    },
    {
      icon: <FaShoppingBag/>,
      title: "Ecommerce",
      description: "Afritech helps you in e-commerce web development with our right experience and focused approach. We can provide unique e-commerce solutions that will be specific to your business needs. Contact us for Ecommerce solutions in Kenya"
    },
    {
      icon:< FaPaintBrush />,
      title:"Graphics design",
      description:"We craft visually compelling designs that elevate your brand, communicate your message, and captivate your audience. Using industry-leading Adobe tools (Illustrator, Photoshop, InDesign), we bring creativity and clarity to every project."
    }

  ]

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl font-bold mb-4"
        >
          SOFTWARE DEVELOPMENT IN KENYA
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600"
        >
          What we do
        </motion.p>
      </motion.div>
      
      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            className="flex flex-col items-center p-6"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center" 
              style={{ 
                backgroundColor: index === 0 ? '#F1EFFD' : 
                               index === 1 ? '#FFE7E7' : 
                               index === 2? '#FFF3E4'
                               :'#E4F9F5'
              }}
            >
              <motion.div 
                variants={fadeIn('up', 0.5 * (index + 1))}
                className="text-3xl"
              >
                {feature.icon}
              </motion.div>
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className="text-2xl font-medium mb-3"
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.6 * (index + 1))}
              className="text-gray-500 text-center"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

     
    </motion.section>
  )
}

export default FeaturesSection