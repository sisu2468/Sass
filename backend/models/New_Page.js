const { Schema, model } = require('mongoose')

const PageSchema = Schema(
    {
        title: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        pwd: {
            type: String,
            required: true,
        },
        paid: {
            type: Number,
            default: 0,
        },
        avatar: {
            type: String,
            default: '',
        },
        credit: {
            type: Number,
            default: 20,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        }
    },
    {
        collection: process.env.DB_COLLECTION_PREFIX + 'pages',
        timestamps: true,
    }
)

model('Page', PageSchema)
