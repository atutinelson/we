import { title } from 'framer-motion/client';
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { FaUserGraduate, FaCashRegister  } from 'react-icons/fa';

function Portfolio() {
    const projects =[
    {
        icon:<FaUserGraduate/>,
        title:"School Management System",
        description:"A comprehensive web-based application designed to streamline the administration of student records and academic operations. Built using the Django framework for robust backend functionality, JavaScript for dynamic client-side interactions, and Tailwind CSS for a modern, responsive UI."
    },
    {
        icon:<FaCashRegister/>,
        title:"Android Pos Application",
        description:"This Android-based Point of Sale (POS) application is built using Flutter for a sleek, high-performance mobile interface and Django REST Framework for a secure and scalable backend. Designed for small to mid-sized businesses, it allows users to manage product inventories, scan barcodes for quick product lookup, process orders in real time, and track sales effortlessly."
    }
    ]
    return (
        <motion.section 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          className="max-w-7xl mx-auto px-4 py-16  bg-gray-50"
        >
          <motion.div 
            variants={fadeIn('up', 0.3)}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={textVariant(0.2)}
              className="text-3xl font-bold mb-4"
            >
              
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)}
              className="text-gray-600"
            >
              OUR PROJECTS
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('up', 0.5)}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
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
                    {project.icon}
                  </motion.div>
                </motion.div>
                <motion.h3 
                  variants={textVariant(0.3)}
                  className="text-2xl font-medium mb-3"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  variants={fadeIn('up', 0.6 * (index + 1))}
                  className="text-gray-500 text-center"
                >
                  {project.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
    
         
        </motion.section>
      )
    }

export default Portfolio;