const express = require("express");
const os = require("os");
const client = require("prom-client");

const app = express();
const register = new client.Registry();

const APP_NAME = process.env.APP_NAME || "Unknown App";

client.collectDefaultMetrics({
    register
});

const httpRequests = new client.Counter({
    name: "http_requests_total",
    help: "Total HTTP Requests",
    registers: [register]
});


app.get("/", (req, res) => {

    httpRequests.inc();

    res.json({
	app: APP_NAME,
	hostname: os.hostname(),
        time: new Date().toISOString()
    });
});

app.get("/metrics", async (req, res) => {

    res.set("Content-Type", register.contentType);

    res.end(await register.metrics());

});

app.listen(3000, () => {
    console.log(`${APP_NAME} running on port 3000`);
});
