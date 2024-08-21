// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Sticky header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Loader
    window.addEventListener('load', function() {
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    const apiKey = 'ef9891dd436368accecea7b225f4e00f'; // Replace with your actual API key
    const city = 'Petra,JO';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const temperatureElement = document.getElementById('temperature');
    temperatureElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tempC = Math.round(data.main.temp);
            const tempF = Math.round((tempC * 9/5) + 32);
            temperatureElement.innerHTML = `${tempC}°C | ${tempF}°F`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            temperatureElement.innerHTML = '<i class="fas fa-exclamation-circle"></i> Unavailable';
        });


     // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

   
    const timelineData = [
        {
            year: '312 BC',
            title: 'Petra Founded',
            description: 
                "Petra is believed to have been settled as early as 312 BC by the Nabataeans, an Arab tribe that established the city as their capital. " +
                "Petra's location at the crossroads of ancient trade routes made it a vital commercial hub, connecting the silk and spice routes of China, " +
                "India, and southern Arabia with the markets of Greece, Rome, and the Mediterranean. The Nabataeans developed Petra into a thriving capital, " +
                "with impressive rock-cut architecture, including tombs, temples, and monuments, that still stand today.",
            image: 'https://i.ibb.co/K9MtCDB/founding-image.jpg'
        },
        {
            year: '100 BC',
            title: 'Trade Route Established',
            description: 
                "By 100 BC, Petra had firmly established itself as a major trading center. The Nabataeans capitalized on the city's strategic position, " +
                "which linked the incense and spice trade routes of Arabia with the Mediterranean world. Caravans laden with goods from as far as India and " +
                "China would pass through Petra, making it a bustling hub of commerce. The wealth generated from trade allowed the Nabataeans to construct " +
                "elaborate public buildings and ornate tombs, showcasing their prosperity and influence.",
            image: 'https://i.ibb.co/9tL7rvs/trading-center.jpg'
        },
        {
            year: '106 AD',
            title: 'Roman Annexation',
            description: 
                "In 106 AD, Petra was annexed by the Roman Empire under Emperor Trajan. The city was incorporated into the Roman province of Arabia Petraea, " +
                "and while Petra continued to thrive as a trade center, its importance gradually diminished as the Romans shifted trade routes to more accessible " +
                "areas. Roman influence brought new architectural styles to Petra, including the construction of a Roman-style theater and the transformation of " +
                "existing Nabataean structures into Roman buildings.",
            image: 'https://i.ibb.co/1mtzj1Z/romans-attack.jpg'
        },
        {
            year: '363 AD',
            title: 'Earthquake',
            description: 
                "In 363 AD, a devastating earthquake struck Petra, causing significant damage to many of its structures, including its sophisticated water " +
                "management system. The earthquake marked the beginning of the city's decline. Although some parts of Petra were rebuilt, the city's " +
                "strategic importance had already waned, and it gradually fell into obscurity as trade routes continued to shift.",
            image: 'https://i.ibb.co/VML0HYZ/earthquake.jpg'
        },
        {
            year: '1812 AD',
            title: 'Rediscovery',
            description: 
                "Petra remained largely unknown to the Western world until 1812 when Swiss explorer Johann Ludwig Burckhardt, disguised as a local Bedouin, " +
                "rediscovered the city. His detailed accounts of the site sparked renewed interest in Petra, and it soon became a focus of archaeological " +
                "exploration. Since its rediscovery, Petra has been recognized as one of the most important archaeological sites in the world, attracting " +
                "visitors and scholars alike who are drawn to its rich history and breathtaking architecture.",
            image: 'https://i.ibb.co/rpVbSWh/discovery-of-petra.jpg'
        }
    ];
    
    
        const timelineContainer = document.querySelector('.timeline-container');
        const modal = document.getElementById('event-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalImage = document.getElementById('modal-image');
        const closeModal = document.querySelector('.close');
    
        // Create timeline events
        timelineData.forEach((item, index) => {
            const event = document.createElement('div');
            event.classList.add('timeline-event');
            event.classList.add(index % 2 === 0 ? 'left' : 'right');
            
            const content = document.createElement('div');
            content.classList.add('timeline-content');
            content.innerHTML = `
                <h2>${item.title}</h2>
                <p class="date">${item.year}</p>
                <p>${item.description.substring(0, 100)}...</p>
            `;
            content.addEventListener('click', () => openModal(item));
            
            event.appendChild(content);
            timelineContainer.appendChild(event);
        });
    
        // Modal functions
        function openModal(item) {
            modalTitle.textContent = `${item.year} - ${item.title}`;
            modalDescription.textContent = item.description;
            modalImage.src = item.image;
            modalImage.alt = item.title;
            modal.style.display = 'block';
        }
    
        closeModal.onclick = function() {
            modal.style.display = 'none';
        }
    
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
   
});

