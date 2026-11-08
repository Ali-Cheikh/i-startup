# I-StartUp

I-StartUp is a product engineering studio for businesses that want to start ahead.

The name is intentional: **I-StartUp** is about making the first move, turning an idea into something useful, and building the systems that help a business keep its advantage. We work at the point where a business idea becomes a product, a repeated task becomes an automation, or a growing operation needs a dependable internal system.

## Vision

Our vision is to help more businesses move from intention to execution.

Starting up should not mean staying stuck in setup mode. I-StartUp helps teams make a clear first move, launch with purpose, and keep improving the technology behind their work. The goal is not technology for its own sake. The goal is a better way to operate: clearer products, less repetitive work, and systems that make progress easier to sustain.

## What I-StartUp builds

- **Digital products** — web applications, MVPs, platforms, dashboards, and customer-facing experiences.
- **Business automation** — connected workflows across Google Workspace, reporting, documents, email, and internal processes.
- **Internal systems** — recruitment tools, operational dashboards, CRM-style tools, scheduling, records, and approvals.
- **Digital operations** — domains, hosting, deployments, business email, maintenance, and the infrastructure around a product.

## How we work

We start with the real problem, not a predetermined technology stack. From there, we define a useful first outcome, build in clear steps, and improve from actual use.

The working principles are simple:

1. Find the right first move.
2. Build the useful version.
3. Keep the system understandable.
4. Improve what creates leverage.

I-StartUp is based in Tunisia and works with teams remotely.

## Website

This repository contains the static website for [i-startup.tn](https://www.i-startup.tn/).

### Website structure

- `index.html` — homepage and company vision
- `services/index.html` — service overview
- `services/automation/index.html` — Google Workspace automation
- `work/index.html` — selected products and systems
- `about/index.html` — company and team information
- `process/index.html` — delivery process
- `contact/index.html` — contact details and enquiry form
- `404.html` — not-found page
- `assets/css/main.css` — shared responsive stylesheet
- `assets/js/components.js` — reusable header, navigation, and footer
- `assets/js/main.js` — mobile navigation, contact form, and hero animation
- `assets/images/` — active site image and logo assets

The site is framework-free and uses native Web Components for the shared header and footer. It is designed around a restrained IBM Carbon-inspired visual system: functional spacing, clear hierarchy, strong contrast, and minimal decoration.

## Public routes

```text
/                     Homepage
/services/            Service overview
/services/automation/ Automation service
/work/                Selected work
/about/               About
/process/             Delivery process
/contact/             Contact
```

## Local preview

Run a local static server from the repository root:

```powershell
python -m http.server 8765
```

Then open `http://127.0.0.1:8765/`.

## Deployment

Push to `main`. GitHub Actions publishes the static site through `.github/workflows/static.yml`.
