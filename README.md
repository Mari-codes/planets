# The Planets

> **Did you know?** There is a **1 in 2000 chance** of a shooting star crossing your screen. Will you stay long enough to make a wish? ;)

## Read this in other languages

- [Português (Brasil)](./docs/README.pt-BR.md)

**The Planets** is a responsive web application built with **React + Vite**, **TypeScript**, and **Sass**. It provides an immersive journey through our solar system, featuring a clean 2D aesthetic for planet data overlaid on a dynamic, high-performance **Canvas background**.

Check out the project running here: [The Planets on Vercel](https://mari-planets.vercel.app/earth)

---

## Features

- **Dynamic Planet Data**: Detailed facts about 8 planets including overview, internal structure, and surface geology.
- **Interactive Transitions**: Smooth animations using CSS Keyframes for content switching and "soft reveals".
- **Dynamic Routing**: Implementation of `PlanetRouteWrapper` with `useParams` for efficient, data-driven rendering.
- **Parallax Starfield**: A real-time **HTML5 Canvas** background featuring stars with different speeds to create depth and a rare shooting star system (0.001 probability).
- **Responsive Design**: Fully optimized for mobile (with a custom slide-down hamburger menu), tablet, and desktop.
- **Themed UI**: Planet-specific color palettes generated dynamically via Sass maps and loops.

---

## Tech Stack

| Technology          | Purpose                                                 |
| ------------------- | ------------------------------------------------------- |
| **React + Vite**    | App setup and UI                                        |
| **TypeScript**      | Logic and type safety                                   |
| **Sass (SCSS)**     | Mixins, `@each` loops, tokens, and modular architecture |
| **CSS Modules**     | Scoped styling and BEM methodology                      |
| **BEM Methodology** | Organized and maintainable CSS structure                |
| **HTML5 Canvas**    | Dynamic starfield with Parallax effect                  |
| **Prettier**        | Code quality and formatting                             |

---

## Technical Highlights

### Parallax & Particle System

The background is rendered using a custom particle system on a Canvas element. To achieve a sense of vastness, I implemented a **Parallax effect** where stars move at different speeds based on their size, creating a faux-3D depth while maintaining high performance.

### Sass Automation & BEM

Instead of hardcoding colors for each planet, I used a Sass `@each` map. This allows the entire UI (bullets, buttons, and borders) to update its theme automatically based on the planet's data, following the BEM methodology for scalable and maintainable CSS.

---

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mari-codes/planets.git
   ```
2. Navigate to the project folder:
   ```bash
   cd planets
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Running the Project

```sh
npm run dev
```

or

```bash
yarn dev
```

## Screenshots

### Desktop - Earth (Overview)

![Desktop Preview](./src/assets/screenshots/desktop-preview.png)

### Surface Geology & Responsive Views

|               Tablet - Internal Structure               |              Mobile - Navigation Menu               |                    Geology Detail                     |
| :-----------------------------------------------------: | :-------------------------------------------------: | :---------------------------------------------------: |
| ![Tablet](./src/assets/screenshots/tablet-internal.png) | ![Mobile](./src/assets/screenshots/mobile-menu.png) | ![Geology](./src/assets/screenshots/geology-view.png) |
