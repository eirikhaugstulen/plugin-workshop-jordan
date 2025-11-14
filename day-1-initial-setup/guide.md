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