const modal = document.getElementById('event-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

function openModal(item) {
    modalTitle.textContent = `${item.year} - ${item.title}`;
    modalDescription.textContent = item.description;
    modalImage.src = item.image;
    modalImage.alt = item.title;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

closeModal.onclick = closeModalFunction;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModalFunction();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModalFunction();
    }
});

function addLocations() {
    const grid = document.getElementById('location-grid');

    const locations = [
        {
            name: "Bab al Siq",
            description: "The entrance to the Siq, the main entrance to Petra.",
            image: "assets/images/bab-al-siq.jpg",
            fullDescription: "Bab Al Siq, meaning 'Gateway to the Siq', is the starting point of the journey into Petra. It features important monuments like the Obelisk Tomb and the Bab Al Siq Triclinium."
        },
        {
            name: "The Treasury",
            description: "Petra's most famous monument, carved out of a sandstone rock face.",
            image: "assets/images/treasury.jpg",
            fullDescription: "Al-Khazneh, or The Treasury, is Petra's most magnificent facade. Standing over 40 meters high, it is believed to have been the mausoleum of the Nabatean King Aretas IV in the 1st century AD."
        },
        {
            name: "The Street of Facades",
            description: "A row of monumental Nabataean tombs carved in the southern cliff face of the outer Siq.",
            image: "assets/images/street-of-facades.jpg",
            fullDescription: "The Street of Facades is a row of impressive tombs with intricate carvings. These monumental Nabataean tombs reflect the wealth and importance of those buried there."
        },
        {
            name: "The Dam",
            description: "An ancient Nabataean structure built to protect Petra from floods.",
            image: "assets/images/the-dam.jpg",
            fullDescription: "The Dam is a significant engineering achievement by the Nabataeans. Built to divert flash floods away from Petra, it showcases the advanced water management techniques that were crucial for the city's survival."
        },
        {
            name: "The Monastery",
            description: "A monumental building carved out of rock, similar in design to the Treasury but larger.",
            image: "assets/images/the-monastery.jpg",
            fullDescription: "The Monastery, or Al-Deir, is one of Petra’s largest and most impressive monuments. It stands 50 meters tall and 45 meters wide, and is believed to have been a Nabataean temple or tomb. The hike to the Monastery offers stunning views of the surrounding landscape."
        },
        {
            name: "The Royal Tombs",
            description: "A series of grand tombs that were likely used by Nabataean royalty.",
            image: "assets/images/royal-tombs.jpg",
            fullDescription: "The Royal Tombs consist of the Urn Tomb, Silk Tomb, Corinthian Tomb, and Palace Tomb. These tombs are some of the most elaborate in Petra, with intricate carvings and grand facades that reflect the status of those buried within."
        },
        {
            name: "The Great Temple",
            description: "One of the largest freestanding structures in Petra, believed to have been a central place of worship.",
            image: "assets/images/great-temple.jpg",
            fullDescription: "The Great Temple is an expansive complex covering 7,560 square meters. It includes a large central courtyard, several smaller rooms, and a grand staircase leading to the temple. The temple was likely used for important religious and civic activities."
        },
        {
            name: "The High Place of Sacrifice",
            description: "An ancient Nabataean altar situated high above Petra, offering panoramic views.",
            image: "assets/images/high-place-of-sacrifice.jpg",
            fullDescription: "The High Place of Sacrifice is a sacred altar where Nabataeans performed religious rituals, including sacrifices. The site is reached by climbing a steep path, and offers breathtaking views of Petra and the surrounding mountains."
        },
        {
            name: "The Colonnaded Street",
            description: "The main street of Petra, once lined with grand columns and important buildings.",
            image: "assets/images/the-colannaded-street.jpg",
            fullDescription: "The Colonnaded Street was the heart of Petra, serving as a bustling marketplace and central thoroughfare. It was flanked by grand columns and important structures, including shops, temples, and public buildings."
        },
        {
            name: "The Siq",
            description: "A narrow, winding gorge that serves as the dramatic entrance to Petra.",
            image: "assets/images/the-siq.jpg",
            fullDescription: "The Siq is a natural geological feature that serves as the main entrance to Petra. This 1.2-kilometer-long gorge is flanked by towering cliffs and leads visitors on a winding path to the Treasury. Along the way, you'll see ancient carvings and the remnants of water channels that once supplied Petra."
        },
        {
            name: "The Lion Triclinium",
            description: "A small Nabataean tomb and triclinium with lion carvings at the entrance.",
            image: "assets/images/lion-triclinium.jpg",
            fullDescription: "The Lion Triclinium is a small tomb and dining hall, known as a triclinium, located in Petra. It gets its name from the carved lions that guard the entrance, symbolizing protection and strength. The interior was likely used for ritual feasts and gatherings."
        },
        {
            name: "The Theatre",
            description: "A large Nabataean theatre carved into the rock, with seating for thousands.",
            image: "assets/images/the-theater.jpg",
            fullDescription: "The Theatre in Petra is an impressive structure carved directly into the rock by the Nabataeans. It could accommodate over 8,000 spectators, making it one of the largest theatres in the ancient world. Later modified by the Romans, it reflects the blending of Nabataean and Roman architectural styles."
        }
    ];
    
    
    locations.forEach(location => {
        const card = document.createElement('div');
        card.className = 'location-card';
        card.innerHTML = `
            <img src="${location.image}" alt="${location.name}">
            <div class="location-info">
                <h3>${location.name}</h3>
                <p>${location.description}</p>
                <a href="#" class="more-info" data-location="${location.name}">More Info</a>
            </div>
        `;
        grid.appendChild(card);
    });

    // Add event listener for "More Info" buttons
    grid.addEventListener('click', function(e) {
        if (e.target.classList.contains('more-info')) {
            e.preventDefault();
            const locationName = e.target.getAttribute('data-location');
            const location = locations.find(loc => loc.name === locationName);
            if (location) {
                openModal(location);
            }
        }
    });
}

