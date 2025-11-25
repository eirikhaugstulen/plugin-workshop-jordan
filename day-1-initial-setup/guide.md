## Day 1 - Initial setup

### Clone the repository

```bash
git clone https://github.com/eirikhaugstulen/plugin-workshop-jordan.git
```

### Configure DHIS2 with docker

All necessary files are located in the repository. You can find the following files:

- `docker-compose.yml` (in the root directory)
- `day-1-initial-setup/dhis.conf`
- `day-1-initial-setup/db/init.sql` - A database dump (Optional)

To run the DHIS2 instance, you can use the following command:

```bash
docker compose up -d
```

To stop the DHIS2 instance, you can use the following command:

```bash
docker compose down
```

or just use the stop button in the Docker Desktop app.


To access the DHIS2 instance, you can use the following URL:

```
http://localhost:8080
```

The default username and password are:

```
system
system123
```

If you want to replace the default database with a dump, you can replace the db/init.sql file with your own dump.

If you do not have docker installed, you can get it from [here](https://www.docker.com/products/docker-desktop)

## Seeding the database

If you want to seed the database with a dump, you can replace the db/init.sql file with your own dump.
I have included a zip file with a dump of the database. You can unzip it and place the init.sql file in the db directory.
The docker compose file handle the rest.

## Creating a custom app

### Installing Node.js

1. Try running `npm --version` to check if you have npm installed.
2. If not, install Node.js using one of the methods below:

#### macOS / Linux

Download and install from [nodejs.org](https://nodejs.org/) or use a version manager like nvm:

```bash
# Using nvm (recommended)
nvm install 20
nvm use 20

# Verify installation
node -v  # Should print v22.x.x
npm -v   # Should print 10.x.x
```

#### Windows

Option 1: Download the installer from [nodejs.org](https://nodejs.org/)

Option 2: Use Chocolatey:

```powershell
# Download and install Chocolatey (run as Administrator):
powershell -c "irm https://community.chocolatey.org/install.ps1|iex"

# Download and install Node.js:
choco install nodejs --version="22.12.0"

# Verify the Node.js version:
node -v  # Should print v22.x.x
npm -v   # Should print 10.x.x
```

### Creating the app

3. Run `npm create @dhis2/app` to create a new app




### To make your custom app into a plugin

1. Open up the d2.config.js file
2. Add a new entrypoint like this: 
```js
entryPoints: {
    app: './src/App.tsx',
    plugin: './src/Plugin.tsx',
},
```

3. Create a new Plugin.tsx or Plugin.jsx file
4. Add the following code to the file:
```tsx

export default function Plugin() {
    return <div>Hello World</div>;
}
```

5. Restart your local development server by pressing "Ctrl + C" and then running `npm start` again

