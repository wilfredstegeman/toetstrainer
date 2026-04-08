/*  ╔══════════════════════════════════════════════════════════════╗
 *  ║  config.example.js — Kopieer dit naar config.js             ║
 *  ║                                                              ║
 *  ║  Stap 1: cp config.example.js config.js                     ║
 *  ║  Stap 2: Vul de gegevens van jouw kind in                   ║
 *  ║  Stap 3: Deploy naar Vercel                                 ║
 *  ║                                                              ║
 *  ║  config.js staat in .gitignore en wordt niet gedeeld.       ║
 *  ╚══════════════════════════════════════════════════════════════╝
 */
const CONFIG = {

  // ── LEERLING ──────────────────────────────────────────────────
  student: {
    name:     'Casper',          // voornaam van je kind
    age:      15,                // leeftijd
    username: 'casper_utrecht',  // weergavenaam in voorbeeld-posts
  },

  // ── GEZIN ─────────────────────────────────────────────────────
  family: {
    parent1:  { name: 'Chris',  role: 'Vater' },   // Duits: Vater / Mutter
    parent2:  { name: 'Sophie', role: 'Mutter' },   // Duits: Vater / Mutter
    siblings: [
      // Voeg broers/zussen toe of laat leeg: []
      // { name: 'Emma', age: 12, role: 'Schwester' }
    ],
  },

  // ── SCHOOL ────────────────────────────────────────────────────
  school: {
    name:   'Mijn School',    // schoolnaam
    city:   'Amsterdam',      // woonplaats
    class:  '3A',             // klas
    level:  'havo/vwo',       // niveau
  },

  // ── INTERESSES (gebruikt in Duitse verhaaltjes) ───────────────
  // Vul in wat past bij jouw kind. Wordt gebruikt om oefenteksten
  // persoonlijk te maken. Laat op null staan als het niet van
  // toepassing is.
  interests: {
    sport:    'Fußball',      // favoriete sport (in het Duits)
    food:     'Pizza',        // favoriete eten
    hobby:    'Gaming',       // hobby
    friend:   'Max',          // beste vriend(in)
    subject:  'Sport',        // leukste vak
    pet:      null,           // huisdier (null = geen)
    city:     'Amsterdam',    // favoriete stad
    country:  'Spanien',      // favoriete land (in het Duits)
    film:     'Spider-Man',   // favoriete film
    music:    'Rap',          // muziekgenre
  },
};
