const { Schema, model } = require('mongoose')

const Credit_Schema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        user : {
            type: Schema.Types.ObjectId,
            required: true,
        },
        fentanyl: [{
            mode: Number,
            time: Number,
            value: Number
        }],
        consdate: {
            type: Date,
            required: true,
        },
        consCredit: {
            type: Number,
            required: true,
        }
    }
)

model('Credit', Credit_Schema)