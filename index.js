const app = require('./app')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("App express is on the run")
})