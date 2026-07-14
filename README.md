# Essence - Luxury Streetwear E-Commerce Platform

## 🎨 Premium Fashion Redefined

Essence is a world-class luxury streetwear e-commerce website combining premium aesthetics with sustainable fashion. Built for the modern, design-conscious consumer.

## ✨ Features

- **Premium Design**: Scandinavian & Japanese minimalism inspired
- **Responsive**: Mobile-first, fully responsive design
- **Performance**: Optimized images, fast loading times
- **Sustainable**: Organic materials & ethical production focus
- **Shopping Features**:
  - Product browsing & filtering
  - Wishlist functionality
  - Shopping cart
  - Smooth animations
  - Dark mode support

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State**: Zustand
- **Icons**: Lucide React
- **Payment**: Stripe-ready

## 📋 Requirements

- Node.js 18+
- npm or yarn

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_key_here
STRIPE_SECRET_KEY=your_key_here
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Next.js pages
├── styles/           # Global CSS
├── lib/              # Utilities & constants
├── store/            # Zustand state management
├── types/            # TypeScript types
└── hooks/            # Custom React hooks
```

## 🎯 Pages

- `/` - Homepage with hero & collections
- `/shop` - Product browsing
- `/about` - Brand philosophy
- `/products/[slug]` - Product detail (coming soon)
- `/cart` - Shopping cart (coming soon)
- `/checkout` - Checkout flow (coming soon)

## 🌍 Color Palette

- **Primary**: #F8F6F2 (Cream)
- **Secondary**: #1A1A1A (Deep Black)
- **Accent**: #6E7F5D (Forest Sage)
- **Neutrals**: #ECE8DF, #D9D5CC, #B8B1A6

## 📚 Components

- `Button` - CTA button with variants
- `ProductCard` - Product display card
- `Hero` - Full-screen hero section
- `Navigation` - Header with mobile menu
- `Footer` - Footer with links
- `CollectionGrid` - Featured collections
- `Newsletter` - Email subscription
- `SustainabilitySection` - Sustainability features

## 🔧 Configuration

### Tailwind CSS
Custom color palette and spacing configured in `tailwind.config.ts`

### Next.js
Image optimization and security headers in `next.config.js`

### TypeScript
Strict type checking enabled in `tsconfig.json`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t luxury-streetwear .
docker run -p 3000:3000 luxury-streetwear
```

## 📖 Next Steps

- [ ] Connect to product database
- [ ] Implement Stripe checkout
- [ ] Add user authentication
- [ ] Create admin dashboard
- [ ] Integrate CMS for blog
- [ ] Set up analytics
- [ ] Add image optimization
- [ ] Performance monitoring

## 📝 License

MIT License - See LICENSE file for details

## 💬 Support

For questions or issues, please open a GitHub issue.

---

**Made with ❤️ for fashion lovers worldwide**
