import { FaTiktok } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

import './SocialWidget.scss';

export default ({ items }) => {
    return (
        <div className="SocialWidget">
            {items.map((item, i) => {
                return (
                    <a
                        key={i}
                        className="SocialWidget--item"
                        target="_blank"
                        href={item.url}
                    >
                        {item.name === 'whatsapp' ? (
                            <IoLogoWhatsapp
                                size="2.4em"
                                color="#fffa"
                                className="SocialWidget--item--whatsapp"
                            />
                        ) : item.name === 'fb' ? (
                            <AiFillFacebook
                                size="2.5em"
                                color="#fffa"
                                className="SocialWidget--item--fb"
                            />
                        ) : item.name === 'insta' ? (
                            <AiFillInstagram
                                size="2.6em"
                                color="#fffa"
                                className="SocialWidget--item--insta"
                            />
                        ) : item.name === 'tiktok' ? (
                            <FaTiktok
                                size="2em"
                                color="#fffa"
                                className="SocialWidget--item--tiktok"
                            />
                        ) : (
                            ''
                        )}
                    </a>
                );
            })}
        </div>
    );
};
