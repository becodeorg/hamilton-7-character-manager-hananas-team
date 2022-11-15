const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        creation: "./src/character_creation.html",
        character: "./src/single_character.html",
      },
      target: "esnext",
    },
  },
});
