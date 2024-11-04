// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://fripe070.github.io",
    base: "/",
    output: "static",

    vite: {
        css: {
            preprocessorOptions: {
                scss: { api: "modern-compiler" }
            }
        }
    }
});
