# FlooringAI Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.6.1-FF5D01?logo=astro)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive website for FlooringAI, providing AI-powered automation solutions for flooring installation businesses.

## 🚀 Features

- **Responsive Design**: Optimized for all devices
- **Dark/Light Mode**: Built-in theme support
- **Modern Stack**: Built with Astro and Tailwind CSS
- **Performance**: Fast loading and optimized assets
- **Contact Form**: Client-side form with validation

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Vite](https://vitejs.dev/) - Build tool

## 📦 Project Structure

```
flooring-ai/
├── public/               # Static assets
│   ├── images/           # Image assets
│   └── favicon.svg       # Favicon
├── src/
│   ├── assets/           # Theme assets
│   ├── components/       # Reusable components
│   │   ├── ui/           # UI components
│   │   ├── ContactForm.astro
│   │   └── SEO.astro
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   │   ├── index.astro   # Homepage
│   │   ├── services.astro
│   │   └── contact.astro
│   └── styles/           # Global styles
├── .gitignore
├── astro.config.mjs      # Astro configuration
├── package.json
├── tailwind.config.mjs   # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 7.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ndryer/flooring-ai.git
   cd flooring-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## 📝 Environment Variables

Create a `.env` file in the root directory if needed:

```env
# Example:
# PUBLIC_API_URL=https://api.example.com
```

## 🧪 Testing

To be implemented. Consider adding:
- Unit tests with Vitest
- End-to-end tests with Playwright
- Component tests with Testing Library

## 🛡️ Security

- [ ] Implement form submission endpoint
- [ ] Add rate limiting
- [ ] Set up CSP headers
- [ ] Add reCAPTCHA for forms

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For inquiries, please contact [Your Name] at [your.email@example.com](mailto:your.email@example.com)

---

<div align="center">
  Made with ❤️ using <a href="https://astro.build/">Astro</a> + <a href="https://tailwindcss.com/">Tailwind CSS</a>
</div>
