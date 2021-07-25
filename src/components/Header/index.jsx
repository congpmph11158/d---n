import React from 'react'
import logo from '../../assets/media/pictures/logo.png'

const Header = () => {
    return (
        <div>
            <div id="Header" className="bg-[#000000] font-Roboto bg-opacity-70 fixed w-full top-0 z-10">
                <div className="containers md:mx-[30px] mx-[15px] text-sm lg:text-base  xl:ml-[127px] xl:mr-[125px] 2xl:mx-auto ">
                    <div className="flex justify-between">
                        <div className="w-[147px] mt-[15px] mb-[8px]">
                            <img className="w-full" src={logo} alt="" />
                        </div>
                        <nav className="flex">
                            <div className=" hidden sm:contents">
                                <ul className="flex items-center">
                                    <li><a className="text-white mr-[31px] hover:text-red-500 active" href="">Trang chủ</a></li>
                                    <li><a className="text-white mr-[31px] hover:text-red-500" href="">Khóa học</a></li>
                                    <li><a className="text-white mr-[31px] hover:text-red-500" href="">Thực hành</a></li>
                                    <li><a className="text-white mr-[31px] hover:text-red-500" href="">Đăng nhập</a></li>
                                    <li><a className="text-white login relative hover:text-red-500" href="">Đăng ký</a></li>
                                </ul>
                            </div>
                            <div className="fixed z-[999] bg-white shadow-lg navbar transform-x-full">
                                <div className="relative w-[200px] h-screen">
                                    <span className="absolute top-3 right-5 cursor-pointer text-2xl text-red-500 "><i className="fa fa-times"></i></span>
                                    <ul className=" mx-10 pt-16">
                                        <li className="text-[16px] font-bold border-b border-gray-500 py-1"><a href="">Trang chủ</a></li>
                                        <li className="text-[16px] mt-3 font-bold border-b border-gray-500 py-1"><a href="">Khóa học</a></li>
                                        <li className="text-[16px] mt-3 font-bold border-b border-gray-500 py-1"><a href="">Thực hành</a></li>
                                        <li className="text-[16px] mt-3 font-bold border-b border-gray-500 py-1"><a href="">Đăng nhập</a></li>
                                        <li className="text-[16px] mt-3 font-bold border-b border-gray-500 py-1"><a href="">Đăng ký</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center   ">
                                <p className="text-white text-3xl contents sm:hidden"> <i class="fa fa-bars" ></i></p>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
