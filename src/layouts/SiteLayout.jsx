import { forEachOf } from 'async';
import React from 'react';
import Header from '../components/Header';
import itemImg from '../assets/media/pictures/item.png'
import Footer from '../components/Footer';


const SiteLayout = () => {
    return (
        <>
            <Header />
            <div className="containers md:mx-[30px] mx-[15px] xl:ml-[127px] xl:mr-[127px] 2xl:mx-auto font-Roboto mt-[111px] overflow-hidden">
                <div className=" sm:flex sm:items-center sm:justify-between mt-[46px]">
                    <p className="font-bold text-[36px] ">Bài tập thực hành</p>
                    <div className="mt-2 sm:mt-0">
                        <form action="" className="flex items-center">
                            <div className="relative mr-[15px]">
                                <input type="text" className=" border border-gray-500 h-[40px] rounded-[3px] w-[200px] pl-[15px] py-[8px] pr-[30px] text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Tìm kiếm..." />
                                <button className="absolute bottom-0 translate-y-[-35%] right-[10px]"><i className="fa fa-search"></i></button>
                            </div>
                            <div className="">
                                <select className="w-[130px] h-[40px] border border-gray-500 rounded-[3px] py-[8px] px-[11px] focus:outline-none focus:ring-1 focus:ring-blue-600" name="" id="">
                                    <option value="1">Tất cả</option>
                                    <option value="2">Sơ cấp</option>
                                    <option value="3">Trung cấp</option>
                                    <option value="4">Nâng cao</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[34px] mt-[35px]">
                        <div className="p-[15px] border border-gray-400 rounded-[15px] shadow-lg">
                            <div className="w-full">
                                <img className="w-full rounded-[15px]" src={itemImg} alt="" />
                            </div>
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-bold">Learning app</span>
                                <span className="text-[14px]">0 VNĐ</span>
                            </div>
                            <p className="text-[14px] text-green-500 mt-[5px]">Tác giả: Nguyễn Thành Đạt</p>
                            <p className="text-[16px] text-gray-700 mt-[5px] leading-[24px] pr-[5px]">Thực hành cắt giao diện từ figma sang HTML, CSS, JS</p>
                            <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px]">
                                <p className=" text-[12px] text-green-500 px-[15px]">Sơ cấp:</p>
                                <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                    <div className="h-[5px] bg-green-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-green-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[15px] border border-gray-400 rounded-[15px] shadow-lg">
                            <div className="w-full">
                                <img className="w-full rounded-[15px]" src={itemImg} alt="" />
                            </div>
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-bold">Learning app</span>
                                <span className="text-[14px]">0 VNĐ</span>
                            </div>
                            <p className="text-[14px] text-green-500 mt-[5px]">Tác giả: Nguyễn Thành Đạt</p>
                            <p className="text-[16px] text-gray-700 mt-[5px] leading-[24px] pr-[5px]">Thực hành cắt giao diện từ figma sang HTML, CSS, JS</p>
                            <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px]">
                                <p className=" text-[12px] text-green-500 px-[15px]">Sơ cấp:</p>
                                <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                    <div className="h-[5px] bg-green-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-green-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-green-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[15px] border border-gray-400 rounded-[15px] shadow-lg">
                            <div className="w-full">
                                <img className="w-full rounded-[15px]" src={itemImg} alt="" />
                            </div>
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-bold">Learning app</span>
                                <span className="text-[14px]">25.000 VNĐ</span>
                            </div>
                            <p className="text-[14px] text-green-500 mt-[5px]">Tác giả: Nguyễn Thành Đạt</p>
                            <p className="text-[16px] text-gray-700 mt-[5px] leading-[24px] pr-[5px]">Thực hành cắt giao diện từ figma sang HTML, CSS, JS</p>
                            <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px]">
                                <p className=" text-[12px] text-yellow-500 px-[15px]">Trung cấp:</p>
                                <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                    <div className="h-[5px] bg-yellow-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-yellow-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[15px] border border-gray-400 rounded-[15px] shadow-lg">
                            <div className="w-full">
                                <img className="w-full rounded-[15px]" src={itemImg} alt="" />
                            </div>
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-bold">Learning app</span>
                                <span className="text-[14px]">25.000 VNĐ</span>
                            </div>
                            <p className="text-[14px] text-green-500 mt-[5px]">Tác giả: Nguyễn Thành Đạt</p>
                            <p className="text-[16px] text-gray-700 mt-[5px] leading-[24px] pr-[5px]">Thực hành cắt giao diện từ figma sang HTML, CSS, JS</p>
                            <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px]">
                                <p className=" text-[12px] text-yellow-500 px-[15px]">Trung cấp:</p>
                                <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                    <div className="h-[5px] bg-yellow-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-yellow-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-yellow-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[15px] border border-gray-400 rounded-[15px] shadow-lg">
                            <div className="w-full">
                                <img className="w-full rounded-[15px]" src={itemImg} alt="" />
                            </div>
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-bold">Learning app</span>
                                <span className="text-[14px]">50.000 VNĐ</span>
                            </div>
                            <p className="text-[14px] text-green-500 mt-[5px]">Tác giả: Nguyễn Thành Đạt</p>
                            <p className="text-[16px] text-gray-700 mt-[5px] leading-[24px] pr-[5px]">Thực hành cắt giao diện từ figma sang HTML, CSS, JS</p>
                            <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px]">
                                <p className=" text-[12px] text-red-500 px-[15px]">Nâng cao:</p>
                                <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                    <div className="h-[5px] bg-red-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[15px] border border-gray-400 rounded-[15px] shadow-lg">
                            <div className="w-full">
                                <img className="w-full rounded-[15px]" src={itemImg} alt="" />
                            </div>
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-bold">Learning app</span>
                                <span className="text-[14px]">50.000 VNĐ</span>
                            </div>
                            <p className="text-[14px] text-green-500 mt-[5px]">Tác giả: Nguyễn Thành Đạt</p>
                            <p className="text-[16px] text-gray-700 mt-[5px] leading-[24px] pr-[5px]">Thực hành cắt giao diện từ figma sang HTML, CSS, JS</p>
                            <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px]">
                                <p className=" text-[12px] text-red-500 px-[15px]">Nâng cao:</p>
                                <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                    <div className="h-[5px] bg-red-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-red-500  rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[15px] border border-gray-400 rounded-[15px] shadow-lg">
                            <div className="w-full">
                                <img className="w-full rounded-[15px]" src={itemImg} alt="" />
                            </div>
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-bold">Learning app</span>
                                <span className="text-[14px]">25.000 VNĐ</span>
                            </div>
                            <p className="text-[14px] text-green-500 mt-[5px]">Tác giả: Nguyễn Thành Đạt</p>
                            <p className="text-[16px] text-gray-700 mt-[5px] leading-[24px] pr-[5px]">Thực hành cắt giao diện từ figma sang HTML, CSS, JS</p>
                            <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px]">
                                <p className=" text-[12px] text-yellow-500 px-[15px]">Trung cấp:</p>
                                <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                    <div className="h-[5px] bg-yellow-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-yellow-500  rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[15px] border border-gray-400 rounded-[15px] shadow-lg">
                            <div className="w-full">
                                <img className="w-full rounded-[15px]" src={itemImg} alt="" />
                            </div>
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-bold">Learning app</span>
                                <span className="text-[14px]">50.000 VNĐ</span>
                            </div>
                            <p className="text-[14px] text-green-500 mt-[5px]">Tác giả: Nguyễn Thành Đạt</p>
                            <p className="text-[16px] text-gray-700 mt-[5px] leading-[24px] pr-[5px]">Thực hành cắt giao diện từ figma sang HTML, CSS, JS</p>
                            <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px]">
                                <p className=" text-[12px] text-red-500 px-[15px]">Nâng cao:</p>
                                <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                    <div className="h-[5px] bg-red-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50  rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[15px] border border-gray-400 rounded-[15px] shadow-lg">
                            <div className="w-full">
                                <img className="w-full rounded-[15px]" src={itemImg} alt="" />
                            </div>
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-bold">Learning app</span>
                                <span className="text-[14px]">50.000 VNĐ</span>
                            </div>
                            <p className="text-[14px] text-green-500 mt-[5px]">Tác giả: Nguyễn Thành Đạt</p>
                            <p className="text-[16px] text-gray-700 mt-[5px] leading-[24px] pr-[5px]">Thực hành cắt giao diện từ figma sang HTML, CSS, JS</p>
                            <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px]">
                                <p className=" text-[12px] text-red-500 px-[15px]">Nâng cao:</p>
                                <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                    <div className="h-[5px] bg-red-500 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-red-500  rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                    <div className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-[35px] flex items-center">
                        <div className="m-auto flex items-center">
                            <span className="text-3xl text-gray-500 btn_slick"><i className="fa fa-angle-double-left"></i></span>
                            <span className="text-[16px] mx-[28px]">Trang 1</span>
                            <span className="text-3xl btn_slick active1"><i className="fa fa-angle-double-right "></i></span>
                        </div>
                    </div>
                </div>
                <div className="w-full  mt-[74px] banner-course rounded-[15px] py-10 lg:py-[78px]">
                    <div className="z-10 text-center ">
                        <p className="lg:text-[30px] text-2xl px-2  text-white bold leading-[45px] max-w-[1000px] mx-auto">Bạn mong muốn tham gia vào cộng đồng của chúng tôi để chia sẻ kiến thức và giảng dạy?</p>
                        <button className="border border-white py-[13px] px-[43px] text-white mt-[45px] hover:bg-white hover:text-blue-500 ">ĐĂNG KÝ NGAY</button>
                    </div>
                </div>
                <div className="w-full mt-[70px] text-center">
                    <h2 className="font-bold text-[36px]">Liên hệ với chúng tôi</h2>
                    <p className="max-w-[760px] mt-[7px] mx-auto text-[16px] leading-[24px] text-gray-700">Để chất lượng học tập ngày càng nâng cao, nếu bạn có thắc mắc hoặc có ý kiến đóng góp, hãy liên hệ ngay với chúng tôi thông qua các nên tảng sau đây.</p>
                    <div className="text-center mt-[40px] mb-[70px]">
                        <span className="inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px] text-red-500 hover:bg-red-500 hover:text-white"><i className="fa fa-facebook-f mt-[50%] translate-y-[-50%]"></i></span>
                        <span className="inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px] text-red-500 hover:bg-red-500 hover:text-white"><i className="far fa-envelope mt-[50%] translate-y-[-50%]"></i></span>
                        <span className=" inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px] text-red-500 hover:bg-red-500 hover:text-white"><i className="fa fa-instagram mt-[50%] translate-y-[-50%]"></i></span>
                        <span className="inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px] text-red-500 hover:bg-red-500 hover:text-white"><i className="fa fa-link mt-[50%] translate-y-[-50%]"></i></span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SiteLayout;