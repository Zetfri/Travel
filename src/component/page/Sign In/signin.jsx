import React, { useState } from 'react';
import Get from "../../imge/Group 249.png";
import axios from 'axios';
import Footer from "../Footer/footer.jsx";
import { notification } from 'antd';

function Signin() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any of the required fields are empty
        if (!formData.name || !formData.message || !formData.phone) {
            notification.warning({
                message: 'Majburiy maydonlar',
                description: 'Iltimos, barcha majburiy maydonlarni to\'ldiring!',
            });
            return; // Stop the submission process
        }

        try {
            const botToken = '7485625468:AAGHeLepMjWactUjD0OPRSefD_8srs_r02o';
            const chatId = '-1002214508831';
            const text = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nPhone: ${formData.phone}`;

            await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: text
            });

            // Clear the form inputs after successful submission
            setFormData({
                name: '',
                email: '',
                message: '',
                phone: ''
            });

            notification.success({
                message: 'Muvaffaqiyatli',
                description: 'Xabar muvaffaqiyatli yuborildi!',
            });
        } catch (error) {
            console.error('Xabar yuborishda xatolik:', error);
            notification.error({
                message: 'Xatolik',
                description: 'Xabar yuborib bo\'lmadi.',
            });
        }
    };

    return (
        <div>
            <div className="w-full h-screen pt-20 flex flex-col items-center sm:mt-[600px]">
                <p className="text-[16px] text-center sm:mt-[-300px]">Holiday</p>
                <h2 className="text-[36px] text-center">Get In Touch</h2>
                <div className="w-[950px] flex justify-center sm:w-full lg:w-full lg:px-6">
                    <p className="w-[950px] text-center sm:w-full lg:w-full">
                        There was consensus, not surprisingly, that quality traditional travel agencies provide value
                        for
                        money. However, this was accompanied by a high level of concern that many consumers
                    </p>
                </div>
                <div className="w-full h-full flex items-center justify-center pt-40 sm:flex-col sm:pt-0 lg:pt-0 lg:flex-col">
                    <div className="w-1/2 h-screen mt-[-20px] ml-24   sm:w-full lg:w-full sm:mt-20 sm:ml-0 lg:ml-0 ">
                        <form
                            onSubmit={handleSubmit}
                            className="w-[580px] h-[500px] flex-wrap pl-20 space-y-2 mt-[150px] sm:pl-0 sm:w-[100%]  sm:space-y-[-8px] sm:mt-32 lg:space-y-[-8px] lg:pl-0"
                        >
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-[450px] h-[50px] border border-gray-300 p-2 rounded-md sm:w-[90%]"
                                data-aos="fade-down"
                                data-aos-delay="200"
                            />
                            <br/>
                            <br/>

                            <input
                                type="email"
                                placeholder="Your Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-[450px] h-[50px] border border-gray-300 p-2 hidden rounded-md sm:w-[90%] sm:hidden"
                                data-aos="fade-down"
                                data-aos-delay="300"
                            />



                            <input
                                type="text"
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-[450px] h-[50px] border border-gray-300 p-2 rounded-md sm:w-[90%]"
                                data-aos="fade-down"
                                data-aos-delay="400"
                            />
                            <br/>
                            <br/>

                            <input
                                type="text"
                                placeholder="+998 _ _ _ _ _ _"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-[450px] h-[50px] border border-gray-300 p-2 rounded-md sm:w-[90%]"
                                data-aos="fade-down"
                                data-aos-delay="500"
                            />
                            <br/>
                            <br/>

                            <button
                                type="submit"
                                className="w-[448px] px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:w-[90%]"
                                data-aos="fade-down"
                                data-aos-delay="600"
                            >
                                Yuborish
                            </button>
                        </form>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="w-1/2 h-screen flex justify-center items-center mr-24 mt-[-220px] sm:w-[80%] sm:mr-[-20px] sm:mb-40 lg:w-[90%]   lg:mb-32 lg:mr-[20px]">
                        <img src={Get} alt="Get in Touch"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Signin;
