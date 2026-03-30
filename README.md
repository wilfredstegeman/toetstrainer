# AI Study Buddy

Een mobiel-first web-app die als persoonlijke AI-studiebuddy werkt voor middelbare scholieren. Gebouwd zodat ouders de app kunnen forken en personaliseren voor hun eigen kind.

## Wat doet het?

- **Weekoverzicht** (`index.html`) — Dashboard met taken, deadlines en voortgang
- **AI Chat** (`tom-coach.html`) — Chille AI-buddy die helpt met huiswerk (Duolingo-stijl)
- **Niveaus** (`tom-niveaus.html`) — Per vak zien wat je moet kennen
- **Vak-trainers** (`huiswerk/`) — Flashcards, quiz en chat per vak

De chatbot draait op Claude (Anthropic) via een Vercel Edge Function.

## Snel starten (voor Chris & anderen)

### Wat je nodig hebt

1. Een [GitHub](https://github.com) account
2. Een [Vercel](https://vercel.com) account (gratis, koppel aan GitHub)
3. Een [Anthropic API key](https://console.anthropic.com/) (betaald, ~€5-10/maand bij normaal gebruik)

### Stap 1: Fork de repo

Klik op **Fork** rechtsboven op GitHub. Je krijgt een eigen kopie.

### Stap 2: Personaliseer

Kopieer het voorbeeld-configuratiebestand:

```bash
cp config.example.js config.js
```

Open `config.js` en vul de gegevens van je kind in:

```js
const CONFIG = {
  student: {
    name: 'Casper',           // voornaam
    age: 15,
    username: 'casper_utrecht',
  },
  family: {
    parent1: { name: 'Chris',  role: 'Vater' },
    parent2: { name: 'Sophie', role: 'Mutter' },
    siblings: [],  // of: [{ name: 'Emma', age: 12, role: 'Schwester' }]
  },
  school: {
    name: 'UniC',
    city: 'Utrecht',
    class: '3D',
    level: 'havo/vwo',
  },
  interests: {
    sport: 'Fußball',
    food: 'Pizza',
    hobby: 'Gaming',
    // ... zie config.example.js voor alle opties
  },
};
```

> **Let op:** `config.js` staat in `.gitignore` en wordt NIET naar GitHub gepusht. Je persoonlijke gegevens blijven privé.

### Stap 3: Deploy naar Vercel

1. Ga naar [vercel.com/new](https://vercel.com/new)
2. Kies je geforkte repo
3. Voeg deze **Environment Variables** toe (Settings → Environment Variables):

| Variable | Waarde | Toelichting |
|---|---|---|
| `ANTHROPIC_API_KEY` | `sk-ant-...` | Je Anthropic API key |
| `STUDENT_NAME` | `Casper` | Voornaam van je kind |
| `STUDENT_PROFILE` | Zie hieronder | Korte beschrijving leerstijl |

**STUDENT_PROFILE** voorbeeld:
```
- Leert door doen en kijken, niet door lappen tekst
- Starten is het moeilijkst, eenmaal bezig gaat het prima
- Wil z'n profiel halen maar heeft weinig interesse in de meeste vakken
```

De wekelijkse status (toetsen, stoplichten, itslearning-links) staat direct in `api/chat.js`. Pas deze aan voor jouw kind. Zoek naar de sectie `=== [NAAM]'S ACTUELE STATUS ===`.

4. Klik **Deploy**

### Stap 4: Klaar!

Je app draait nu op `https://jouw-project.vercel.app`. Stuur de link naar je kind.

## Bestanden

```
index.html              Weekoverzicht dashboard
tom-coach.html          AI chat buddy
tom-niveaus.html        Niveau-beschrijvingen per vak
api/chat.js             Vercel Edge Function (AI proxy)
config.js               Jouw persoonlijke config (niet op GitHub)
config.example.js       Template — kopieer naar config.js

huiswerk/
  deutsch-trainer.html    Duits Schreibfertigkeit trainer
  nederlands-trainer.html Nederlands trainer
  wiskunde-trainer.html   Wiskunde trainer
  maatschappij-trainer.html Maatschappij (AK) trainer
```

## Hoe de personalisatie werkt

- **Frontend** (HTML-bestanden): laadt `config.js` via een `<script>` tag. Namen, school, stad etc. worden runtime ingevuld.
- **Backend** (`api/chat.js`): leest `STUDENT_NAME` en `STUDENT_PROFILE` uit Vercel environment variables. De system prompt is een template met `[NAAM]` placeholders. De wekelijkse status (stoplichten, links) staat direct in het bestand.

## Wekelijks updaten

Het weekoverzicht (`index.html`) update je handmatig met nieuwe taken en deadlines. De status in `api/chat.js` (stoplichten, toetsen, links) pas je aan als de situatie verandert.

## Kosten

- **Vercel**: gratis (Hobby plan)
- **Anthropic API**: betaal-per-gebruik, typisch €5-15/maand bij dagelijks gebruik
- **GitHub**: gratis

## Vragen?

Neem contact op met Wilfred (wilfred@getradicle.nl).
