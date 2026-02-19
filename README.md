# Clinic CRM - Mobile-First Patient Management

A mobile-first clinic CRM webapp for managing patients, prescriptions, and billing.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Database**: Neon (Serverless PostgreSQL)
- **ORM**: Drizzle ORM
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Features
- Patient Management (add, view, edit patients)
- Prescription Management
- Billing & Invoicing
- Mobile-first responsive design with bottom navigation

## Setup

1. **Create Neon Database**
   - Go to [neon.tech](https://neon.tech) and create a free account
   - Create a new project and copy the connection string

2. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your Neon connection string
   ```

3. **Run Database Migrations**
   ```bash
   npx drizzle-kit push
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import the repository
3. Add the `DATABASE_URL` environment variable with your Neon connection string
4. Deploy!

## Project Structure
```
src/
├── app/           # Next.js app router pages
│   ├── patients/  # Patient management
│   ├── prescriptions/  # Prescription management
│   ├── billing/   # Billing & invoicing
│   └── page.tsx   # Dashboard
├── components/    # Reusable UI components
├── db/           # Database schema and connection
└── lib/          # Utility functions
```
