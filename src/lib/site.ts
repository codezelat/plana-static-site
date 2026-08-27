export const siteConfig = {
  name: "Plan A",
  legalName: "Plan A Events Agency",
  url: "https://plana.lk",
  email: "info@plana.lk",
  phone: "+94 11 485 8899",
  phoneHref: "+94114858899",
  address: "Level 12, Parkland Building, 33 Park Street, Colombo 00200, Sri Lanka",
  addressParts: {
    streetAddress: "Level 12, Parkland Building, 33 Park Street",
    addressLocality: "Colombo",
    postalCode: "00200",
    addressCountry: "LK",
  },
  parentName: "Codezela Technologies",
  parentUrl: "https://codezela.com",
  ogImage: "/images/plan-a/plan-a-og.jpg",
  ogImageAlt: "Plan A event management in Colombo, Sri Lanka",
  description:
    "Event management in Sri Lanka for corporate events, conferences, MICE programmes, convocations, awards, weddings and brand activations.",
} as const;

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  includes: string[];
  eventTypes: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "corporate-events",
    name: "Corporate event management",
    shortName: "Corporate Events",
    title: "Corporate Event Management in Sri Lanka",
    description:
      "Plan corporate events in Colombo and across Sri Lanka with one team for strategy, venue coordination, production, guest experience and event-day delivery.",
    intro:
      "From leadership meetings and dealer conferences to gala dinners and product reveals, we shape the event around your business objective and manage the details that make it work.",
    image: "/images/plan-a/business-awards-presentation-colombo.webp",
    imageAlt: "Business awards presentation at a corporate event in Colombo",
    includes: [
      "Event strategy and creative direction",
      "Venue search, site visits and layout planning",
      "Run sheets, supplier schedules and rehearsals",
      "Stage, sound, lighting and screen coordination",
      "Registration, guest flow and VIP handling",
      "On-site show calling and event direction",
    ],
    eventTypes: [
      "AGMs and town halls",
      "Dealer meetings and sales conferences",
      "Product launches",
      "Corporate gala dinners",
      "Awards nights",
      "Team events and executive retreats",
    ],
    faqs: [
      {
        question: "Can Plan A manage both planning and production?",
        answer:
          "Yes. We can coordinate the event plan, venue, suppliers, staging, AV, guest experience and on-site delivery under one working schedule.",
      },
      {
        question: "Do you work with an existing corporate procurement process?",
        answer:
          "Yes. We can work within your approval stages, brand standards, supplier requirements and reporting structure from the first brief.",
      },
      {
        question: "Can you manage a multi-location event?",
        answer:
          "Yes. Multi-venue programmes, roadshows and islandwide activations are planned around location logistics, consistent production standards and local supplier coordination.",
      },
    ],
  },
  {
    slug: "conferences-mice",
    name: "Conferences and MICE",
    shortName: "Conferences & MICE",
    title: "Conference and MICE Event Management in Sri Lanka",
    description:
      "Conference organisers and MICE event planners in Sri Lanka for meetings, incentives, conferences, exhibitions and international delegate programmes.",
    intro:
      "We coordinate business events that need more than a stage: delegate journeys, venue schedules, speaker movements, technical sessions, hospitality and destination logistics.",
    image: "/images/plan-a/corporate-conference-management.webp",
    imageAlt: "Corporate conference stage and audience",
    includes: [
      "Venue and accommodation coordination",
      "Delegate registration and communications",
      "Speaker, session and green-room management",
      "Conference staging, AV and presentation control",
      "Airport transfers and local transport planning",
      "Gala, cultural and incentive programme coordination",
    ],
    eventTypes: [
      "Business conferences",
      "Industry summits",
      "International delegations",
      "Incentive programmes",
      "Exhibitions and trade events",
      "Hybrid meetings and seminars",
    ],
    faqs: [
      {
        question: "What does MICE mean?",
        answer:
          "MICE covers meetings, incentives, conferences and exhibitions. These events often combine business sessions with travel, accommodation, transport, hospitality and destination experiences.",
      },
      {
        question: "Can you support overseas organisers?",
        answer:
          "Yes. Plan A can act as a Sri Lankan coordination partner for venue planning, local suppliers, delegate logistics, production and on-site delivery.",
      },
      {
        question: "Do you manage conference registration?",
        answer:
          "Registration scope can include attendee data collection, confirmations, badge preparation, arrival desks, session access and on-site guest support.",
      },
    ],
  },
  {
    slug: "convocations-awards",
    name: "Convocations and award ceremonies",
    shortName: "Convocations & Awards",
    title: "Convocation and Awards Ceremony Management in Sri Lanka",
    description:
      "Professional convocation, graduation and awards ceremony planning in Sri Lanka, including ceremonial flow, staging, guests, VIPs and live production.",
    intro:
      "Ceremonial events depend on timing, protocol and a clear audience experience. We coordinate every transition, from arrivals and processions to presentations and the final stage cue.",
    image: "/images/plan-a/convocation-stage-production-colombo.webp",
    imageAlt: "Convocation stage production with academic procession in Colombo",
    includes: [
      "Ceremony structure and master run sheet",
      "Graduate, nominee and presenter flow planning",
      "Processions, protocol and VIP coordination",
      "Stage, scenic, lighting and screen direction",
      "Photography and broadcast coordination",
      "Rehearsals, backstage management and show calling",
    ],
    eventTypes: [
      "University convocations",
      "Graduation ceremonies",
      "Business awards",
      "Employee recognition events",
      "Academic honours ceremonies",
      "Industry and professional awards",
    ],
    faqs: [
      {
        question: "How do you manage a large convocation?",
        answer:
          "We divide the event into guest, graduate, academic, VIP, backstage and production flows, then connect them through one timed run sheet and a full rehearsal plan.",
      },
      {
        question: "Can you coordinate presenters and award recipients?",
        answer:
          "Yes. We plan holding areas, sequence lists, stage access, handovers, photography positions and contingency cues for presenters and recipients.",
      },
      {
        question: "Do you manage hybrid or live-streamed ceremonies?",
        answer:
          "Broadcast and live-stream production can be coordinated as part of the event, including camera positions, presentation feeds, stage timing and remote audience requirements.",
      },
    ],
  },
  {
    slug: "weddings",
    name: "Wedding planning",
    shortName: "Weddings",
    title: "Wedding Planners in Sri Lanka",
    description:
      "Wedding planning in Colombo and destination wedding coordination across Sri Lanka for venues, suppliers, ceremonies, guest logistics and event-day direction.",
    intro:
      "We help couples turn a long list of decisions into one coherent celebration, with planning support for Sri Lankan weddings, multi-day celebrations and destination events.",
    image: "/images/plan-a/wedding-planning-sri-lanka.webp",
    imageAlt: "Elegant wedding ceremony setup for wedding planning in Sri Lanka",
    includes: [
      "Planning timeline and budget framework",
      "Venue search and supplier coordination",
      "Creative direction, decor and guest experience",
      "Ceremony and reception schedule",
      "Guest travel and destination logistics",
      "Wedding-day coordination and supplier management",
    ],
    eventTypes: [
      "Sri Lankan weddings",
      "Destination weddings",
      "Homecomings and receptions",
      "Multi-day celebrations",
      "Intimate weddings",
      "Private celebrations",
    ],
    faqs: [
      {
        question: "Do you offer full and partial wedding planning?",
        answer:
          "The scope can be shaped around your needs, from complete planning to venue and supplier coordination or wedding-day management.",
      },
      {
        question: "Can you plan a wedding while we live overseas?",
        answer:
          "Yes. Remote planning can be organised through scheduled reviews, clear approvals, shared timelines and coordinated site visits when you are in Sri Lanka.",
      },
      {
        question: "Which areas do you cover for destination weddings?",
        answer:
          "We can plan across Sri Lanka, including Colombo, Negombo, Bentota, Galle, the south coast, Kandy and the hill country, subject to venue and supplier availability.",
      },
    ],
  },
  {
    slug: "brand-activations",
    name: "Product launches and brand activations",
    shortName: "Brand Activations",
    title: "Product Launches and Brand Activations in Sri Lanka",
    description:
      "Plan product launches, brand activations, roadshows and promotional events across Sri Lanka with creative, production and on-ground coordination.",
    intro:
      "We translate the campaign idea into a physical audience experience, aligning the venue, production, staffing, guest journey and event content with the brand objective.",
    image: "/images/plan-a/awards-ceremony-opening-colombo.webp",
    imageAlt: "Opening moment at a branded corporate event in Colombo",
    includes: [
      "Activation concept and audience journey",
      "Venue, mall and outdoor site coordination",
      "Stage, display and branded environment planning",
      "Promoter, host and entertainment coordination",
      "Roadshow logistics and local supplier management",
      "Event capture and post-event handover",
    ],
    eventTypes: [
      "Product launches",
      "Retail and mall activations",
      "Dealer roadshows",
      "Press and media events",
      "Sampling programmes",
      "Brand experiences",
    ],
    faqs: [
      {
        question: "Can you take a campaign idea through to event delivery?",
        answer:
          "Yes. We can develop the event experience around an approved campaign direction and coordinate the physical production, suppliers, staffing and event-day delivery.",
      },
      {
        question: "Do you manage islandwide activations?",
        answer:
          "Yes. The route, site requirements, production kit, staffing, transport and local coordination can be planned as one repeatable activation system.",
      },
      {
        question: "Can you coordinate media and content capture?",
        answer:
          "Photography, video, press areas and social content capture can be built into the site layout and event schedule.",
      },
    ],
  },
  {
    slug: "event-production",
    name: "Stage, AV and event production",
    shortName: "Event Production",
    title: "Event Production, Stage and AV Coordination in Sri Lanka",
    description:
      "Event production in Sri Lanka for staging, LED screens, sound, lighting, presentation control, rehearsals and live event direction.",
    intro:
      "Production is where the creative plan meets technical reality. We coordinate the right specialists, translate the show into cues and keep every team working from the same production schedule.",
    image: "/images/plan-a/convocation-event-management-sri-lanka.webp",
    imageAlt: "Large convocation stage with lighting and live screen production",
    includes: [
      "Technical brief and venue production survey",
      "Stage, scenic and screen planning",
      "Sound, lighting and presentation coordination",
      "Power, access and installation scheduling",
      "Speaker checks and full technical rehearsals",
      "Backstage communication and live show calling",
    ],
    eventTypes: [
      "Conference production",
      "Ceremonial staging",
      "Awards shows",
      "Product reveals",
      "Concert and entertainment production",
      "Hybrid and live-streamed events",
    ],
    faqs: [
      {
        question: "Does Plan A own production equipment?",
        answer:
          "We build the production solution around the event and coordinate suitable technical partners and equipment based on the venue, audience and show requirements.",
      },
      {
        question: "What happens during a technical rehearsal?",
        answer:
          "We check presentation content, microphones, lighting looks, screen feeds, stage movement, speaker cues, entertainment transitions and contingency procedures.",
      },
      {
        question: "Can you work with our preferred AV supplier?",
        answer:
          "Yes. We can integrate a client-appointed supplier into the production schedule, briefing process, venue access plan and rehearsal structure.",
      },
    ],
  },
];

