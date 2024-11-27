"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const itCoursesContent = [
    {
      title: 'Your Path to Tech Mastery Starts Here: Personalized Learning for Every Aspirant',
      description:
        'Embark on an IT learning journey uniquely tailored to your needs. Whether you’re a beginner or an advanced learner, our courses are designed to adapt to your skill level, offering personalized support at every step. At our IT courses company, your goals become our mission, and together, we’ll unlock your potential in the tech world.',
    },
    {
      title: 'Interactive Learning with Real-Time Feedback',
      description:
        'Engage in an interactive learning experience where feedback is immediate, helping you grasp concepts faster and more effectively. Just like collaborating on live development projects, our approach provides real-time insights that deepen your understanding of coding, cybersecurity, cloud computing, and more.',
    },
    {
      title: 'Cutting-Edge Curriculum, Updated for the Latest Trends',
      description:
        'Stay ahead of the curve with our constantly evolving curriculum. We ensure that our courses—ranging from programming to AI—are always aligned with the latest industry trends and technologies. Our commitment to continuous updates guarantees that you’ll learn the most relevant and up-to-date skills needed in today’s tech landscape.',
    },
    {
      title: 'Limitless Learning Opportunities Across a Wide Range of Tech Disciplines',
      description:
        'With a vast selection of courses in web development, data science, machine learning, DevOps, and beyond, our platform offers limitless opportunities for growth. Whether you’re interested in deepening your knowledge or exploring new fields, there’s always something fresh and exciting to learn.',
    },
    {
      title: 'Expert Instructors Dedicated to Your Success',
      description:
        'Our courses are led by industry experts with years of hands-on experience in the field. You’ll receive guidance from professionals who are passionate about technology and committed to your success, ensuring you gain both practical knowledge and insider insights into the industry.',
    },
  ];
  
function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={itCoursesContent} />
    </div>
  )
}

export default WhyChooseUs