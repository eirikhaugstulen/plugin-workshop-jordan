# Civil Registry Middleware (Next.js)

This is an example middleware implementation using Next.js that simulates a civil registry API. It's used in the workshop to demonstrate how plugins can fetch data from external sources through a secure middleware layer.

## Purpose

This middleware serves as a mock civil registry API that:
- Returns person data based on a unique ID
- Falls back to generating random data for unknown IDs (using randomuser.me)
- Demonstrates how to build API routes in Next.js

## Getting Started

### Prerequisites

- Node.js v20+
- pnpm (recommended) or npm

### Installation

```bash
pnpm install
```

### Running the Development Server

```bash
pnpm dev
```

The server will start at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### GET `/api/civil-registry`

Returns all entries in the mock registry.

**Response:**
```json
{
  "message": "Civil registry data fetched successfully",
  "data": [...]
}
```

### GET `/api/civil-registry/[id]`

Returns data for a specific person by ID.

**Parameters:**
- `id` - The unique identifier for the person

**Response (known ID):**
```json
{
  "message": "Civil registry data fetched from internal source successfully",
  "data": {
    "uniqueId": "test",
    "firstName": "John",
    "lastName": "Doe",
    "birthDate": "1990-01-15"
  }
}
```

**Response (unknown ID - generated from external source):**
```json
{
  "message": "Civil registry data fetched from external source successfully",
  "data": {
    "uniqueId": "abc123",
    "firstName": "Generated",
    "lastName": "Name",
    "birthDate": "1985-06-20"
  }
}
```

## Workshop Usage

This middleware is referenced in:
- **Day 2 Assignment 4**: Fetching data from external sources
- **Day 5 Civil Registry Integration**: Building a complete form field plugin

### Deployed Version

A deployed version is available at:
```
https://www.jordan-workshop.dev/api/civil-registry/[id]
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── civil-registry/
│   │       ├── route.ts          # GET all entries
│   │       └── [id]/
│   │           ├── route.ts      # GET by ID
│   │           └── registry.ts   # Mock data store
│   ├── civil-registry/
│   │   └── page.tsx              # Demo page
│   └── page.tsx                  # Landing page
└── ...
```

## Extending the Registry

To add more mock entries, edit the `registry.ts` file:

```typescript
export const registry: Record<string, Registry> = {
    "test": {
        uniqueId: "test",
        firstName: "John",
        lastName: "Doe",
        birthDate: "1990-01-15",
    },
    // Add more entries here
};
```
