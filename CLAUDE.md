# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A mobile-first web app ("AI study buddy") for secondary school students. Built so parents can fork and deploy for their own child.

There is no build system, no package.json, no framework. Files are deployed directly to Vercel.

## Project structure

```
/
  index.html              Weekly task overview dashboard
  tom-coach.html          AI chat buddy interface
  tom-niveaus.html        Per-subject level descriptions ("what do I need to know?")
  api/chat.js             Vercel Edge Function: proxies chat to Anthropic API

huiswerk/                 Per-subject trainers (flashcards, quiz, chat)
  nederlands-trainer.html
  wiskunde-trainer.html
  maatschappij-trainer.html
```

## Deployment

- Vercel hosts both apps. `api/chat.js` uses `export const config = { runtime: 'edge' }` (Vercel Edge Runtime).
- Required environment variable: `ANTHROPIC_API_KEY` in Vercel project settings.
- No build step. Deploy by pushing files or via Vercel CLI: `vercel --prod`.

## AI integration

`api/chat.js` calls `https://api.anthropic.com/v1/messages` directly via fetch. The system prompt is embedded as a constant in the file. It uses streaming SSE and passes the stream directly to the client.

- Model: `claude-sonnet-4-5-20250929`
- Max tokens: 1024
- Conversation history: last 20 messages kept
- Mode context (chill/school/onderweg) is appended to the system prompt dynamically

When updating the student's status, deadlines, or subject context, edit the `SYSTEM_PROMPT` constant in `api/chat.js`.

## Frontend conventions

- All CSS lives inside `<style>` tags in each HTML file (no external stylesheets)
- CSS custom properties are defined in `:root` and used consistently across all files. The same color variables appear in every file, keep them in sync.
- Mobile-first, max-width 480px containers
- No JavaScript frameworks. Tab switching and UI interactions are plain vanilla JS
- Progress rings use inline SVG with `stroke-dasharray` calculated as `(percentage/100) * 94.2` (circumference of r=15 circle)
- Status colors: red = urgent/overdue, orange = in progress/warning, blue = on track, green = done

## Content updates

The weekly dashboard (`index.html`) is updated manually each week with:
- Week number and date range in the header
- Task cards with current progress percentages (stroke-dasharray values)
- Day strip with today highlighted and test days marked
- Grade grid status badges

The system prompt in `api/chat.js` contains the student's current status section (deadlines, stoplichten, urgent tasks) which needs updating when the situation changes.
