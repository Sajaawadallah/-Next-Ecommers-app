import Image from "next/image";

export const navlinks = [
    {
        id: 1,
        title: 'About',
        links: [
            {
                id: 1,
                linktext: 'About Us',
                link: '#'
            },
            {
                id: 2,
                linktext: 'Find store',
                link: '#'
            },
            {
                id: 3,
                linktext: 'Categories',
                link: '#'
            },
            {
                id: 4,
                linktext: 'Blogs ',
                link: '#'
            }
        ]
    },

    {
        id: 2,
        title: 'Partnership',
        links: [
            {
                id: 1,
                linktext: 'About Us',
                link: '#'
            },
            {
                id: 2,
                linktext: 'Find store',
                link: '#'
            },
            {
                id: 3,
                linktext: 'Categories',
                link: '#'
            },
            {
                id: 4,
                linktext: 'Blogs ',
                link: '#'
            }
        ]
    },

    {
        id: 3,
        title: 'Information',
        links: [
            {
                id: 1,
                linktext: 'Help Center ',
                link: '#'
            },
            {
                id: 2,
                linktext: 'Money Refund',
                link: '#'
            },
            {
                id: 3,
                linktext: 'Shipping',
                link: '#'
            },
            {
                id: 4,
                linktext: 'Contact us ',
                link: '#'
            }
        ]
    },
    {
        id: 4,
        title: 'For users',
        links: [
            {
                id: 1,
                linktext: 'Login  ',
                link: '#'
            },
            {
                id: 2,
                linktext: 'Register',
                link: '#'
            },
            {
                id: 3,
                linktext: 'Settings',
                link: '#'
            },
            {
                id: 4,
                linktext: ' My Orders ',
                link: '#'
            }
        ]
    },
    {
        id: 5,
        title: 'Get app ',
        links: [
            {
                id: 1,
                linktext: <Image src="/appstore.png"
                    alt="app store"
                    width={123}
                    height={50} />,
                link: '#'
            },
            {
                id: 2,
                linktext: <Image
                    src="/googleplay.png"
                    alt="googleplay"
                    width={123}
                    height={50}
                />,
                link: '#'
            }


        ]
    },



]