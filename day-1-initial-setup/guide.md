## Day 1 - Initial setup

### Clone the repository

```bash
git clone https://github.com/eirikhaugstulen/plugin-workshop-jordan.git
```

### Configure DHIS2 with docker

All necessary files are located in the docker-setup directory. You can find the following files:

- docker-compose.yml
- dhis.conf
- A database dump (Optional)

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




## Creating a custom app

1. Try running `npm --version` to check if you have npm installed.
2. If not, run the following commands: 

# Download and install Chocolatey:
powershell -c "irm https://community.chocolatey.org/install.ps1|iex"

# Download and install Node.js:
choco install nodejs --version="22.21.1"

# Verify the Node.js version:
node -v # Should print "v22.21.1".

# Verify npm version:
npm -v # Should print "10.9.4".

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

