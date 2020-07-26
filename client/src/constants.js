module.exports = {
    ENV: process.env.NODE_ENV,
    URL: process.env.URL || process.env.VUE_APP_URL || "http://localhost:8081",
}