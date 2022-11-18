import { useEffect } from 'react';

import { Page } from './../layouts/';

import { Carousel, SocialWidget } from './../components';

export default () => {
    useEffect(() => {
        document.title = 'Homepage';
    }, []);

    return (
        <Page>
            <SocialWidget
                items={[
                    {
                        name: 'insta',
                        url: 'https://instagram.com/hard_steel_tattoo_company',
                    },
                    {
                        name: 'whatsapp',
                        url:
                            'https://api.whatsapp.com/send?phone=4915750490254',
                    },
                    {
                        name: 'fb',
                        url:
                            'https://facebook.com/profile.php?id=100064573285451&ref',
                    },
                    {
                        name: 'tiktok',
                        url: 'https://tiktok.com/@hardsteeltattoocompany',
                    },
                ]}
            />

            <Carousel
                items={[
                    {
                        content: 'a',
                        source: 'facebook',
                    },
                    {
                        content: 'b',
                        source: 'facebook',
                    },
                    {
                        content: 'c',
                        source: 'twitter',
                    },
                ]}
            />
        </Page>
    );
};
