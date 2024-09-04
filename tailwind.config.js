/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customColor1:'#bde0fe',
        customColor2:'cdb4db',
        forestGreen: '#2E8B57', // For headers, buttons, etc.
        skyBlue: '#87CEEB',     // For background sections
        sunsetOrange: '#FF8C00',// For call-to-action buttons

        // Secondary Colors
        sandBeige: '#F5DEB3',   // For background sections or cards
        slateGray: '#708090',   // For text, icons, or borders
        leafGreen: '#9ACD32',   // For hover effects, secondary buttons

        // Background and Accent Colors
        ivoryWhite: '#FFFFF0',  // For the main background
        earthBrown: '#8B4513',  // For footer background
        oceanTeal: '#20B2AA',   // For links or accents
        // Text Colors
        charcoalBlack: '#333333', // For primary text
        dimGray: '#696969',   

      }
    },
  },
  plugins: [],
}

