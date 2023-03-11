import React from 'react'

// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
const Community = () => {
    return (
        <>
            <div>
                <div class="grid grid-cols-9 bg-[#008080]">
                    <div class="col-span-7  top-0">
                        <h1 class="mt-4 mb-4 text-xl">Activity feed</h1>
                        {/* <PhoneIcon />
                        <AddIcon boxSize={6} />
                        <WarningIcon w={8} h={8} color="red.500" /> */}
                        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />


                        <div class="max-w-2xl mx-auto mb-6 top-0">

                            <form>
                                <label for="chat" class="sr-only">Your message</label>
                                <div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700 overscroll-y-auto">
                                    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                                    </button>
                                    <button type="button" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
                                    </button>
                                    <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                                    <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                                        <svg class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                    </button>
                                </div>
                            </form>

                        </div>

                        {/* cards */}

                        <section class=" dark:bg-gray-900 rounded-lg ">
                            <div class="container px-6 py-10 mx-auto  ml-1  flex-wrap overscroll-auto">
                                <h1 class="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">From the blog</h1>

                                <div class="grid grid-cols-2 gap-8 mt-8 md:mt-16 ml-1  md:grid-cols-2 flex-row ">


                                    <div class="lg:flex flex-row border-2  bg-[#99cccc] rounded-lg">
                                        <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                        <div class="flex flex-col justify-between py-6 lg:mx-6">
                                            <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                                How to use sticky note for problem solving
                                            </a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg>
                                            <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                                            <div class=''></div>

                                        </div>
                                    </div>

                                    <div class="lg:flex border-2 bg-[#99cccc] rounded-lg">
                                        <img class="object-cover  w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                        <div class="flex flex-col  justify-between py-6 lg:mx-6">
                                            <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                                How to use sticky note for problem solving
                                            </a>

                                            <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                                        </div>
                                    </div>

                                    <div class="lg:flex border-2 bg-[#99cccc]  ml-1 rounded-lg">
                                        <img class="object-cover   w-full h-56  rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                        <div class="flex flex-col justify-between py-6 lg:mx-6">
                                            <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                                Morning routine to boost your mood
                                            </a>

                                            <span class="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
                                        </div>
                                    </div>

                                    <div class="lg:flex border-2 bg-[#99cccc] rounded-lg ">
                                        <img class="object-cover   w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt="" />

                                        <div class="flex flex-col justify-between py-6 lg:mx-6">
                                            <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                                All the features you want to know
                                            </a>

                                            <span class="text-sm  text-gray-500 dark:text-gray-300">On: 30 September 2020</span>
                                        </div>
                                    </div>

                                    <div class="lg:flex bg-[#99cccc] rounded-lg border-2">
                                        <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80" alt="" />

                                        <div class="flex flex-col  justify-between py-6 lg:mx-6">
                                            <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                                Minimal workspace for your inspirations
                                            </a>

                                            <span class="text-sm text-gray-500 dark:text-gray-300">On: 13 October 2019</span>
                                        </div>
                                    </div>

                                    <div class="lg:flex bg-[#99cccc] rounded-lg border-2">
                                        <img class="object-cover   rounded-lg w-full h-56  lg:w-64" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                        <div class="flex flex-col justify-between py-6 lg:mx-6">
                                            <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                                What do you want to know about Blockchane
                                            </a>

                                            <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="col-span-2  mt-4 mx-4 inset-y-0 left-0">
                        {/* left side */}


                        <div class="max-w-2xl  mt-6 mr-2mx-auto flex flex-col items-center ml-2">

                            <aside class="w-full mt-6" aria-label="Sidebar mr-2">
                                <div class="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                </svg>
                                                <span class="ml-3">Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="https://icons8.com/icon/59766/compass">
                                                    <path
                                                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                                    </path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                                                <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                                    </path>
                                                    <path
                                                        d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                                    </path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Community
