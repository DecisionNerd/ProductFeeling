import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

const BRAND = '😊 ProductFeeling';

/**
 * Starlight sets `og:title`/`twitter:title` to the bare page title, so shared
 * link previews lose the brand mark. Rewrite them to carry the emoji brand,
 * matching the browser-tab `<title>` convention.
 */
export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const pageTitle = route.entry.data.title;
  const branded =
    pageTitle && pageTitle !== 'ProductFeeling'
      ? `${pageTitle} | ${BRAND}`
      : BRAND;

  for (const tag of route.head) {
    if (tag.tag !== 'meta' || !tag.attrs) continue;
    if (tag.attrs.property === 'og:title' || tag.attrs.name === 'twitter:title') {
      tag.attrs.content = branded;
    }
  }
});
