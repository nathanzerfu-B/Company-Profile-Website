### GET /home

Returns data for the Home page.

Status: 200 OK

```json
{
  "company": {
    "name": "DevForge",
    "tagline": "Architecting the Digital Frontier",
    "ctaButtons": [
      { "label": "Start a Project", "link": "/contact" },
      { "label": "View Our Work", "link": "/portfolio" }
    ]
  },
  "capabilities": [
    { "title": "Web Development", "description": "High-performance, accessible, and responsive web applications built with modern frameworks.", "icon": "language", "sortOrder": 1 }
  ],
  "features": [
    { "title": "Fast Delivery", "description": "Agile methodologies ensuring rapid deployment without compromising quality.", "icon": "speed", "sortOrder": 1 }
  ],
  "technologies": ["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Docker", "Git", "Linux"],
  "featuredProjects": [
    { "title": "FinTech Dashboard", "category": "websites", "status": "deployed" }
  ],
  "testimonials": [
    { "clientName": "Seyfe", "content": "The dictator transformed our systems." }
  ]
}
```

### GET /about

Returns data for the About page.

Status: 200 OK

```json
{
  "ourStory": {
    "name": "DevForge",
    "story": "Founded in 2026, DevForge started as a small team by The Dictator N...",
    "mission": "Make Money with software.",
    "vision": "Be Africa's most trusted software partner."
  },
  "coreValues": [
    { "title": "Quality", "description": "We deliver high-quality software solutions that meet and exceed client expectations." }
  ],
  "teamMembers": [
    { "name": "DICTATOR Nat", "role": "CEO & Founder", "sortOrder": 1 }
  ],
  "developmentProcess": [
    { "title": "Discovery", "description": "Understanding your business needs, target audience, and project goals to ensure alignment from day one.", "sortOrder": 1 }
  ],
  "technologies": ["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Docker", "Git", "Linux"]
}
```

### GET /services

Returns data for the Services page.

Status: 200 OK

```json
{
  "services": [
    { "title": "Website Development", "icon": "language", "description": "Full-stack web solutions utilizing modern frameworks to deliver highly responsive, accessible, and performant user experiences.", "sortOrder": 1 }
  ],
  "howWeWork": [
    { "title": "Discovery", "description": "We dive deep into your requirements, target audience, and business goals.", "sortOrder": 1 }
  ],
  "faq": [
    { "title": "What is a typical project timeline?", "description": "Timelines vary depending on project complexity.", "sortOrder": 1 }
  ]
}
```

### GET /portfolio

Returns data for the Portfolio page.

Status: 200 OK

```json
{
  "projects": [
    {
      "title": "OmniCore Enterprise Suite",
      "category": "ERP",
      "status": "deployed",
      "description": "A comprehensive resource planning solution streamlining operations across 15+ global manufacturing facilities with real-time data synchronization.",
      "techStack": ["React", "Node.js", "PostgreSQL", "Docker"],
      "clientName": "Fincorp"
    }
  ]
}
```

### POST /contact

Submits a message from the contact form.

Status: 201 Created

Request:

```json
{
  "name": "Yonas A.",
  "email": "yonas@example.com",
  "message": "I need a website."
}
```

Response:

```json
{
  "message": "Message received.",
  "contactMessageId": "msg-12345"
}
```
