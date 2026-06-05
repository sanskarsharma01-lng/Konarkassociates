// Centralized project data — single source of truth for Projects grid + detail pages
// Replace placeholder images and videos with real content as they become available.

export const categories = ['All', 'Residential', 'Interior', 'Elevation', 'Commercial'];

export const projects = [
  {
    id: 'modern-villa-residence',
    title: 'Modern Villa Residence',
    category: 'Residential',
    location: 'Ujjain, Madhya Pradesh',
    year: '2024',
    area: '3,200 sq.ft',
    description:
      'A stunning contemporary villa designed to blend modern architecture with functional living. This project features an open floor plan, floor-to-ceiling windows that flood the interiors with natural light, and a seamless indoor-outdoor connection. The exterior showcases clean geometric lines, a combination of stone and glass facades, and a landscaped garden with a covered patio area. Every detail — from the custom-designed entrance to the rooftop terrace — was crafted to deliver luxury, comfort, and timeless appeal.',
    thumbnail:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6981cf81d6?w=1200&q=85',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=85',
    ],
    videos: ['https://www.youtube.com/embed/dQw4w9WgXcQ'],
    reviews: [
      { name: 'Rajesh Patel', role: 'Homeowner', rating: 5, avatar: 'RP', text: 'Konark Associates exceeded all our expectations with this villa. The attention to detail in every corner — from the entrance design to the rooftop terrace — is remarkable. Our family absolutely loves living here.' },
      { name: 'Sunita Verma', role: 'Property Investor', rating: 5, avatar: 'SV', text: 'The build quality and modern design of this villa are outstanding. The team was professional throughout, delivering on time and within budget. Highly recommend their work for premium residential projects.' },
    ],
    span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
  },
  {
    id: 'luxury-living-room',
    title: 'Luxury Living Room',
    category: 'Interior',
    location: 'Indore, Madhya Pradesh',
    year: '2024',
    area: '800 sq.ft',
    description:
      'An exquisite living room transformation that redefines elegance. This interior project features a curated palette of warm neutrals accented with deep teal and brass fixtures. The centrepiece is a custom Italian marble feature wall paired with concealed ambient lighting that creates a warm, inviting atmosphere. Premium imported furniture, bespoke cabinetry, and a statement chandelier complete the space. The design seamlessly combines aesthetics with functionality, offering hidden storage solutions and smart home integration.',
    thumbnail:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85',
    ],
    videos: [],
    reviews: [
      { name: 'Priya Sharma', role: 'Interior Client', rating: 5, avatar: 'PS', text: 'The living room transformation was beyond what we imagined. The marble feature wall and ambient lighting create such a beautiful atmosphere. Guests always compliment our home now!' },
      { name: 'Deepak Agarwal', role: 'Flat Owner', rating: 5, avatar: 'DA', text: 'Excellent craftsmanship and eye for design. The team understood our vision perfectly and delivered a space that is both luxurious and practical for daily living.' },
    ],
    span: '',
  },
  {
    id: 'contemporary-elevation',
    title: 'Contemporary Elevation',
    category: 'Elevation',
    location: 'Barnagar, Madhya Pradesh',
    year: '2023',
    area: '2,800 sq.ft',
    description:
      'A bold contemporary elevation design that stands as a landmark in the neighbourhood. This project showcases a dramatic interplay of textures — exposed brick, matte-finish cladding, and expansive glass panels create a facade that is both modern and inviting. The staggered balcony design adds depth and visual interest while maximizing ventilation and natural light. Careful attention was paid to the proportions, colour contrasts, and material quality to achieve a design that ages beautifully and makes a powerful first impression.',
    thumbnail:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=85',
    ],
    videos: [],
    reviews: [
      { name: 'Mahesh Jain', role: 'Homeowner', rating: 5, avatar: 'MJ', text: 'The elevation design made our house the most eye-catching one on the street. The combination of textures and the balcony layout is truly world-class. Very happy with the result.' },
      { name: 'Kavita Dubey', role: 'Residential Client', rating: 4, avatar: 'KD', text: 'Great design sense and professional execution. The facade looks stunning even after a year. Would definitely work with Konark Associates again for our next project.' },
    ],
    span: '',
  },
  {
    id: 'corporate-office-space',
    title: 'Corporate Office Space',
    category: 'Commercial',
    location: 'Ujjain, Madhya Pradesh',
    year: '2024',
    area: '5,000 sq.ft',
    description:
      'A state-of-the-art corporate office designed for productivity and employee well-being. The space features an open-plan layout with private meeting pods, collaborative zones, and a premium reception area. Industrial-chic aesthetics blend exposed concrete ceilings with warm wood panelling and strategically placed greenery. The lighting design combines natural daylight harvesting with tunable LED systems. Every zone — from the executive cabins to the breakout areas — was designed to reflect the company\'s brand identity while fostering creativity and collaboration.',
    thumbnail:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=85',
    ],
    videos: ['https://www.youtube.com/embed/dQw4w9WgXcQ'],
    reviews: [
      { name: 'Amit Desai', role: 'Business Owner', rating: 5, avatar: 'AD', text: 'Our new office space has completely transformed how our team works. The open-plan layout with private pods is perfect. Employee satisfaction has noticeably improved since we moved in.' },
      { name: 'Neelam Gupta', role: 'Managing Director', rating: 5, avatar: 'NG', text: 'Professional, creative, and delivered on schedule. The reception area leaves a lasting impression on our clients. The smart lighting and greenery integration make it a pleasure to work here.' },
    ],
    span: '',
  },
  {
    id: 'designer-kitchen',
    title: 'Designer Kitchen',
    category: 'Interior',
    location: 'Indore, Madhya Pradesh',
    year: '2023',
    area: '350 sq.ft',
    description:
      'A premium modular kitchen designed to be the heart of the home. Featuring a sleek island counter with waterfall quartz edges, handleless soft-close cabinetry in a matte charcoal finish, and integrated smart appliances. The backsplash uses hand-selected Italian porcelain tiles in a herringbone pattern. Under-cabinet LED strips and pendant lighting over the island provide layered illumination. The layout was optimised for the cooking triangle while offering generous pantry storage and a built-in breakfast bar for casual dining.',
    thumbnail:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=85',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=85',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=85',
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=1200&q=85',
    ],
    videos: [],
    reviews: [
      { name: 'Anjali Tiwari', role: 'Homemaker', rating: 5, avatar: 'AT', text: 'The modular kitchen is a dream come true! The island counter, the soft-close cabinets, and the herringbone backsplash — everything is perfect. Cooking has become a joy in this space.' },
      { name: 'Rohit Malhotra', role: 'Home Chef Enthusiast', rating: 5, avatar: 'RM', text: 'Fantastic kitchen design that balances beauty and function. The pantry storage is incredibly well-organized, and the breakfast bar is our family\'s favourite gathering spot.' },
    ],
    span: '',
  },
  {
    id: 'elegant-bungalow',
    title: 'Elegant Bungalow',
    category: 'Residential',
    location: 'Ujjain, Madhya Pradesh',
    year: '2023',
    area: '4,500 sq.ft',
    description:
      'A sprawling bungalow that epitomises gracious living. Set on a generous plot, this project features a double-height entrance foyer, a grand staircase, and living spaces that flow effortlessly from indoors to a manicured garden with a covered sit-out. The architectural design draws from classical proportions with contemporary materials — stone-clad pillars, large French doors, and a pitched roof that adds character. Inside, five bedrooms each with en-suite bathrooms, a home theatre, and a dedicated puja room cater to the needs of a modern joint family.',
    thumbnail:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6981cf81d6?w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85',
    ],
    videos: ['https://www.youtube.com/embed/dQw4w9WgXcQ'],
    reviews: [
      { name: 'Vikram Singh', role: 'Bungalow Owner', rating: 5, avatar: 'VS', text: 'From the grand entrance to the puja room, every space in our bungalow reflects our family\'s values and lifestyle. The garden sit-out is where we spend most of our evenings. Truly a dream home.' },
      { name: 'Meera Rathore', role: 'Joint Family', rating: 5, avatar: 'MR', text: 'Building a home for a joint family is complex, but Konark Associates handled it beautifully. Five bedrooms, each with its own character, and the home theatre is our weekend highlight!' },
    ],
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 'modern-bedroom-suite',
    title: 'Modern Bedroom Suite',
    category: 'Interior',
    location: 'Barnagar, Madhya Pradesh',
    year: '2024',
    area: '500 sq.ft',
    description:
      'A serene master bedroom suite designed as a personal retreat. The design philosophy centres on calm, understated luxury — a neutral palette of warm greys and cream is elevated by rich walnut wood accents and soft, diffused lighting. The upholstered headboard wall extends into integrated side tables with wireless charging. A walk-in wardrobe with a vanity area and a spa-inspired en-suite bathroom with a freestanding tub complete the suite. Smart curtains, ambient lighting control, and a concealed entertainment unit add modern convenience without compromising the tranquil aesthetic.',
    thumbnail:
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85',
    ],
    videos: [],
    reviews: [
      { name: 'Neha Joshi', role: 'Interior Client', rating: 5, avatar: 'NJ', text: 'My bedroom has become my sanctuary. The walnut wood accents and diffused lighting create such a calming atmosphere. The walk-in wardrobe is incredibly well-designed — every inch is utilised.' },
      { name: 'Saurabh Pandey', role: 'Apartment Owner', rating: 4, avatar: 'SP', text: 'The smart curtains and concealed entertainment unit are brilliant touches. The design feels like a luxury hotel suite but with the warmth of home. Very impressed with the quality.' },
    ],
    span: '',
  },
  {
    id: 'commercial-complex',
    title: 'Commercial Complex',
    category: 'Commercial',
    location: 'Ujjain, Madhya Pradesh',
    year: '2022',
    area: '12,000 sq.ft',
    description:
      'A landmark commercial complex that combines striking architecture with practical commercial design. The five-storey structure features a modern glass-and-steel facade, a grand atrium entrance, and flexible floor plates that accommodate retail showrooms on the ground floor and office suites on upper levels. The building includes two high-speed elevators, covered parking, a generator backup system, and centralised HVAC. Sustainable design principles — including rainwater harvesting, solar-ready rooftop, and energy-efficient glazing — were integrated from the ground up.',
    thumbnail:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85',
    ],
    videos: [],
    reviews: [
      { name: 'Suresh Agrawal', role: 'Property Developer', rating: 5, avatar: 'SA', text: 'This commercial complex is a landmark project for our portfolio. The design, build quality, and attention to sustainability standards are top-notch. Occupancy filled up within months of completion.' },
      { name: 'Pooja Mehta', role: 'Retail Tenant', rating: 5, avatar: 'PM', text: 'Our showroom on the ground floor gets excellent footfall thanks to the grand atrium entrance. The building management is smooth with reliable elevators and power backup. A well-built property.' },
    ],
    span: '',
  },
];
