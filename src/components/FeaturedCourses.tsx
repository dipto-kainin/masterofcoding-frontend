'use client'
import React from 'react'
import CourseData from '@/data/it_courses.json'
import { Button } from './ui/moving-border'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

type Course = {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string
}

export const FeaturedCourses = () => {
    const featuredCourses =CourseData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className='py-12 bg-gray-900 '>
        <div className='text-center'>
            <h2
                className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-800  dark:from-neutral-50 dark:to-neutral-400"
            > Featured Courses </h2>
            <p className='mt-4 max-w-2xl text-xl text-gray-400 mx-auto pb-4 md:pb-8'>Check out our featured courses and start learning</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 hover:text-black bg-white hover:bg-gray-100 transition duration-200"
            >
            View All courses
            </Link>
        </div>

    </div>
  )
}
