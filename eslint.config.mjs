import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  // Project overrides
  {
    rules: {
      // This rule is overly strict for typical Next.js apps and can mark
      // legitimate state sync patterns as errors.
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
