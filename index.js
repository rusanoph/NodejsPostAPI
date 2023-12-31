import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js"
import fileUpload from 'express-fileupload'

const PORT = 5000;
const DB_URL = `db_url`

const app = express();

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('Server started on PORT: ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()