function openModal(location) {
    const modal = document.getElementById('event-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');

    modalTitle.textContent = location.name;
    modalDescription.textContent = location.fullDescription;
    modalImage.src = location.image;
    modalImage.alt = location.name;

    modal.style.display = 'block';
}

const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add active class to the clicked button and its corresponding pane
        button.classList.add('active');
        tabPanes[index].classList.add('active');
    });
});

const activityItems = document.querySelectorAll('.activity-item');
const activityContent = document.querySelector('.activity-content');

activityItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        activityItems.forEach(i => i.classList.remove('active'));
        // Add active class to the clicked item
        item.classList.add('active');

        // Update the content in the right panel
        switch (index) {
            case 0:
                updateActivityContent(
                    'Petra by Night',
                    'Witness Petra\'s magical ambiance under the night sky, where the Siq and the Treasury are lit by thousands of candles. This event offers a serene and mystical experience with Bedouin music and storytelling.',
                    ['When: Monday, Wednesday, and Thursday nights.', 'Time: Starts at 8:30 PM, lasts for about 2 hours.', 'Tickets: Available at the Visitor Center.']
                );
                break;
            case 1:
                updateActivityContent(
                    'Hiking Trails',
                    'Explore Petra\'s stunning landscapes through its many hiking trails, offering breathtaking views and a deeper understanding of the site.',
                    ['Popular Trails:', 'The Monastery Trail (Ad Deir): A challenging hike that rewards you with one of Petra\'s most impressive monuments.', 'The High Place of Sacrifice Trail: A steep climb leading to a site used for religious rituals, offering panoramic views of the city.', 'The Al-Khubtha Trail: A less crowded trail that leads to a viewpoint overlooking the Treasury.']
                );
                break;
            case 2:
                updateActivityContent(
                    'The Siq Walk',
                    'Walk through the Siq, a narrow and winding gorge that serves as the main entrance to Petra. The journey through the Siq is a mesmerizing experience, with high walls and carved rock formations guiding you to the iconic Treasury.',
                    ['Highlights:', 'Petroglyphs and Inscriptions: Ancient carvings and drawings on the walls of the Siq.', 'Nabataean Water Channels: Ingenious water channels carved into the rock by the Nabataeans.']
                );
                break;
            case 3:
                updateActivityContent(
                    'Exploring the Treasury',
                    'The Treasury is Petra\'s most famous monument, carved out of a sandstone rock face. Marvel at the intricate details and grandeur of this iconic structure.',
                    ['Tips:', 'Photography: Capture the Treasury from different angles, especially in the early morning or late afternoon when the sunlight is ideal.', 'Guided Tours: Learn about the history and myths surrounding the Treasury with a local guide.']
                );
                break;
            case 4:
                updateActivityContent(
                    'Visiting the Monastery',
                    'The Monastery is one of Petra\'s largest and most awe-inspiring monuments, situated high above the city. It\'s a rewarding hike with incredible views of the surrounding landscape.',
                    ['Details:', 'Hike Duration: About 1.5 to 2 hours from the city center.', 'Best Time to Visit: Early morning or late afternoon to avoid the heat and crowds.']
                );
                break;
            case 5:
                updateActivityContent(
                    'The Royal Tombs',
                    'Explore the Royal Tombs, a series of grand tombs carved into the rock, showcasing the architectural prowess of the Nabataeans. These tombs offer a glimpse into Petra\'s regal past.',
                    ['Notable Tombs:', 'The Urn Tomb: Known for its large courtyard and impressive size.', 'The Silk Tomb: Famous for its colorful, swirling sandstone patterns.']
                );
                break;
            case 6:
                updateActivityContent(
                    'High Place of Sacrifice',
                    'This ancient Nabataean altar, located on a mountaintop, was used for religious ceremonies. The climb is steep but offers stunning views of Petra and the surrounding mountains.',
                    ['Highlights:', 'Altar and Obelisks: The sacrificial altar and the two large obelisks carved into the rock.', 'Panoramic Views: Spectacular views of Petra\'s landscape.']
                );
                break;
            case 7:
                updateActivityContent(
                    'Petra Archaeological Museum',
                    'Visit the Petra Archaeological Museum, located near the entrance, to learn more about Petra\'s history, culture, and artifacts found on-site.',
                    ['Exhibits:', 'Artifacts: Pottery, tools, and sculptures from the Nabataean and Roman periods.', 'History Displays: Information on Petra\'s development, trade routes, and daily life.']
                );
                break;
            case 8:
                updateActivityContent(
                    'Bedouin Hospitality and Culture',
                    'Experience authentic Bedouin culture by interacting with the local Bedouin community. Enjoy traditional meals, music, and storytelling, and learn about their way of life.',
                    ['Activities:', 'Tea and Coffee Ceremonies: Join a Bedouin family for traditional tea or coffee.', 'Handicrafts: Purchase handmade jewelry, textiles, and crafts made by local artisans.']
                );
                break;
            case 9:
                updateActivityContent(
                    'The Great Temple',
                    'Explore the ruins of the Great Temple, one of Petra\'s largest and most complex structures. The temple\'s remains include large courtyards, columns, and staircases, showcasing the grandeur of Nabataean architecture.',
                    ['Highlights:', 'Excavation Site: Learn about ongoing archaeological work at the temple.', 'Architectural Features: Admire the intricate carvings and construction techniques.']
                );
                break;
            case 10:
                updateActivityContent(
                    'Petra\'s Nabataean Theatre',
                    'Visit the ancient Nabataean theatre, carved directly into the rock, which could seat over 8,000 people. It\'s a remarkable example of Petra\'s blend of Nabataean and Roman architectural styles.',
                    ['Best Views:', 'Climb to the top of the theatre for panoramic views of the surrounding tombs and mountains.']
                );
                break;
            case 11:
                updateActivityContent(
                    'Horse and Camel Rides',
                    'Experience Petra like the ancient traders by taking a horse or camel ride through the site. This can be a unique way to explore Petra\'s vast landscape.',
                    ['Details:', 'Licensed Operators: Ensure you use licensed and reputable operators within Petra.', 'Routes: Popular routes include rides through the Siq or up to the Monastery.']
                );
                break;
            case 12:
                updateActivityContent(
                    'Petra Kitchen Cooking Class',
                    'Participate in a cooking class at Petra Kitchen, where you can learn to prepare traditional Jordanian dishes. This hands-on experience allows you to enjoy a delicious meal you helped create.',
                    ['Included Dishes:', 'Learn to cook dishes like Maqluba (a traditional Jordanian dish), mezze, and salads.']
                );
                break;
            case 13:
                updateActivityContent(
                    'Annual Petra Marathon',
                    'Participate in the Petra Marathon, a unique race that takes runners through Petra\'s ancient trails and monuments. It\'s a challenging yet rewarding experience for fitness enthusiasts.',
                    ['Event Details:', 'Distance: Full marathon (42 km) and half marathon (21 km) options.', 'Scenery: Run through Petra\'s iconic landmarks, including the Treasury and Monastery.']
                );
                break;
        }
    });
});

function updateActivityContent(title, description, details) {
    // Update the title and description
    activityContent.querySelector('h2').textContent = title;
    activityContent.querySelector('p:first-of-type').textContent = description;

    // Clear existing list items
    const detailsList = activityContent.querySelector('ul');
    detailsList.innerHTML = '';

    // Add new list items based on the details array
    details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });
}

            

// Call addLocations when the DOM is loaded
document.addEventListener('DOMContentLoaded', addLocations);
