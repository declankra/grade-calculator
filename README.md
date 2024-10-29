# Grade Calculator Tool

A modern, minimalist, and user-friendly grade calculator web application for college and high school students. Easily calculate your required final exam score, average grades, and GPA with a clean and intuitive interface.

[Visit the Website](https://your-website-url.com)

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Component Library**: [Shadcn UI](https://ui.shadcn.com/) (if applicable)
- **Deployment**: [Vercel](https://vercel.com/)
- **Version Control**: [GitHub](https://github.com/)

## Project Structure
    project-root/
    ├── package.json
    ├── tsconfig.json
    ├── next.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── .gitignore
    ├── .env.local
    ├── README.md
    ├── public/
    │   └── favicon.ico
    └── src/
        ├── pages/
        │   ├── _app.tsx
        │   ├── index.tsx
        │   └── _document.tsx
        │  
        ├── components/
        │   └── Calculator.tsx
        ├── styles/
        │   └── globals.css
 

### File Descriptions

- **package.json**: Contains project metadata and dependencies.
- **tsconfig.json**: TypeScript configuration file.
- **next.config.js**: Next.js configuration file.
- **tailwind.config.js**: Tailwind CSS configuration file, including custom themes.
- **postcss.config.js**: PostCSS configuration file.
- **public/**: Directory for static assets like favicon.
- **src/**: Main application source code.
  - **pages/**: Contains Next.js page components.
    - **\_app.tsx**: Custom App component for initializing pages with global styles.
    - **\_document.tsx**: Custom Document component for augmenting the application's `<html>` and `<body>` tags.
    - **index.tsx**: Main entry point of the application.
  - **components/**: Contains reusable React components.
    - **Calculator.tsx**: Main calculator component handling the calculation logic.
  - **styles/**: Contains global and component-specific styles.
    - **globals.css**: Global CSS styles including Tailwind directives and custom styles.

## Roadmap

**Features - add the other ‘core’ components (calculators) 1 by 1**

- **Single Class Grade Calculator:** Calculating average grades from multiple inputs (assignments) i.e. average input calculations.
- **Multiple Class Grade Calculator** == **Semester GPA Calculation:** Calculating GPA across multiple individual classes within a single semester.
- **Cumulative GPA Calculator**: Allowing users to add multiple semesters (and optional individual class grades) to calculate their overall GPA. Calculating overall GPA across multiple semesters.

**Design & Completeness - add overall enhancements [easy differentiators]**

- **design goes “wow, this is slick”:** create that unexpected delight for the users through design. it should be simple and scale across all pages. possibly magicUI or some Tailwindcss backgrounds/styling.
- **Unit Selection**: Enabling users to select units for calculation inputs, such as points or letter grades.
- **Menubar**: Navigate between calculators.
- **Feedback form:** feedback is important. gather direction.
