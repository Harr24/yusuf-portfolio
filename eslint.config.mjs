import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Array ini berisi semua konfigurasi ESLint
const eslintConfig = [
  // Ini adalah konfigurasi dasar dari Next.js
  ...compat.extends("next/core-web-vitals"),

  // <<< TAMBAHKAN OBJEK ATURAN BARU DI SINI >>>
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
