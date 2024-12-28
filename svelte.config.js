import sveltePreprocess from 'svelte-preprocess';
import nodeAdapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: nodeAdapter(),
  },
  preprocess: sveltePreprocess(),
};

export default config;
