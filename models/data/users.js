import "dotenv/config.js"
import '../../config/database.js'
import User from '../User.js'

const users = [
    {
        name: 'Ana García',
        email: 'ana.garcia@email.com',
        password: 'clave123',
        photo: 'https://ejemplo.com/photos/ana.jpg',
        role: 1,
    },
    {
        name: 'Carlos Rodríguez',
        email: 'carlos.rodriguez@email.com',
        password: 'segura456',
        photo: 'https://ejemplo.com/photos/carlos.jpg',
        role: 2,
    },
    {
        name: 'Elena Martínez',
        email: 'elena.martinez@email.com',
        password: 'elena2024',
        photo: 'https://ejemplo.com/photos/elena.jpg',
        role: 1,
    },
    {
        name: 'David López',
        email: 'david.lopez@email.com',
        password: 'davidpass',
        photo: 'https://ejemplo.com/photos/david.jpg',
        role: 3,
    },
    {
        name: 'Isabel Sánchez',
        email: 'isabel.sanchez@email.com',
        password: 'isa1234',
        photo: 'https://ejemplo.com/photos/isabel.jpg',
        role: 2,
    },
    {
        name: 'Francisco Pérez',
        email: 'francisco.perez@email.com',
        password: 'fran5678',
        photo: 'https://ejemplo.com/photos/francisco.jpg',
        role: 1,
    },
    {
        name: 'María Gómez',
        email: 'maria.gomez@email.com',
        password: 'mariag2024',
        photo: 'https://ejemplo.com/photos/maria.jpg',
        role: 2,
    },
    {
        name: 'Jorge Fernández',
        email: 'jorge.fernandez@email.com',
        password: 'jorgef90',
        photo: 'https://ejemplo.com/photos/jorge.jpg',
        role: 1,
    },
    {
        name: 'Laura Torres',
        email: 'laura.torres@email.com',
        password: 'lau3456',
        photo: 'https://ejemplo.com/photos/laura.jpg',
        role: 3,
    },
    {
        name: 'Roberto Díaz',
        email: 'roberto.diaz@email.com',
        password: 'rob1980',
        photo: 'https://ejemplo.com/photos/roberto.jpg',
        role: 2,
    },
]

User.insertMany(users)