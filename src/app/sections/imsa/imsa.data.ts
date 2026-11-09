/** Code « Avant », simplifié depuis le rapport de stage. */
export const CODE_AVANT = `getByRole('button',
  { name: 'Suivant' }).click();
getByRole('textbox', { name:
  'Veuillez détailler…' })
  .fill('Bonjour');
getByRole('button',
  { name: 'Suivant' }).click();
getByText('Je m\\'engage…')
  .click();
getByRole('button',
  { name: 'Suivant' }).click();
// … ×11 pages`;

export const CODE_APRES = `const mapParcoursSite =
  new Map<string, Function>([
  ["accueil", remplissageAccueil],
  ["mandat", remplissageMandat],
  ["motiver", remplissageMotiver],
  // … 9 pages
]);

// dans un test :
await navigationVersUri(
  page, "recapitulatif");`;
