import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://decisionnerd.github.io',
  base: '/ProductFeeling',
  outDir: 'site',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'ProductFeeling',
      description:
        'Emotion-aware product design skills for AI agents — companions to Impeccable and DocSlime.',
      customCss: ['./src/styles/theme.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/DecisionNerd/ProductFeeling',
        },
      ],
      sidebar: [
        {
          label: 'User Guide',
          items: [
            'guide',
            'guide/quick-start',
            'guide/installation',
            'guide/commands',
            'guide/productfeeling-directory',
            'guide/chat-only',
          ],
        },
        {
          label: 'Developer Docs',
          items: [
            'developers',
            'developers/product',
            'developers/design',
          ],
        },
      ],
    }),
  ],
});
