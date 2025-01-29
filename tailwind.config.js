// Importing your array from StaticData
import { daysArray } from "./src/Classes/StaticData";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        dynamic: `107px 107px ${[...Array(daysArray.length)]
          .map(() => "minmax(min-content, max-content)")
          .join(" ")} 91px`,
        // First two and last column as 1fr, the rest minmax(min-content, max-content)
      },
    },
  },
  plugins: [],
};
