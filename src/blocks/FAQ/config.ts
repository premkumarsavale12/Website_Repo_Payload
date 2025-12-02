import { Block } from "payload";
import {
    FixedToolbarFeature,
    HeadingFeature,
    InlineToolbarFeature,
    lexicalEditor,
} from '@payloadcms/richtext-lexical'


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
            label: 'FAQ Item ',
            minRows: 1,
            fields: [

                {
                    name: 'Question',
                    type: 'text',
                    label: 'Question',
                    required: true
                },

                {
                    name: 'richText',
                    type: 'richText',
                    editor: lexicalEditor({
                        features: ({ rootFeatures }) => {
                            return [
                                ...rootFeatures,
                                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                                FixedToolbarFeature(),
                                InlineToolbarFeature(),
                            ]
                        },
                    }),
                    label: false,
                },
            ]
        }
    ]

}