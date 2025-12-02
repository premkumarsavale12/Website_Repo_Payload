interface DataComponentBlock {
    heading: string;
    Paragraph: string;
    label: string;
}
export const DataComponent = ({ heading, Paragraph, label }: DataComponentBlock) => {
    return (

        <section className="py-16 px-4 md:px-8 bg-white text-center">

            <div className="max-w-4xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">

                    {heading}

                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">

                    {Paragraph}

                </p>

                {label && (

                    <button className="inline-block px-8 py-3 text-white font-semibold rounded-lg bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-md border-2 border-red-500">
                        Your Button Text



                        {label}

                    </button>
                )}
            </div>
        </section>
    )
}
