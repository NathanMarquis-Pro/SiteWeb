import { URL_ETUDE, URL_PAGE } from './i18n/seo';
import { SITE_URL } from './shared/liens';

/**
 * Les fichiers de `public/` ne peuvent pas importer `SITE_URL` : ce test garantit qu'ils restent
 * alignés dessus (domaine ou dépôt renommé).
 */
describe('fichiers de public/', () => {
  async function lire(nom: string): Promise<string> {
    const reponse = await fetch(nom);
    expect(reponse.ok).withContext(nom).toBeTrue();
    return reponse.text();
  }

  function dimensions(nom: string): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve([img.naturalWidth, img.naturalHeight]);
      img.onerror = () => reject(new Error(`image illisible : ${nom}`));
      img.src = nom;
    });
  }

  it('robots.txt autorise tout et déclare le sitemap absolu', async () => {
    const robots = await lire('robots.txt');
    expect(robots).toMatch(/^User-agent: \*$/m);
    expect(robots).toMatch(/^Allow: \/$/m);
    expect(robots).toContain(`Sitemap: ${SITE_URL}sitemap.xml`);
  });

  it('sitemap.xml liste les quatre pages avec leurs alternatives hreflang absolues', async () => {
    const xml = new DOMParser().parseFromString(await lire('sitemap.xml'), 'application/xml');
    expect(xml.querySelector('parsererror')).toBeNull();
    const urls = Array.from(xml.getElementsByTagName('url'));
    expect(urls.map((u) => u.getElementsByTagName('loc')[0].textContent)).toEqual([URL_PAGE.fr, URL_PAGE.en, URL_ETUDE.fr, URL_ETUDE.en]);
    // Chaque page déclare les mêmes trois alternatives (fr, en, x-default = français) que ses jumelles.
    for (const [i, version] of [URL_PAGE, URL_PAGE, URL_ETUDE, URL_ETUDE].entries()) {
      const alternatives = Array.from(urls[i].getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'link'));
      expect(alternatives.length).withContext(`page ${i}`).toBe(3);
      const attendu: Record<string, string> = { fr: version.fr, en: version.en, 'x-default': version.fr };
      for (const lien of alternatives) {
        expect(lien.getAttribute('href')).withContext(`page ${i} ${lien.getAttribute('hreflang')}`).toBe(attendu[lien.getAttribute('hreflang')!]);
      }
    }
    expect(URL_PAGE.fr).toBe(SITE_URL);
  });

  it('site.webmanifest : couleur du thème, portée relative et icônes existantes', async () => {
    const manifeste = JSON.parse(await lire('site.webmanifest'));
    expect(manifeste.theme_color).toBe('#14213D');
    expect(manifeste.start_url).toBe('./');
    expect(manifeste.icons.map((i: { sizes: string }) => i.sizes)).toEqual(['192x192', '512x512']);
    for (const icone of manifeste.icons as { src: string; sizes: string }[]) {
      const [l, h] = icone.sizes.split('x').map(Number);
      expect(await dimensions(icone.src)).withContext(icone.src).toEqual([l, h]);
    }
  });

  it("apple-touch-icon.png fait 180 × 180 et favicon.ico est servi", async () => {
    expect(await dimensions('apple-touch-icon.png')).toEqual([180, 180]);
    expect((await fetch('favicon.ico')).ok).toBeTrue();
  });
});
