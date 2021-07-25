import React from 'react'
import logo from '../../assets/media/pictures/logo.png'

const Footer = () => {
    return (
        <div className="w-full bg-gray-900 ">
            <div className="containers md:mx-[30px] mx-[15px] xl:ml-[127px] xl:mr-[127px] 2xl:mx-auto pb-[50px] pt-1">
                <div className=" px-6 lg:px-0 sm:grid sm:grid-cols-[1fr,1fr] gap-10 lg:gap-0 lg:flex w-full">
                    <div className="w-full lg:w-[25%] mt-[57px] pr-[10px]">
                        <div className="w-[204px]">
                            <img className="w-full" src={logo} alt="" />
                        </div>
                        <p className="text-white text-[16px] leading-[24px] mt-[20px]">Eduford là nơi học lập trình dành cho mọi lứa tuổi.</p>
                        <p className="text-white text-[16px] leading-[24px] mt-[15px]">Các khoá học được chọn lọc kỹ lưỡng trước khi đưa vào giảng dạy.</p>
                        <p className="text-white text-[16px] leading-[24px] mt-[15px]">Học viên có thể đi từ con số 0 tới khi trở thành lập trình viên chuyên nghiệp tại đây.</p>
                    </div>
                    <hr className="block sm:hidden mt-6" />
                    <div className="w-full lg:w-[20%] mt-[57px] mx-2 ml-2  lg:ml-6  lg:mt-[61px]">
                        <h3 className="font-bold text-[22px] text-white">Cộng tác viên</h3>
                        <ul className="mt-[34px] ">
                            <li className="text-[16px] text-white">Bạn có mong muốn hợp tác với chúng tôi?</li>
                            <li className="text-[16px] text-white mt-[15px]">Hãy liên hệ ngay với chúng tôi. </li>
                            <li><a href="" className="text-red-500 mt-[30px]">Tại đây!</a></li>
                        </ul>
                    </div>
                    <hr className="block sm:hidden mt-6" />
                    <div className=" w-full lg:w-[15%] ml-2 lg:ml-4 xl:ml-8 mt-6 lg:mt-[61px]">
                        <h3 className="font-bold text-[22px] text-white">Chúng tôi</h3>
                        <ul className="mt-6 md:mt-[34px] text-center lg:text-left">
                            <li className="inline-block sm:block mx-1 md:mx-0 px-2 py-[2px] border border-white text-[16px]  lg:border-none text-white hover:text-red-500"><a href="">Giới thiệu</a></li>
                            <li className="inline-block sm:block mx-1 md:mx-0 px-2 py-[2px] border border-white text-[16px] lg:border-none text-white mt-[15px] hover:text-red-500"><a href="">Liên hệ</a></li>
                            <li className=" inline-block sm:block mx-1 md:mx-0 px-2 py-[2px] border border-white text-[16px] lg:border-none text-white mt-[15px] hover:text-red-500"><a href="">Câu hỏi thường gặp</a></li>
                        </ul>
                    </div>
                    <hr className="block sm:hidden mt-6" />
                    <div className=" w-full  lg:w-[15%] xl:ml-12 lg:ml-4 mt-6 lg:mt-[61px]">
                        <h3 className="font-bold text-[22px] text-white">Hỗ trợ</h3>
                        <ul className=" mt-6 md:mt-[34px] text-center lg:text-left">
                            <li className="inline-block sm:block mx-1 md:mx-0 px-2 py-[2px] border border-white text-[16px] lg:border-none text-white hover:text-red-500"><a href="">Hỗ trợ</a></li>
                            <li className="inline-block sm:block mx-1 md:mx-0 px-2 py-[2px] border border-white text-[16px] lg:border-none text-white mt-[15px] hover:text-red-500"><a href="">Đóng góp</a></li>
                        </ul>
                    </div>
                    <hr className="block sm:hidden mt-6" />
                    <div className=" w-full lg:w-[25%] mt-6  lg:mt-[61px]">
                        <h3 className="font-bold text-[22px] text-white">Theo dõi</h3>
                        <p className="text-[16px] text-white mt-[33px] leading-[24px]">Nhập email để đăng ký nhận những thông tin hữu ích từ eduford</p>
                        <form action="">
                            <input type="text" className="mt-[15px] w-full pt-[9px] pb-[7px] pl-[18px] rounded-[10px] border border-green-500 bg-gray-500 bg-opacity-20" placeholder="Email của bạn..." />
                            <button className="w-[100px] mt-[13px] rounded-[10px] bg-green-500 text-[15px] px-[18px] py-[8px] text-white">ĐĂNG KÝ</button>
                        </form>
                    </div>
                </div>
                <p className="text-[16px] ml-6 sm:ml-0 text-white mt-[40px]">© 2021 eduford đăng ký bản quyền.</p>
            </div>
        </div>
    )
}

export default Footer
