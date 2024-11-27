import Link from "next/link"
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">
            <h1
                className="mt-20 md:mt-0 text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-800  dark:from-neutral-50 dark:to-neutral-400"
            >
                Master the art of coding
            </h1>
            <p
                className="mt-4 text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-300 max-w-lg mx-auto"
            >
            &quot;Master the Art of Coding&quot; offers a wide range of coding courses, from beginner basics like &quot;Introduction to Programming&quot; to advanced topics like &quot;Artificial Intelligence.&quot; With expert instructors, hands-on learning, and flexible pricing, it&apos;s the perfect place to sharpen your programming skills at any level.
            </p>
            <div className="mt-4">
                <Link href={"/courses"}>
                    <Button 
                        borderRadius="1rem"
                        containerClassName="h-[3.1rem] w-[10.1rem]"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 h-12 w-40"
                    >
                        Explore Courses
                    </Button>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default HeroSection