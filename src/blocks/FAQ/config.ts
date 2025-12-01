import { Block } from "payload";



export const FAQ: Block = {

    slug: 'faq',
    interfaceName: 'faq',
    labels:
    {
        singular: 'faq',
        plural: 'faqs'
    },

    fields: [
        {
            name: 'items',
            type: 'array',
            label: 'FAQ Question',
            minRows: 1,
            fields: [

                {
                    name: 'Question',
                    type: 'text',
                    label: 'Question',
                    required: true
                },

                {
                    name: 'Answer',
                    type: 'textarea',
                    label: 'Answer',
                    required: true

                }
            ]
        }
    ]

}