export const workImages = [
  {
    src: "/images/plan-a/convocation-stage-production-colombo.webp",
    alt: "Academic leaders on stage during a convocation ceremony in Colombo",
    label: "Convocation production",
  },
  {
    src: "/images/plan-a/business-awards-presentation-colombo.webp",
    alt: "Business award presentation on a large LED stage in Colombo",
    label: "Awards presentation",
  },
  {
    src: "/images/plan-a/cultural-welcome-event-sri-lanka.webp",
    alt: "Traditional Sri Lankan drummers welcoming international event guests",
    label: "Cultural welcome",
  },
  {
    src: "/images/plan-a/awards-event-detail-sri-lanka.webp",
    alt: "Rows of custom trophies prepared for a business awards ceremony",
    label: "Awards detail",
  },
  {
    src: "/images/plan-a/awards-night-guest-experience.webp",
    alt: "Award recipients at a branded event photography wall",
    label: "Guest experience",
  },
  {
    src: "/images/plan-a/awards-ceremony-opening-colombo.webp",
    alt: "Traditional oil lamp lighting at a formal awards event in Colombo",
    label: "Opening ceremony",
  },
];

export const primaryFaqs = [
  {
    question: "What does an event management company handle?",
    answer:
      "An event management company can coordinate the strategy, venue, budget framework, suppliers, production, guest journey, schedules, rehearsals, logistics and on-site delivery. The exact scope should match the event and your internal team.",
  },
  {
    question: "Do you manage events outside Colombo?",
    answer:
      "Yes. Plan A coordinates events across Sri Lanka, including Galle, Kandy, Negombo, Bentota, the south coast and other locations based on the venue, production and supplier requirements.",
  },
  {
    question: "Can you manage international delegates and destination events?",
    answer:
      "Yes. Destination support can cover venue planning, accommodation, airport transfers, local transport, delegate communications, cultural programmes and on-site coordination.",
  },
  {
    question: "How early should we start planning?",
    answer:
      "Large conferences, convocations, weddings and destination programmes benefit from an early start, especially when venue choice and guest travel matter. Share your date even if the brief is still developing, and we can identify the first decisions.",
  },
];

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
