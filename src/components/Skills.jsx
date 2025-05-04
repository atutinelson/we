import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import python from './../assets/python_18894.png';
import flutter from './../assets/file_type_flutter_icon_130599.svg';
import nativeReact from './../assets/react_icon_130845.svg';
import docker from './../assets/docker_plain_logo_icon_146554 (1).svg';
import git from './../assets/git_plain_logo_icon_146507.svg';
import django from './../assets/django.png';
import node from './../assets/R.png';
import javascript from './../assets/javascript.jpg';
import flask from './../assets/flask.png';
import photoshop from './../assets/photoshop.png';

function Skills() {
    const skills = [
        {
            image: python,
            skill: "Python"
        },
        {
            image: flutter,
            skill: "Flutter"
        },
        {
            image: javascript,
            skill: "JavaScript"
        },
        {
            image: nativeReact,
            skill: "React && React native"
        },
        {
            image: docker,
            skill: "Devops"
        },
        {
            image: git,
            skill: "Version control"
        },
        {
            image: django,
            skill: "django && restFramework"
        },
        {
            image: node,
            skill: "Node js"
        },
        {
            image: flask,
            skill: "Flask"
        },
        {
            image: photoshop,
            skill: "Photoshop"
        }
    ];

    return (
        <motion.section
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            className="max-w-7xl mx-auto px-4 py-16"
        >
            <motion.h2
            className='text-2xl pb-3 font-bold text-center'
            >
                Skills
            </motion.h2>
            <motion.div 
             className='grid grid-cols-3 md:grid-cols-4 gap-2 '
            >
           
            {
                skills.map((skill, index) => {
                    return (
                        <div key={index} className='bg-gray-100 flex flex-col items-center p-2 rounded-sm'>
                            <img src={skill.image} alt={skill.skill} width={50} height={50}/>
                            <p className='text-sm font-medium'>{skill.skill}</p>
                        </div>
                    );
                })
            }
        
        </motion.div>
        </motion.section>
        
    );
}

export default Skills;
