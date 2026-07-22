import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://decisionnerd.github.io',
  base: '/ProductFeeling',
  outDir: 'site',
  trailingSlash: 'always',
  integrations: [
    mermaid(),
    starlight({
      title: '😊 ProductFeeling',
      favicon: '/favicon.svg',
      routeMiddleware: './src/routeData.ts',
      description:
        'Emotion-aware product design for AI agents — grounded clarity; companions to Impeccable and DocSlime.',
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
            { label: 'Project context', slug: 'guide/productfeeling-directory' },
            'guide/chat-only',
          ],
        },
        {
          label: 'Handbook',
          items: [
            'handbook',
            'handbook/why-it-works',
            {
              label: 'Customer Discovery',
              collapsed: true,
              items: [{ autogenerate: { directory: 'handbook/discovery' } }],
            },
            {
              label: 'Product Strategies',
              collapsed: true,
              items: [{ autogenerate: { directory: 'handbook/strategies' } }],
            },
            {
              label: 'Tools, Techniques, and Practices',
              collapsed: true,
              items: [{ autogenerate: { directory: 'handbook/ttps' } }],
            },
            {
              label: 'Concepts (deep dives)',
              collapsed: true,
              items: [{ autogenerate: { directory: 'handbook/concepts' } }],
            },
            'handbook/continue-learning',
          ],
        },
        {
          label: 'Developer Docs',
          items: [
            'developers',
            'developers/product',
            'developers/design',
            'developers/requirements',
            {
              label: 'Strategy',
              collapsed: true,
              items: [{ autogenerate: { directory: 'developers/strategy' } }],
            },
            {
              label: 'Experience',
              collapsed: true,
              items: [{ autogenerate: { directory: 'developers/experience' } }],
            },
            {
              label: 'Engineering',
              collapsed: true,
              items: [
                { autogenerate: { directory: 'developers/engineering' } },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
