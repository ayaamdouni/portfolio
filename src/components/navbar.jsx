import React from 'react'
import ThemeToggle from './toggleMode';

const Navbar = () => {
    const onButtonClick = () => {
    
        // using Java Script method to get PDF file
        fetch("/cv/Aya_Amdouni_Resume_blockchain.pdf").then((response) => {
            response.blob().then((blob) => {
            
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                    
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Aya_Amdouni.pdf";
                alink.click();
            });
        });
    };
  return (
    <nav class="dark:bg-black sticky top-0 z-50">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
            
                <div class="flex flex-row w-full justify-between items-center sm:items-stretch sm:justify-start">
                    <div class="flex items-center space-x-2">
                        <img class="h-8 w-auto" src="/images/photoAya.png" alt="Aya Amdouni" />
                        <p className='text-xl font-bold text-blue-900 dark:text-white'>Aya Amdouni</p>
                    </div>
                    <div className="hidden md:flex flex-row space-x-4 ml-auto ">
                        
                            <a href="https://www.linkedin.com/in/aya-amdouni-9006b0167/" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                <img class="h-8 w-auto" src="/icons/linkedin.png" alt="LinkedIn logo" />
                            </a>
                            {/* <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                <img class="h-8 w-auto" src="/icons/mail.png" alt="send Mail" />
                            </a> */}
                            <a href="https://github.com/ayaamdouni" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                <img class="h-8 w-auto" src="/icons/github.png" alt="Github Account" />
                            </a>
                            <button onClick={onButtonClick} clbuttonss="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                <img class="h-8 w-auto" src="/icons/printer.png" alt="print Resume" />
                            </button>
                            <ThemeToggle />
                    </div>
                    <div className="md:hidden">
                        <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;