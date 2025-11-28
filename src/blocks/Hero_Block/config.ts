import { Block } from "payload";


export const heroBlock: Block = {

    slug: 'hero',
    interfaceName: 'hero',
    fields: [
        {
            type: 'upload',
            name: 'image',
            label: 'Images',
            relationTo: 'media',
            required: true,

        },

        {
            type: 'text',
            name: 'heading',
            label: 'Heading',
            required: true,
        },

        {
            type: 'richText',
            name: 'subHeading',
            label: 'subHeading'
        },

        {
            type: "text",
            name: 'label',
            label: 'Button Label',
            required: true,
        },

        {
            type: 'text',
            name: 'url',
            label: 'Button URL',
            required: true

        }
    ]
}