"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const itCoursesTestimonials = [
    {
      quote:
        'The Introduction to Programming course helped me build a solid foundation in coding. The hands-on projects really brought the concepts to life!',
      name: 'John Doe',
      title: 'Programming Student',
    },
    {
      quote:
        'The Web Development Bootcamp was exactly what I needed to start building modern websites. The instructors were incredibly knowledgeable and supportive throughout.',
      name: 'Jane Smith',
      title: 'Web Development Student',
    },
    {
      quote:
        'I took the Data Structures and Algorithms course and it gave me the confidence to tackle complex coding challenges. The content is both comprehensive and practical.',
      name: 'Mark Wilson',
      title: 'Data Structures Student',
    },
    {
      quote:
        'The Cloud Computing with AWS course was a game-changer for my career. I was able to apply what I learned immediately in my job. Highly recommended!',
      name: 'Sarah Lopez',
      title: 'Cloud Computing Student',
    },
    {
      quote:
        'The Cybersecurity Fundamentals course opened my eyes to the importance of security in IT. The hands-on labs were incredibly helpful in understanding real-world scenarios.',
      name: 'David Kim',
      title: 'Cybersecurity Student',
    },
  ];
  

const TestimonialPart = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear from our prides: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={itCoursesTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default TestimonialPart