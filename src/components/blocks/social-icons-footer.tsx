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

const SocialIconsFooter = () => (
    <div className="flex flex-wrap lg:flex-nowrap gap-4 text-[#3A1F75]">
        {socialIcons.map((platform, idx) => (
            <Link href="#" key={idx} className="hover:opacity-75 bg-white p-2.5 rounded-full">
                {platform.icon}
            </Link>
        ))}
    </div>
);

export default SocialIconsFooter;
