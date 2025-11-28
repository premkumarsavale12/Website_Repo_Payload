import React from "react";

type HeroProps = {
    image: {
        url: string;
        alt?: string;
    };
    heading: string;
    subHeading?: unknown;
    label: string;
    url: string;
};

export const Hero: React.FC<HeroProps> = ({ image, heading, subHeading, label, url }) => {
    return (
        <>


            <section className="relative h-full w-full bg-gray-100">
                {/* Image */}
                <div >
                    <img
                        src={image?.url}
                        alt={image?.alt || heading}
                        className="mx-auto h-[700px] w-[1200px]"
                    />
                </div>

                {/* Content */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 mt-60">
                    <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
                        {heading}
                    </h1>

                    <a
                        href={url}
                        className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
                    >
                        {label}
                    </a>
                </div>
            </section>


        </>
    );
};


