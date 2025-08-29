import Link from 'next/link';
import {
    IconBrandFacebook,
    IconBrandTelegram,
    IconBrandWhatsapp,
    IconBrandLinkedin,
    IconBrandYoutube,
    IconBrandInstagram,
    IconBrandTwitter
} from '@tabler/icons-react';

const socialIcons = [
    { name: 'facebook', icon: <IconBrandFacebook size={20} /> },
    { name: 'telegram', icon: <IconBrandTelegram size={20} /> },
    { name: 'whatsapp', icon: <IconBrandWhatsapp size={20} /> },
    { name: 'linkedin', icon: <IconBrandLinkedin size={20} /> },
    { name: 'youtube', icon: <IconBrandYoutube size={20} /> },
    { name: 'instagram', icon: <IconBrandInstagram size={20} /> },
    { name: 'twitter', icon: <IconBrandTwitter size={20} /> },
];

const SocialIconsNavbar = () => (
    <div className="flex flex-col gap-4 text-[#3A1F75] absolute right-5 bottom-14">
        {socialIcons.map((platform, idx) => (
            <Link href="#" key={idx} className="bg-white p-2.5 hover:text-white hover:bg-[#3A1F75] rounded-full border border-[#3A1F75]/70 hover:!shadow-xl transition-all duration-300 ease-linear">
                {platform.icon}
            </Link>
        ))}
    </div>
);

export default SocialIconsNavbar;
