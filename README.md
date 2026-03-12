# Showers of Blessing Outreach Ministry (SoBOM) Website

A modern, responsive website for Showers of Blessing Outreach Ministry (SoBOM), built with Next.js, TypeScript, and Tailwind CSS.

## About SoBOM

Showers of Blessing Outreach Ministry (SoBOM) is a non-denominational ministry bringing together the youth of this age through the hearing of the word, red hot prayer and demonstration of the power of God. It doesn't matter your denomination because we are not a stationed church, we move out spreading the word of God, so you are still welcome.

## Features

- **Responsive Design**: Optimized for all devices
- **Admin Panel**: Content management system for administrators
- **Event Management**: Calendar and event listings
- **Sermon Archive**: Audio sermons and archives
- **Prayer Requests**: Community prayer submission
- **Testimonies**: Share and view community testimonies
- **Newsletter**: Email subscription system
- **Contact Forms**: Multiple contact and connection forms

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sobom-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up the database:
```bash
npx prisma migrate dev
npx prisma db seed
```

4. Create admin user:
```bash
node scripts/create-admin.js
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
sobom-website/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin panel pages
│   ├── api/               # API routes
│   ├── (public pages)/    # Public website pages
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── data/                  # Static data files
├── lib/                   # Utility libraries
├── prisma/                # Database schema and migrations
├── public/                # Static assets
├── scripts/               # Utility scripts
└── types/                 # TypeScript type definitions
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Database Management

- `npx prisma studio` - Open Prisma Studio
- `npx prisma migrate dev` - Create and apply migrations
- `npx prisma db push` - Push schema changes (development only)

## Git Workflow

This project follows a structured Git workflow to ensure code quality and smooth collaboration.

### Branching Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Emergency fixes for production

### Workflow Steps

1. **Start a new feature/bugfix:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make changes and commit:**
   ```bash
   # Make your changes
   git add .
   git commit -m "feat: add new feature description"
   ```

3. **Push and create pull request:**
   ```bash
   git push origin feature/your-feature-name
   # Create PR from feature branch to develop
   ```

4. **Code review and merge:**
   - PR is reviewed and approved
   - Merge to develop branch
   - Delete feature branch

5. **Release to production:**
   ```bash
   git checkout main
   git pull origin main
   git merge develop
   git push origin main
   ```

### Commit Message Convention

Follow conventional commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Testing
- `chore:` - Maintenance

Example: `feat: add user authentication system`

### Pull Request Guidelines

- Provide clear description of changes
- Reference related issues
- Ensure all tests pass
- Code is reviewed by at least one team member
- Squash commits when merging

## Deployment

The application is configured for automatic deployment on Vercel:

- Push to `main` branch triggers production deployment
- Environment variables must be configured in Vercel dashboard
- Database migrations run automatically on deployment

## Environment Variables

Create a `.env.local` file with:

```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL="file:./dev.db"
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Showers of Blessing Outreach Ministry.

## Support

For technical support or questions, please contact the development team.
