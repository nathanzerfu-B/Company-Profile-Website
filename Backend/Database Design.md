# Database Design

## Entities
### Company

| Field | Notes |
|-------|-------|
| id | Primary Key |
| name | Company name |
| tagline | Short brand tagline |
| email | Contact email |
| phone | Contact phone |
| address | Physical address |

### Service

| Field | Notes |
|-------|-------|
| id | Primary Key |
| title | Service name |
| description | Short description |
| icon | Icon identifier |
| features | List of features |
| technologies | List of technologies |
| sortOrder | Display order |

### Project

| Field | Notes |
|-------|-------|
| id | Primary Key |
| title | Project name |
| description | Project description |
| category | Filter category |
| status | deployed or In Development |
| techStack | Technologies used |
| clientName | Client name |

### TeamMember

| Field | Notes |
|-------|-------|
| id | Primary Key |
| name | Full name |
| role | Job title |
| img | Image link |
| sortOrder | Display order |

### Testimonial

| Field | Notes |
|-------|-------|
| id | Primary Key |
| clientName | Client name |
| content | Testimonial text |

### ContactMessage

| Field | Notes |
|-------|-------|
| id | Primary Key |
| name | Sender name |
| email | Sender email |
| phone | Sender phone |
| message | Message body |
| createdAt | Date received |

---

## Relationships

```
Company
 |
 |-- Services
 |
 |-- Projects
 |
 |-- Team Members
 |
 |-- Testimonials

```