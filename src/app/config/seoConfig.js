// SEO Configuration
export const SEO_CONFIG = {
    baseUrl: 'https://buildwithahsan-liard.vercel.app/', // Replace with your actual domain
    siteName: 'Ahsan Arsahd Portfolio',

    // Home Page SEO
    home: {
        title: 'Ahsan Arsahd - Full Stack Developer & Portfolio',
        description: 'Welcome to Ahsan Arsahd\'s professional portfolio. Full Stack Developer specializing in web development, UI/UX design, and modern technologies.',
        keywords: 'Ahsan Arsahd, full stack developer, web developer, portfolio, UI/UX design, JavaScript, React, Next.js',
        ogImage: 'https://buildwithahsan-liard.vercel.app//og-image.jpg',
    },

    // About Section
    about: {
        title: 'About Ahsan Arsahd - Full Stack Developer',
        description: 'Learn about Ahsan Arsahd\'s background, experience, and journey as a full stack developer.',
        keywords: 'about, experience, developer, full stack',
    },

    // Services Section
    services: {
        title: 'Services - Ahsan Arsahd',
        description: 'Web development services including frontend development, backend development, UI/UX design, and consulting.',
        keywords: 'web development, services, frontend, backend, design',
    },

    // Projects Section
    projects: {
        title: 'Projects - Ahsan Arsahd',
        description: 'Portfolio projects showcasing web development expertise, design skills, and technical abilities.',
        keywords: 'projects, portfolio, web development, case studies',
    },

    // Contact
    contact: {
        title: 'Contact Ahsan Arsahd',
        description: 'Get in touch with Ahsan Arsahd. Available for freelance projects, collaborations, and inquiries.',
        keywords: 'contact, hire, collaboration, freelance',
    },
};

// Social Media Links
export const SOCIAL_LINKS = {
    linkedin: 'https://linkedin.com/in/ahsanarsahd',
    github: 'https://github.com/ahsanarsahd',
    twitter: 'https://twitter.com/ahsanarsahd',
    email: 'contact@ahsanarsahd.com',
};

// JSON-LD Schema for Person
export const getPersonSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ahsan Arsahd',
    url: 'https://buildwithahsan-liard.vercel.app/',
    jobTitle: 'Full Stack Developer',
    description: 'Professional Full Stack Developer specializing in web development and modern technologies',
    sameAs: [
        'https://linkedin.com/in/ahsanarsahd',
        'https://github.com/ahsanarsahd',
        'https://twitter.com/ahsanarsahd',
    ],
    knowsAbout: [
        'Full Stack Development',
        'Web Development',
        'UI/UX Design',
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'MongoDB',
        'PostgreSQL',
    ],
});

// JSON-LD Schema for WebSite
export const getWebSiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ahsan Arsahd Portfolio',
    url: 'https://buildwithahsan-liard.vercel.app/',
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://buildwithahsan-liard.vercel.app//search?q={search_term_string}',
        },
        query_input: 'required name=search_term_string',
    },
});
