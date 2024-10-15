import mongoose from 'mongoose'

let url = process.env.URI_MONGO

console.log(url)

/*
mongoose
    .connect(url)
    .then(() => console.log('database conectada'))
    .catch((error) => console.log(' database error '))*/

    async function conexionDataBase() {
        try {
            await mongoose.connect(process.env.URI_MONGO)
            console.log("base de datos conectada");
        } catch (error) {
            console.log(error);
            
        }
    }

    conexionDataBase()
