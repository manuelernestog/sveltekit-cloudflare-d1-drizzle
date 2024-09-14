# sveltekit-cloudflare-d1-drizzle

A demo repo to run Sveltekit and Cloudflare D1 and drizzle ORM locally

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run migrations

```bash
pnpm db:migrate
```

### Initialize database

```bash
pnpm db:studio
```

### Push data

```bash
pnpm db:push:local
```

### Generate seeds

```bash
pnpm db:generate:seeds
```

### Push seeds

```bash
pnpm db:push:seeds  
```

### Run the app

```bash
pnpm dev
```

### Drizzle Studio

To run dreaze studio go to drizzle.config.ts and change the dbCredentials to your db in .wrangler folder then run `pnpm db:studio`

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

