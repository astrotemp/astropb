# Astro + Pocketbase
![image](https://github.com/astrotemp/astropb/assets/59685062/b7329c2b-e471-4a4f-a5b3-de12154cf0ba)

Pocketbase Instance runnign astro static site for frontend inside `pb_public`, tested deploymeny on [Koyeb Cloud](https://app.koyeb.com)

## Client

### Astro Integrations
- nanostores
- Tailwind
- React
  - ShadCN UI
  - nanostores/react
  - swr


## Deployment Settings
Expose port `8090`

### Build command
```sh
pnpm build
```

### Run command
```sh
pnpm permit && pnpm dev
```

> `pnpm permit` gives permission to pocketbase CLI to be ran by the cloud instance
