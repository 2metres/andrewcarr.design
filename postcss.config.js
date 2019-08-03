module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-import'),
    require('cssnano')({
      autoprefixer: true,
    }),
  ],
};