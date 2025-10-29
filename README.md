# Yantra Motors - Tesla-Inspired Website

A stunning, modern, responsive website inspired by Tesla's homepage, showcasing a futuristic electric vehicle company.

## 🚀 Features

- **Modern Design**: Clean, minimalist Tesla-inspired aesthetic with dark theme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Glassmorphism Effects**: Beautiful blurred glass effects on navbar and cards
- **Performance**: Image lazy-loading and optimized rendering
- **Smooth Scrolling**: Enhanced navigation experience

## 🛠 Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd tesla-web-page
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and visit `http://localhost:5173`

## 🏗 Project Structure

\`\`\`
src/
├── components/
│   ├── Navbar.jsx      # Sticky navigation with glassmorphism
│   ├── Hero.jsx         # Full-screen hero section
│   ├── Models.jsx       # Car models showcase
│   ├── Services.jsx     # Services grid
│   ├── About.jsx        # About section with stats
│   └── Footer.jsx       # Footer with links and social
├── App.jsx              # Main app component
├── index.css            # Global styles with Tailwind
└── main.jsx             # Entry point
\`\`\`

## 🎨 Design Highlights

- **Color Scheme**: Dark theme (#0d0d0d) with white text and gradients
- **Typography**: Inter font for modern, clean look
- **Animations**: Fade-in, slide-up, and parallax effects
- **Responsive**: Mobile-first approach with breakpoints
- **Effects**: Hover states, transitions, and micro-interactions

## 📱 Sections

1. **Navbar**: Sticky navigation with glassmorphism effect
2. **Hero**: Full-screen section with call-to-action buttons
3. **Models**: Grid layout showcasing electric vehicles
4. **Services**: Feature cards with icons and descriptions
5. **About**: Company mission with statistics
6. **Footer**: Links, social media, and copyright

## 🚀 Build for Production

\`\`\`bash
npm run build
\`\`\`

The build artifacts will be stored in the `dist/` directory.

## 📝 Customization

- Replace placeholder images in the components with actual assets
- Modify colors in `tailwind.config.js`
- Update content in component files
- Add custom animations by extending Framer Motion variants

## 🎯 Future Enhancements

- Add contact form functionality
- Implement test drive booking modal
- Add more vehicle models
- Create detailed model pages
- Add blog/news section
- Implement dark/light theme toggle

## 📄 License

This project is open source and available under the MIT License.
