import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'], // Add Poppins as a custom font family
      },
      fontWeight: {
        medium: '500', // Add Medium weight
      },
      colors: {
        primary: '#1E90FF', // Dodger Blue
        secondary: '#F5F5F5', // Light Gray
        text: {
          DEFAULT: '#333333', // Dark Gray
          body: '#666666', // Body Text
        },
        accent: '#FF6347', // Tomato Red for buttons
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'elevation-2': '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
        'elevation-3':
          '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
        'elevation-4':
          '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
        'elevation-5': '0 20px 40px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
