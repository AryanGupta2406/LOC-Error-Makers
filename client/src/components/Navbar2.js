import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { List } from '@chakra-ui/layout';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar2 = () => {
    return (
        <Disclosure as="nav" className="bg-[#ff7f50] border-b-[1.5px] border-black top-0">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <img src={logo} alt='' />
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex font-dm font-medium">

                                        <Link to='/home' className='text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8'>
                                            Home
                                        </Link>
                                        <Link to='/community' className='text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8'>
                                            Community
                                        </Link>
                                        <Link to='/blog' className='text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8'>

                                        Blog
                                        </Link>
                                        <Link to='/courses' className='text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8'>
                                            Courses
                                        </Link>
                                        <Link to='/quest' className='text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8'>
                                            Quest
                                        </Link>
                                      {/* <div >
                                      <div class="relative inline-block text-left">
  <div>
    <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Options
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  
  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <Link to='/gallery' class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Gallery </Link>
      <Link to='/popular' class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Popular</Link>
      <Link to='' class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">NFT Vault<span class="inline-block bg-red-500 text-white  rounded-full px-3 py-1 text-sm font-semibold  ml-4 mb-2">
                  BETA
                </span></Link>
     
    </div>
  </div>
</div>

                                      </div> */}
                                        {/* <div class="relative inline-block text-left"> */}
 
  
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to='/profile'>
                                    <button
                                        type="submit"
                                        class="w-full text-center py-3 px-3 rounded bg-black text-white hover:border-white focus:outline-none my-1"
                                    >Create Account</button>
                                </Link>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            
                                            <Link to="/profilemain"><img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""/>
                                                </Link>
                                            
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
 className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>

                                            </Menu.Item>
                                            <Menu.Item>

                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">

                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )

}
export default Navbar2;