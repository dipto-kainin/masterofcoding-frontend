"use client"

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
    {
      title: 'Introduction to Python Programming',
      description:
        'Explore the basics of Python and learn how to write your first program.',
      slug: 'introduction-to-python-programming',
      isFeatured: true,
    },
    {
      title: 'Building Responsive Websites',
      description:
        'Master the skills needed to create responsive, modern websites using HTML, CSS, and JavaScript.',
      slug: 'building-responsive-websites',
      isFeatured: true,
    },
    {
      title: 'Data Structures and Algorithms Deep Dive',
      description:
        'Take a deep dive into data structures and algorithms to enhance your problem-solving skills.',
      slug: 'data-structures-algorithms-deep-dive',
      isFeatured: true,
    },
    {
      title: 'Getting Started with Machine Learning',
      description:
        'Learn the fundamentals of machine learning and create your first predictive models.',
      slug: 'getting-started-with-machine-learning',
      isFeatured: true,
    },
    {
      title: 'Effective Cybersecurity Practices',
      description:
        'Discover how to protect systems and networks with essential cybersecurity techniques.',
      slug: 'effective-cybersecurity-practices',
      isFeatured: true,
    },
    {
      title: 'Cloud Computing and AWS',
      description:
        'Learn the basics of cloud computing and how to deploy applications using AWS.',
      slug: 'cloud-computing-and-aws',
      isFeatured: true,
    },
  ];  

const UpcomingWebiner = () => {
  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
            <p className="mt-2 text-2xl leading-8 tracking-tight text-white md:text-4xl">Enhance Your coding Journey</p>
         </div>
        <div className="mt-10">
            <HoverEffect
            items={featuredWebinars.map(webinar => (
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: '/'
                }
            ))}
            />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
        </div>
    </div>
  )
}

export default UpcomingWebiner