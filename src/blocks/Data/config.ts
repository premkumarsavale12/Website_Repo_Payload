import { Block } from "payload";


export const Data: Block = {
    slug: 'data',
    interfaceName: 'data',
    labels: {
        singular: 'data',
        plural: 'datas'
    },

    fields: [
        {
            name: 'heading',
            type: 'text',
            label: 'Heading',
            required: true
        },

        {
            name: 'Paragraph',
            type: 'textarea',
            label: 'Paragraph',
            required: true
        },
        {
            name: 'label',
            type: 'text',
            label: 'Button Label',
            required: true
        }
    ]

}