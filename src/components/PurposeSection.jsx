import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import {AiFillRocket} from "react-icons/ai"

const PurposeSection = () => {
  const features = [
    {
      icon: <AiFillRocket  className="bg-amber-300 rounded-sm size-6"/>, // Replace with your actual icon component or image
      title: "Our Goal",
      description: "At Afritech, we believe great software starts with a clear vision and a strong partnership. Founded on innovation and driven by technology, we specialize in crafting custom software solutions that solve real-world problems and fuel business growth.",
    
    },    {
      icon: <AiFillRocket className="bg-blue-500 size-6"/>, // Replace with your actual icon component or image
      title: "Our Mission",
      description: "Our team blends deep technical expertise with a user-first mindset to build scalable web, mobile, and enterprise applications. Whether you're a startup bringing a new product to market or an established company modernizing legacy systems, we bring the agility, transparency, and quality your project deserve"
    }
  ];

  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          <motion.div variants={fadeIn('right', 0.3)}>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              className="text-sm text-purple-600 font-semibold mb-2 "
            >
              About as
            </motion.div>
            <motion.h2 
              variants={textVariant(0.5)}
              className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-900"
            >
              Innovative software solutions tailored to grow your business.
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8v"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="flex items-start space-x-4 "
              >
                <motion.div 
                  variants={fadeIn('right', 0.4 * (index + 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-lg "
                >
                  {feature.icon}
                </motion.div>
                <motion.div variants={fadeIn('left', 0.4 * (index + 1))}>
                  <motion.h3 
                    variants={textVariant(0.3)}
                    className="text-xl font-semibold text-gray-900 mb-2 "
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    variants={fadeIn('up', 0.4)}
                    className="text-gray-600"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;