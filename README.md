# Ecommerce Site

A modern, full-stack ecommerce application built with TypeScript, React, and TanStack technologies. This project combines a sophisticated frontend with server-side rendering capabilities to deliver a seamless shopping experience.

## 🎯 Overview

This ecommerce platform is a contemporary web application designed for high performance and scalability. It leverages cutting-edge technologies including:

- **Frontend Framework**: React 19 with TypeScript for type-safe component development
- **Routing**: TanStack Router for client-side navigation
- **State Management**: TanStack Query for data fetching and caching
- **Server Framework**: TanStack Start with Nitro for full-stack capabilities
- **UI Components**: Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS for rapid, utility-first design
- **Build Tool**: Vite for blazingly fast development and production builds

## ✨ Features

### Frontend
- **Responsive UI**: Mobile-first design with Tailwind CSS
- **Accessible Components**: Built with Radix UI for WCAG compliance
- **Rich Interactions**: Framer Motion for smooth animations and transitions
- **Form Management**: React Hook Form with Zod validation
- **Data Visualization**: Recharts for analytics and product metrics
- **Carousel Support**: Embla Carousel for product galleries
- **Toast Notifications**: Sonner for user feedback
- **Date Picking**: React Day Picker for reservations and scheduling
- **Command Palette**: CMDk for keyboard-driven navigation

### Developer Experience
- **TypeScript**: Full type safety across the entire stack
- **Code Quality**: ESLint with TypeScript and React plugin configuration
- **Code Formatting**: Prettier for consistent code style
- **Build Optimization**: Vite for instant HMR and optimized production builds
- **Type Safety**: Zod for runtime validation and type inference

## 📁 Project Structure

```
├── src/                    # Source code
├── package.json           # Project dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── components.json        # UI components registry (Radix/shadcn)
├── eslint.config.js       # ESLint rules
├── .prettierrc             # Prettier formatting config
├── .prettierignore         # Prettier ignore patterns
├── .gitignore             # Git ignore patterns
├── bunfig.toml            # Bun runtime configuration
└── package-lock.json      # npm dependency lock file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **Bun** (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/brisenwhyte/NorthBound.git
   cd Ecommerce-Site
   ```

2. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Or using Bun:
   ```bash
   bun install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Building

Create an optimized production build:

```bash
npm run build
# or
bun run build
```

Build in development mode:

```bash
npm run build:dev
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## 🛠️ Development Tools

### Code Quality

**Lint code:**
```bash
npm run lint
```

**Format code:**
```bash
npm run format
```

## 📦 Key Dependencies

### UI & Components
- **@radix-ui/react-*** (18 packages): Unstyled, accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: CSS-in-JS variant management
- **lucide-react**: Beautiful icon library
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component
- **framer-motion**: Animation library
- **sonner**: Toast notifications
- **recharts**: Composable charting library
- **react-resizable-panels**: Resizable panel layouts

### State & Data
- **@tanstack/react-query**: Data fetching and caching
- **@tanstack/react-router**: Client-side routing
- **@tanstack/react-start**: Full-stack framework
- **react-hook-form**: Performant form handling
- **zod**: TypeScript-first schema validation

### Utilities
- **date-fns**: Modern date utility library
- **tailwind-merge**: Merge Tailwind CSS classes intelligently
- **clsx**: Conditional className builder
- **input-otp**: OTP input component
- **vaul**: Drawer component
- **vite-tsconfig-paths**: TypeScript path alias support

### Development
- **Vite**: Next-generation build tool
- **TypeScript**: Typed JavaScript superset
- **ESLint**: Code quality analysis
- **Prettier**: Code formatter
- **Nitro**: Minimal server runtime

## 🎨 Styling & Theming

This project uses **Tailwind CSS v4** for styling with:
- Utility-first approach for rapid development
- Custom component definitions via CSS
- Dark mode support capabilities
- Responsive design patterns
- Custom animations via `tw-animate-css`

## 🔒 Type Safety

All code is written in **TypeScript** with strict mode enabled, ensuring:
- Compile-time type checking
- Better IDE support and autocomplete
- Fewer runtime errors
- Self-documenting code

Validation is handled via **Zod** for both runtime and schema-based type inference.

## 🌐 Full-Stack Capabilities

This application is built with **TanStack Start** and **Nitro**, providing:
- Server-side rendering (SSR)
- API routes and endpoints
- Server-side data fetching
- Optimized bundle delivery
- Cloudflare Workers support

## 📊 Performance Optimizations

- **Vite**: Instant HMR in development, optimized bundles in production
- **React 19**: Latest performance improvements and concurrent rendering
- **TanStack Query**: Intelligent caching and data synchronization
- **Tree-shaking**: Unused code elimination
- **Code splitting**: Route-based bundle splitting
- **Tailwind CSS**: Purged unused styles

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss proposed changes.

## 📝 License

This project is open source and available under the MIT License (if applicable).

## 📞 Support

For issues, questions, or suggestions, please open an [issue](https://github.com/brisenwhyte/Ecommerce-Site/issues) on GitHub.

---

**Happy coding!** 🚀
