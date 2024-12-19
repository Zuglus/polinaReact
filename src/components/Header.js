import React from 'react';
import logo from '../assets/images/logo.svg';

const Header = () => {
    return (
        <header class="relative mx-auto px-4 py-[3.75rem] max-w-[75rem]">
            <div class="flex justify-center items-center">
                <div class="flex items-center gap-[2rem]">
                    <div class="h-[12rem] md:h-[8rem]">
                        <img src={logo} alt="Logo" class="w-auto h-full object-contain" />
                    </div>

                    <div class="flex flex-col text-left whitespace-nowrap">
                        <div class="flex items-center gap-[2rem] md:gap-[1.3rem]">
                            <h1 class="font-mv-skifer text-[7.3125rem] md:text-[4.875rem] leading-none">Полина</h1>
                            <div
                                class="font-light font-onest text-[2.25rem] md:text-[1.5rem] leading-tight tracking-wider pb-1">
                                графический<br/>дизайнер
                            </div>
                        </div>
                        <h1 class="font-mv-skifer text-[7.3125rem] md:text-[4.875rem] leading-none">Мигранова</h1>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
