import React, { useEffect, useState } from 'react';
import '../../../styles/tailwind.scss';

interface NavItem {
    link: {
        url: {
            href: string;
        };
        open_in_new_tab?: boolean;
        rel?: string;
    };
    linkText: string;
}

interface NavMobileProps {
    data: NavItem[];
}

const NavMobile = ({ data }: NavMobileProps) => {
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string | null>(null);

    useEffect(() => {
        const currentPath = new URL(window.location.href).pathname;
        let foundMatch = false;
        data.forEach(item => {
            const linkPath = item.link?.url?.href ? new URL(item.link.url.href).pathname : '';
            if (currentPath === linkPath) {
                setIsActive(true);
                setActiveLink(item.linkText);
                foundMatch = true;
            }
        });
        if (!foundMatch) {
            setIsActive(false);
            setActiveLink(null);
        }
    }, [data]);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            <div className='md:hidden px-4 mb-5'>
                <button
                    onClick={toggleAccordion}
                    className={`w-full uppercase border border-black text-base transition duration-300 cursor-pointer inline-flex justify-between items-center hover:bg-brown-700 hover:text-white px-6 py-3 mb-[5px] bg-brown-700 text-white`}
                >
                    <p>{activeLink ? activeLink : 'Plated Menus'}</p>
                    {!isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="23.935" height="18.916" viewBox="0 0 23.935 18.916"><g id="Group_182" data-name="Group 182" transform="translate(-368.299 -21.604)"><line id="Line_78" data-name="Line 78" x2="20.935" transform="translate(369.799 23.104)" fill="none" stroke="#FFF" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"></line><line id="Line_79" data-name="Line 79" x2="20.935" transform="translate(369.799 31.063)" fill="none" stroke="#FFF" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"></line><line id="Line_80" data-name="Line 80" x2="20.935" transform="translate(369.799 39.02)" fill="none" stroke="#FFF" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"></line></g></svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
}
                </button>
                {isOpen && (
                    data.map((item, index) => (
                        <div key={index} className='accordion-content'>
                            <a
                                href={item.link?.url?.href}
                                target={item.link?.open_in_new_tab ? "_blank" : "_self"}
                                rel={item.link?.rel ? item.link?.rel : undefined}
                                className={`w-full uppercase border border-black text-base transition duration-300 cursor-pointer inline-flex items-center justify-start hover:bg-brown-700 hover:text-white px-6 py-3 mb-[5px] ${isActive && activeLink === item.linkText ? 'bg-brown-700 text-white' : 'bg-white text-brown-600'}`}
                            >
                                {item.linkText}
                            </a>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NavMobile;