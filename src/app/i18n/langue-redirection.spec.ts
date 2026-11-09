/** Teste `public/langue.js` (chargé par la cible `test` via l'option `scripts` d'angular.json). */
interface NMLangue {
  langueCible(stockee: string | null, navigateur: string, agent: string): 'fr' | 'en';
  cheminRedirection(pathname: string, base: string, search?: string, hash?: string): string | null;
}

const lib = () => (window as unknown as { NMLangue: NMLangue }).NMLangue;
const CHROME = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/156.0 Safari/537.36';

describe('langue.js', () => {
  it('est chargé', () => {
    expect(lib()).toBeDefined();
  });

  describe('langueCible', () => {
    it('français pour un navigateur français, quelle que soit la variante', () => {
      for (const l of ['fr', 'fr-FR', 'fr-BE', 'fr_CA', 'FR-ch']) {
        expect(lib().langueCible(null, l, CHROME)).withContext(l).toBe('fr');
      }
    });

    it('anglais pour tout autre navigateur', () => {
      for (const l of ['en-US', 'en', 'de-DE', 'es', 'frisian']) {
        expect(lib().langueCible(null, l, CHROME)).withContext(l).toBe('en');
      }
    });

    it('français sans langue de navigateur', () => {
      expect(lib().langueCible(null, '', CHROME)).toBe('fr');
    });

    it('le choix mémorisé l\'emporte sur le navigateur', () => {
      expect(lib().langueCible('fr', 'en-US', CHROME)).toBe('fr');
      expect(lib().langueCible('en', 'fr-FR', CHROME)).toBe('en');
    });

    it('ignore une valeur mémorisée invalide', () => {
      expect(lib().langueCible('de', 'en-US', CHROME)).toBe('en');
      expect(lib().langueCible('de', 'fr-FR', CHROME)).toBe('fr');
    });

    it('ne redirige jamais les robots', () => {
      for (const agent of [
        'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        'Mozilla/5.0 (compatible; bingbot/2.0)',
        'LinkedInBot/1.0 (compatible; Mozilla/5.0)',
        'facebookexternalhit/1.1',
        'Twitterbot/1.0',
      ]) {
        expect(lib().langueCible('en', 'en-US', agent)).withContext(agent).toBe('fr');
      }
    });
  });

  describe('cheminRedirection', () => {
    it('cible /en/ depuis la racine, en conservant la requête et l\'ancre', () => {
      expect(lib().cheminRedirection('/SiteWeb/', '/SiteWeb/')).toBe('/SiteWeb/en/');
      expect(lib().cheminRedirection('/SiteWeb/index.html', '/SiteWeb/')).toBe('/SiteWeb/en/');
      expect(lib().cheminRedirection('/SiteWeb/', '/SiteWeb/', '?a=1', '#imsa')).toBe('/SiteWeb/en/?a=1#imsa');
      expect(lib().cheminRedirection('/', '/')).toBe('/en/');
    });

    it("cible /en/nutriscope/ depuis l'étude de cas, avec ou sans barre finale", () => {
      expect(lib().cheminRedirection('/SiteWeb/nutriscope/', '/SiteWeb/')).toBe('/SiteWeb/en/nutriscope/');
      expect(lib().cheminRedirection('/SiteWeb/nutriscope', '/SiteWeb/')).toBe('/SiteWeb/en/nutriscope/');
      expect(lib().cheminRedirection('/SiteWeb/nutriscope/index.html', '/SiteWeb/')).toBe('/SiteWeb/en/nutriscope/');
      expect(lib().cheminRedirection('/SiteWeb/nutriscope/', '/SiteWeb/', '', '#donnees')).toBe('/SiteWeb/en/nutriscope/#donnees');
      expect(lib().cheminRedirection('/nutriscope/', '/')).toBe('/en/nutriscope/');
    });

    it('ne redirige pas hors des pages françaises', () => {
      expect(lib().cheminRedirection('/SiteWeb/en/nutriscope/', '/SiteWeb/')).toBeNull();
      expect(lib().cheminRedirection('/SiteWeb/nutriscope-autre/', '/SiteWeb/')).toBeNull();
      expect(lib().cheminRedirection('/autre/nutriscope/', '/SiteWeb/')).toBeNull();
    });

    it('ne redirige pas hors de la racine', () => {
      expect(lib().cheminRedirection('/SiteWeb/en/', '/SiteWeb/')).toBeNull();
      expect(lib().cheminRedirection('/SiteWeb/autre', '/SiteWeb/')).toBeNull();
      expect(lib().cheminRedirection('/context.html', '/')).toBeNull();
    });
  });
});
