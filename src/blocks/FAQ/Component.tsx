

export const FAQ = (props: any) => {

    // console.log(props);

    const items = Array.isArray(props.items) ? props.items : [];

    // console.log(items);

    return (


        items.map((item: any, index: number) => (




            <div
                key={item.id}
                className="bg-white shadow-md rounded-xl p-6 mb-4 hover:shadow-2xl transition-shadow duration-300 w-full max-w-md mx-auto border border-gray-200"
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                    {item.Question}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">{item.Answer}</p>
            </div>

        ))
    )


}