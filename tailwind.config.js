module.exports = {
  content: [
    './index.html',    // Add this line
    './src/**/*.{html,js}',  // Scan all files in src folder for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
