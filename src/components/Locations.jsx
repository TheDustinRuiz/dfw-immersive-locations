import React from "react";
import DfwMetroplex from "./DfwMetroplex";

const Locations = ({name, address, imageUrl, description, link, yelp}) => {
    const locations = [
        {
            name: 'Ripley\'s Believe It or Not',
            address: '601 East Palace Parkway Grand Prairie, TX 75050',
            imageUrl: 'src/assets/Riley\'sBelieveItorNot.jpg',
            description: 'Embark on an immersive gaming journey at Ripley\'s Believe It or Not! Grand Prairie, where you can challenge friends and family to virtual battles. Explore lifelike wax figures, marvel at rare artifacts, and experience thrilling interactives like the 7D Moving Theater and mirror maze for an unforgettable day of fun and excitement.',
            link: 'https://www.ripleys.com/attractions/ripleys-believe-it-or-not-grand-prairie',
            yelp: 'https://www.yelp.com/biz/ripleys-believe-it-or-not-grand-prairie-grand-prairie-2?osq=Ripley%27s+Believe+It+Or+Not%21'
        },
        {
            name: 'Museum of Illusions Dallas',
            address: '701 Ross Ave Dallas, TX 75202',
            imageUrl: 'src/assets/MuseumOfIllusions.jpg',
            description: 'At the Museum of Illusions Dallas, prepare to be transported into a world of wonder and intrigue. Delve into a captivating array of illusions that challenge your perception, mesmerize your senses, and ignite your imagination. Step inside, where reality bends and nothing is quite as it seems.',
            link: 'https://moidallas.com/',
            yelp: 'https://www.yelp.com/biz/national-videogame-museum-frisco?osq=National+VideoGame+museum'
        },
        {
            name: 'Rainbow Vomit',
            address: '3609 Parry Ave, Dallas, TX 75226',
            imageUrl: 'src/assets/RainbowVomit.jpg',
            description: 'Rainbow Vomit in Dallas offers an immersive journey through a vibrant world of art, light, and sound. Escape into a surreal realm where interactive installations bring books to life and allow visitors to star in their own comic adventures.',
            link: 'https://rainbowvomit.com/',
            yelp: 'https://www.yelp.com/biz/rainbow-vomit-dallas?osq=Rainbow+Vomit'
        },
        {
            name: 'Dallas Museum of Art',
            address: '1717 N Harwood St, Dallas, TX 75201',
            imageUrl: 'src/assets/DallasMuseumofArt.jpg',
            description: 'Discover the Dallas Museum of Art, a cornerstone of artistic exploration in America. Housing over 25,000 works spanning five millennia, its diverse collection captivates visitors of all ages. Enjoy family-friendly activities such as story times, art-making, hands-on games, and workshops—all offered with free admission, ensuring everyone can experience the wonder of art',
            link: 'https://dma.org/',
            yelp: 'https://www.yelp.com/biz/dallas-museum-of-art-dallas?osq=Dallas+Museum+of+Art'
        },
        {
            name: 'Meow Wolf',
            address: '3000 Grapevine Mills Pkwy Suite 253, Grapevine, TX 76051',
            imageUrl: 'src/assets/MeowWolf.jpg',
            description: 'At Meow Wolf, prepare to embark on an immersive journey into a fantastical realm where art and technology collide. Dive into interactive installations, where you can engage with the artwork firsthand. Wander through captivating rooms, uncovering hidden surprises and secrets at every turn.',
            link: 'https://meowwolf.com/visit/grapevine',
            yelp: 'https://www.yelp.com/biz/the-real-unreal-meow-wolf-grapevine?osq=Meow+Wolf'
        },
        {
            name: 'Sweet Tooth Hotel',
            address: '1511 Elm Street, Dallas, TX 75201',
            imageUrl: 'src/assets/SweetToothHotel.jpg',
            description: 'Step into the Sweet Tooth Hotel, where every "hotel" door unveils a world of interactive art and captivating storytelling. Discover diverse exhibitions curated by local and national artists, ranging from intricate fiber art to mind-bending digital creations. Dive into this one-of-a-kind immersive experience and indulge your passion for the arts.',
            link: 'https://sweettoothhotel.com/',
            yelp: 'https://www.yelp.com/biz/sweet-tooth-hotel-dallas-2?osq=Sweet+Tooth+Hotel'
        },
        {
            name: 'SPARK!',
            address: '1409 Botham Jean Blvd #004, Dallas, TX 75215',
            imageUrl: 'src/assets/SPARK.jpg',
            description: 'SPARK! is a dynamic indoor playground designed to spark creativity in children aged 7-17. With a hands-on learning environment and immersive exhibits, it encourages exploration and interaction with various artistic disciplines.',
            link: 'https://sparkdallas.org/',
            yelp: 'https://www.yelp.com/biz/spark-dallas'
        },
        {
            name: 'The Secret Chambers',
            address: '513 Alta Mere Dr, Fort Worth, TX 76114',
            imageUrl: 'src/assets/TheSecretChambers.jpg',
            description: 'The Secret Chambers has thrilling escape room adventures. Immerse yourself in immersive experiences inspired by mystery, adventure, and fantasy themes, where you and your team must solve puzzles, uncover clues, and work together to escape within a set time limit.',
            link: 'https://thesecretchambers.com/locations/fort-worth-tx/',
            yelp: 'https://www.yelp.com/biz/the-secret-chambers-escape-room-challenge-fort-worth?osq=The+Secret+Chambers'
        },
        {
            name: 'National VideoGame Museum',
            address: '8004 N Dallas Pkwy Ste 300 Frisco, TX 75034',
            imageUrl: 'src/assets/NationalVideoGameMuseum.jpg',
            description: 'Welcome to the ultimate destination for gamers: a place where the rich history and exciting future of the video game industry converge.  Immerse yourself in interactive exhibits that showcase gaming\'s past, present, and future, ensuring endless fun and discovery for all.',
            link: 'https://nvmusa.org/',
            yelp: 'https://www.yelp.com/biz/national-videogame-museum-frisco?osq=National+VideoGame+museum'
        },
        {
            name: 'Immersive Gamebox',
            address: '2525 Elm St Suite 110, Dallas, TX 75226',
            imageUrl: 'src/assets/ImmersiveGamebox.jpg',
            description: 'Immersive Gamebox provides an unparalleled group gaming experience, combining motion tracking, touch screens, surround sound, and drink service for an immersive adventure like no other.',
            link: 'https://www.immersivegamebox.com/en-AU/venues/dtx-deep-ellum-texas',
            yelp: 'https://www.yelp.com/biz/immersive-gamebox-deep-ellum-dallas'
        },
    ];

    return (
        <div>
            <DfwMetroplex locations = {locations} />
        </div>
    );
};

export default Locations;