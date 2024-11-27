import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text-gray-300 py-12'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                        Master the Art of Coding is a premier platform dedicated to teaching the art
                        and science of coding. We nurture talent from the ground up, fostering a vibrant community of coders and developers.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>kolkata , India</p>
                    <p>kolkata 700102</p>
                    <p>Email: kaininhop@gmail.com</p>
                    <p>Phone: (+91) 0123456789 </p>
                </div>
            </div>
            <p className="text-center text-base pt-8">© 2024 Master of coding. All rights reserved.</p>
        </footer>
    )
}

export default Footer