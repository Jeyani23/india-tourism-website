// ============================================================
//  India Tourism Chatbot — Knowledge Base
//  55 Q&A entries across 5 categories with keyword matching
// ============================================================

export const FAQ_SUGGESTIONS = [
  "Best time to visit India?",
  "National language?",
  "Famous Indian foods?",
  "Who built the Taj Mahal?",
  "Currency of India?",
  "Famous festivals?",
];

// Each entry: keywords[] used for matching, answer string, category label
export const KB = [
  // ── LANGUAGE ─────────────────────────────────────────────
  {
    category: "Language",
    keywords: ["national language", "official language", "india language", "india speak"],
    answer: "India has 2 official languages at the central level: Hindi and English. The Constitution recognises 22 scheduled languages. Hindi is the most widely spoken (~44% of population), but India has no single 'national language'.",
  },
  {
    category: "Language",
    keywords: ["how many languages", "languages spoken", "total languages", "number of languages"],
    answer: "India is among the world's most linguistically diverse countries, with 22 officially scheduled languages and over 19,500 dialects and mother tongues spoken across its states and territories.",
  },
  {
    category: "Language",
    keywords: ["tamil language", "tamil"],
    answer: "Tamil is one of the world's oldest classical languages — over 2,000 years old! It is the official language of Tamil Nadu and Puducherry, spoken by around 70 million people in India.",
  },
  {
    category: "Language",
    keywords: ["hindi", "hindi language", "hindi speakers"],
    answer: "Hindi, written in the Devanagari script, is the most widely spoken language in India and serves as a common tongue across North and Central India.",
  },
  {
    category: "Language",
    keywords: ["sanskrit", "ancient language", "oldest language"],
    answer: "Sanskrit is one of the world's oldest documented languages and the classical tongue of ancient India. It is the liturgical language of Hinduism, Buddhism, and Jainism, and the parent of many modern Indian languages.",
  },
  {
    category: "Language",
    keywords: ["bengali language", "bengali", "bangla"],
    answer: "Bengali (Bangla) is the official language of West Bengal, spoken by ~100 million people in India. Nobel laureate Rabindranath Tagore wrote his famous works in Bengali.",
  },
  {
    category: "Language",
    keywords: ["script", "writing system", "devanagari"],
    answer: "India uses many scripts: Devanagari (Hindi, Marathi, Sanskrit), Tamil script, Bengali script, Telugu script, Kannada script, and more — each reflecting a unique linguistic heritage.",
  },
  {
    category: "Language",
    keywords: ["english india", "english spoken", "english speaking"],
    answer: "English is widely spoken in urban India, especially in business, education, and government. India has the world's second-largest English-speaking population after the United States.",
  },

  // ── CULTURE ──────────────────────────────────────────────
  {
    category: "Culture",
    keywords: ["national animal", "tiger", "national animal india"],
    answer: "The Bengal Tiger (Panthera tigris tigris) is India's national animal. India is home to about 70% of the world's wild tiger population, largely thanks to Project Tiger launched in 1973.",
  },
  {
    category: "Culture",
    keywords: ["national bird", "peacock", "national bird india"],
    answer: "The Indian Peacock (Pavo cristatus) is the national bird of India. Known for its iridescent plumage and elaborate courtship dance, it symbolises grace and beauty.",
  },
  {
    category: "Culture",
    keywords: ["national flower", "lotus", "national flower india"],
    answer: "The Lotus (Nelumbo nucifera) is India's national flower. It symbolises purity, enlightenment, and rebirth and holds deep significance in Hindu and Buddhist traditions.",
  },
  {
    category: "Culture",
    keywords: ["national sport", "sport india", "hockey", "cricket"],
    answer: "Field Hockey is India's national sport, though cricket is by far the most popular. India has won 8 Olympic gold medals in hockey. Cricket is a near-religion in India!",
  },
  {
    category: "Culture",
    keywords: ["national anthem", "jana gana mana"],
    answer: "'Jana Gana Mana', composed by Rabindranath Tagore, is India's national anthem. It was officially adopted on 24 January 1950.",
  },
  {
    category: "Culture",
    keywords: ["festivals india", "famous festival", "festival", "diwali holi"],
    answer: "India celebrates hundreds of festivals! Major ones include Diwali (Festival of Lights), Holi (Festival of Colors), Eid, Christmas, Navratri, Durga Puja, Pongal, Onam, Baisakhi, and Ganesh Chaturthi.",
  },
  {
    category: "Culture",
    keywords: ["diwali", "deepavali", "festival of lights"],
    answer: "Diwali, the Festival of Lights, celebrates the victory of light over darkness. Homes are decorated with oil lamps and rangoli, fireworks light the sky, and sweets are shared with loved ones. It falls in October or November.",
  },
  {
    category: "Culture",
    keywords: ["holi", "festival of colors", "festival of colours"],
    answer: "Holi is the Festival of Colors celebrated each March. People throw coloured powder and water at each other, sing folk songs, and celebrate the arrival of spring and the triumph of good over evil.",
  },
  {
    category: "Culture",
    keywords: ["classical dance", "dance form", "bharatanatyam", "kathak", "dance india"],
    answer: "India recognises 8 classical dance forms: Bharatanatyam (Tamil Nadu), Kathak (North India), Kathakali (Kerala), Manipuri, Kuchipudi (Andhra Pradesh), Odissi (Odisha), Sattriya (Assam), and Mohiniyattam (Kerala).",
  },
  {
    category: "Culture",
    keywords: ["yoga", "yoga origin", "yoga india"],
    answer: "Yoga originated in India over 5,000 years ago, rooted in Hindu philosophy. It combines postures, breathing, and meditation. The UN declared 21 June as International Yoga Day in 2015, proposed by India.",
  },
  {
    category: "Culture",
    keywords: ["currency india", "indian currency", "rupee", "inr"],
    answer: "India's currency is the Indian Rupee (₹), ISO code INR. The ₹ symbol was officially adopted in 2010, designed by D. Udaya Kumar. 1 USD ≈ 83–85 INR (rate varies).",
  },
  {
    category: "Culture",
    keywords: ["bollywood", "indian cinema", "film india"],
    answer: "Bollywood — the Hindi-language film industry based in Mumbai — is the world's largest film producer by number of films. Indian cinema spans 20+ regional industries, including Tamil (Kollywood), Telugu (Tollywood), and Malayalam cinema.",
  },

  // ── FOOD ─────────────────────────────────────────────────
  {
    category: "Food",
    keywords: ["famous food", "popular food", "indian cuisine", "best food india", "food india"],
    answer: "Must-try Indian dishes: Biryani, Butter Chicken, Masala Dosa, Rogan Josh, Chole Bhature, Pani Puri, Samosa, Dal Makhani, Pav Bhaji, and Kheer. Every region has extraordinary specialities!",
  },
  {
    category: "Food",
    keywords: ["biryani", "biryani origin", "best biryani"],
    answer: "Biryani is a fragrant rice dish layered with spiced meat or vegetables, with roots in Persian and Mughal cuisine. Famous varieties: Hyderabadi Dum Biryani, Lucknowi Awadhi Biryani, and Kolkata Biryani.",
  },
  {
    category: "Food",
    keywords: ["south india food", "south indian food", "kerala food", "tamil food", "tamil nadu food", "dosa", "idli"],
    answer: "South Indian cuisine includes Idli, Dosa, Sambar, Rasam, Appam, Kerala Fish Curry, Chettinad Chicken, and coconut-based curries. It's rice-based and uses tamarind, coconut, and curry leaves extensively.",
  },
  {
    category: "Food",
    keywords: ["street food", "chaat", "pani puri", "vada pav"],
    answer: "Indian street food is legendary! Top picks: Pani Puri (hollow crispy shells with tangy water), Vada Pav (Mumbai's burger), Kathi Roll (Kolkata), Chole Bhature (Delhi), and Mirchi Bajji (Hyderabad).",
  },
  {
    category: "Food",
    keywords: ["north india food", "north indian food", "punjabi food", "butter chicken"],
    answer: "North Indian cuisine features rich gravies, tandoor-cooked breads (naan, roti), and classics like Butter Chicken, Palak Paneer, Dal Makhani, Rajma, and Aloo Paratha.",
  },
  {
    category: "Food",
    keywords: ["vegetarian india", "veg food", "vegetarian"],
    answer: "India has the world's largest vegetarian population — about 40% of Indians are vegetarian. The variety of vegetarian dishes is extraordinary, from Rajasthani Dal Baati Churma to elaborate South Indian Sadya feasts.",
  },
  {
    category: "Food",
    keywords: ["spice india", "indian spices", "masala", "spices"],
    answer: "India is the world's largest producer and consumer of spices. Key spices include turmeric, cumin, coriander, cardamom, cloves, cinnamon, black pepper, and chilli. Kerala and Karnataka are the 'Spice Gardens of India'.",
  },
  {
    category: "Food",
    keywords: ["chai", "tea india", "masala chai", "tea"],
    answer: "Chai (spiced tea) is integral to Indian life! Masala Chai is brewed with milk, tea leaves, ginger, cardamom, and cinnamon. India is a top tea producer — Darjeeling and Assam teas are world-famous.",
  },
  {
    category: "Food",
    keywords: ["sweet", "dessert india", "mithai", "gulab jamun", "kheer", "indian sweet"],
    answer: "Indian sweets (mithai) are irresistible: Gulab Jamun (fried milk balls in sugar syrup), Rasgulla (Bengal), Kheer (rice pudding), Jalebi, Ladoo, Barfi, and Halwa. Sweets are central to every festival and celebration.",
  },

  // ── HISTORY ──────────────────────────────────────────────
  {
    category: "History",
    keywords: ["taj mahal", "who built taj mahal", "built taj mahal", "taj mahal history"],
    answer: "The Taj Mahal was built by Mughal Emperor Shah Jahan (1631–1648) in Agra, in memory of his beloved wife Mumtaz Mahal. It is a UNESCO World Heritage Site and one of the Seven Wonders of the World.",
  },
  {
    category: "History",
    keywords: ["independence india", "independence day india", "when india independence", "15 august"],
    answer: "India gained independence from British rule on 15 August 1947. Jawaharlal Nehru became the first Prime Minister and delivered his iconic 'Tryst with Destiny' speech at midnight. Independence Day is celebrated every 15 August.",
  },
  {
    category: "History",
    keywords: ["mahatma gandhi", "gandhi", "father of nation"],
    answer: "Mahatma Gandhi (1869–1948) is the Father of the Nation. He led India's freedom movement through non-violent civil disobedience. Famous campaigns: Dandi Salt March (1930), Quit India Movement (1942). He was assassinated on 30 January 1948.",
  },
  {
    category: "History",
    keywords: ["mughal empire", "mughals", "mughal"],
    answer: "The Mughal Empire (1526–1857) was founded by Babur. Notable emperors: Akbar (famous for religious tolerance), Shah Jahan (Taj Mahal), Aurangzeb. The Mughals left a profound legacy in art, architecture, cuisine, and language.",
  },
  {
    category: "History",
    keywords: ["indus valley", "ancient india", "oldest civilisation", "harappa", "mohenjo daro"],
    answer: "The Indus Valley Civilisation (c. 3300–1300 BCE) was one of the world's earliest urban civilisations. Key sites — Harappa and Mohenjo-daro — had remarkably advanced city planning and drainage systems.",
  },
  {
    category: "History",
    keywords: ["republic day", "26 january", "constitution india"],
    answer: "Republic Day (26 January) marks the day in 1950 when India's Constitution came into force. A grand military parade is held on Kartavya Path in New Delhi showcasing India's defence and cultural diversity.",
  },
  {
    category: "History",
    keywords: ["british rule", "british india", "colonial india", "east india company"],
    answer: "British rule in India lasted roughly 200 years (1757–1947). While exploitative, this period also introduced railways, English education, and administrative unification. India's independence movement, led by Gandhi and others, ended this era.",
  },
  {
    category: "History",
    keywords: ["ashoka", "emperor ashoka", "maurya", "ashoka chakra"],
    answer: "Emperor Ashoka (304–232 BCE) of the Maurya dynasty is one of India's greatest rulers. After the bloody Kalinga War he embraced Buddhism, promoted non-violence and welfare across his empire. India's national emblem is based on his pillar.",
  },
  {
    category: "History",
    keywords: ["first prime minister", "jawaharlal nehru", "nehru", "pandit nehru"],
    answer: "Jawaharlal Nehru was India's first Prime Minister (1947–1964). He built India's democratic institutions, established IITs and IIMs, and shaped India's non-aligned foreign policy. He was fondly called 'Chacha Nehru'.",
  },
  {
    category: "History",
    keywords: ["national flag", "indian flag", "tricolour", "tiranga"],
    answer: "India's Tiranga (Tricolour) has three bands: saffron (courage), white (peace), and green (prosperity). At the centre is the Ashoka Chakra — a navy blue 24-spoked wheel representing the eternal wheel of law (Dharma Chakra).",
  },

  // ── TRAVEL & TOURISM ─────────────────────────────────────
  {
    category: "Travel",
    keywords: ["best time visit india", "best time to visit", "when to visit india", "ideal time visit", "visit india when"],
    answer: "Best time to visit most of India: October–March (cool, pleasant weather). Rajasthan & North India: Nov–Feb. Kerala & South India: Sep–Mar. Hill stations: Apr–Jun. Goa: Nov–Feb. Avoid peak summer (Apr–Jun) in the plains.",
  },
  {
    category: "Travel",
    keywords: ["visa india", "tourist visa", "india visa", "e-visa"],
    answer: "Most nationalities can apply for an e-Tourist Visa (e-TV) online at indianvisaonline.gov.in. Options: 30-day, 90-day, or 180-day e-Visa. Nepal and Bhutan citizens don't need a visa.",
  },
  {
    category: "Travel",
    keywords: ["goa", "goa beach", "visit goa"],
    answer: "Goa is India's most popular beach destination. Famous beaches: Baga, Calangute, Palolem, Anjuna. Beyond beaches: UNESCO-listed Old Goa churches, spice plantations, and vibrant nightlife. Best time: November–February.",
  },
  {
    category: "Travel",
    keywords: ["kerala", "gods own country", "backwaters", "kerala tourism"],
    answer: "Kerala ('God's Own Country') offers backwater houseboat cruises (Alleppey), Munnar tea gardens, Ayurveda retreats, Periyar wildlife sanctuary, and beaches (Kovalam, Varkala). Best time: September–March.",
  },
  {
    category: "Travel",
    keywords: ["rajasthan", "jaipur", "pink city", "rajasthan tourism"],
    answer: "Rajasthan is India's land of forts and palaces. Must-visits: Jaipur (Amber Fort, Hawa Mahal), Udaipur (City of Lakes), Jodhpur (Blue City), Jaisalmer (Desert city). Best time: October–March.",
  },
  {
    category: "Travel",
    keywords: ["himalayas", "mountains", "hill station", "manali", "shimla", "darjeeling", "leh ladakh"],
    answer: "India's Himalayan region is magnificent. Popular hill stations: Shimla, Manali, Dharamshala, Darjeeling, Mussoorie, Ooty. For adventure: Leh-Ladakh, Spiti Valley, and Uttarakhand offer world-class trekking.",
  },
  {
    category: "Travel",
    keywords: ["varanasi", "banaras", "kashi", "holy city", "ganga aarti"],
    answer: "Varanasi (Kashi) is one of the world's oldest cities and the holiest in Hinduism. The Ganga Aarti ceremony on the ghats at dusk is a spiritual spectacle. Must-see: Dashashwamedh Ghat, Kashi Vishwanath Temple, nearby Sarnath.",
  },
  {
    category: "Travel",
    keywords: ["transport india", "train india", "travel within india", "getting around india", "irctc"],
    answer: "Getting around India: Trains (Indian Railways — book at IRCTC), Domestic flights (IndiGo, Air India, SpiceJet), Buses, Metro systems in major cities, Uber/Ola, and auto-rickshaws for short distances.",
  },
  {
    category: "Travel",
    keywords: ["delhi", "new delhi", "capital india", "india capital"],
    answer: "New Delhi, India's capital, blends history with modernity. Must-visit: India Gate, Red Fort (UNESCO), Qutb Minar (UNESCO), Humayun's Tomb, Lotus Temple, and Chandni Chowk for street food. Best time: October–March.",
  },
  {
    category: "Travel",
    keywords: ["mumbai", "bombay", "financial capital", "mumbai tourism"],
    answer: "Mumbai, India's financial capital, offers: Gateway of India, Marine Drive, Elephanta Caves (UNESCO), Chhatrapati Shivaji Maharaj Terminus (UNESCO), Juhu Beach, and Bollywood. Try local Vada Pav and Pav Bhaji!",
  },
  {
    category: "Travel",
    keywords: ["safety india", "safe travel", "is india safe", "travel safety"],
    answer: "India is generally safe for tourists. Tips: use registered taxis/Uber/Ola, drink bottled water, keep valuables secure, dress modestly at religious sites, buy travel insurance, and stay aware in crowded areas.",
  },
  {
    category: "Travel",
    keywords: ["budget india", "how much money", "cost travel india", "cheap travel", "india cost"],
    answer: "India is very budget-friendly! Backpacker: ₹1,500–3,000/day (USD 18–35). Mid-range: ₹3,000–8,000/day. Street food meals: ₹50–150. Auto-rickshaw rides: ₹30–100. Luxury hotels available at a fraction of Western prices.",
  },
  {
    category: "Travel",
    keywords: ["unesco india", "world heritage site india", "heritage sites"],
    answer: "India has 42 UNESCO World Heritage Sites — the most in Asia. Famous ones: Taj Mahal, Red Fort, Qutb Minar, Hampi, Khajuraho, Ellora & Ajanta Caves, Sundarbans, Western Ghats, and Mountain Railways of India.",
  },
  {
    category: "Travel",
    keywords: ["wildlife india", "national park india", "tiger safari", "wildlife safari"],
    answer: "India has 106 national parks. Top wildlife spots: Jim Corbett & Ranthambore (tigers), Kaziranga (one-horned rhinos), Gir Forest (Asiatic lions), Sundarbans (tigers in mangroves). Wildlife tourism is a major attraction.",
  },
  {
    category: "Travel",
    keywords: ["monsoon india", "rainy season india", "monsoon"],
    answer: "India's monsoon (June–September) transforms the landscape. While most tourists avoid this period, it's magical for Kerala's backwaters and hill stations. Kerala gets the monsoon first in June.",
  },
];
