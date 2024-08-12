const { Schema, model } = require('mongoose')

const PageSchema = Schema(
    {
        backgroundcolor: {
            type: String,
            default: '#2a323c',
            required: true,
        },
        textcolor: {
            type: String,
            default: '#3F6AA6',
            required: true,
        },
        buttoncolor: {
            type: String,
            default: '#024DB6',
            required: true,
        },
        apptitle: {
            type: String,
            default: 'MY APP',
            required: true,
        },
        appdescription: {
            type: String,
            default: 'MY APP',
            required: true,
        },
        formlabel: {
            type: String,
            default: 'MY APP',
            required: true,
        },
        formdescription: {
            type: String,
            default: 'MY APP',
            required: true,
        },
        openAIkey: {
            type: String,
            default: '',
        }
    },
    {
        collection: process.env.DB_COLLECTION_PREFIX + 'pages',
        timestamps: true,
    }
)

model('Page', PageSchema)
