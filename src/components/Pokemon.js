export const Pokemon = ({ props }) => {
    let sprites = '';
    let text = props[1].flavor_text_entries;
    for (var i in text) {
        if (text[i].language.name == 'en' && text[i].version.name == 'yellow') {
            sprites = text[i].flavor_text;
        }
    }

    // Cuando queremos pasarle un argumento específico, como la ID. 
    const mouseOverHandler = (name) => {
        console.log(name);
    };
    // Para recibir el evento. Util para Forms / Inputs.
    const clickHandler = (e) => {
        console.log(e);
    }

    return (
        <div
            className='bg-white w-72 h-96 p-1 shadow-sm hover:shadow-md shadow-white rounded m-3'
            onMouseOver={() => mouseOverHandler(props[0].name)}>
            <div className="h-3/5 w-full border-2 border-double border-black rounded-sm bg-slate-600">
                <img
                    className="w-full h-full object-cover rounded-t"
                    src={props[0].sprites.other['official-artwork'].front_default}
                    alt={props[0].name}
                />
            </div>
            <div className="w-full h-1/4 p-3">
                <button type='button' href="#" className=" hover:text-yellow-600 text-gray-700">
                    <span
                        className="text-lg font-semibold uppercase tracking-wide"
                        onClick={clickHandler}>
                        {props[0].name}
                    </span>
                </button>
                <p className="text-gray-600 text-sm leading-5 mt-1">
                    {props[0].types.map(e => {
                        return <span className="mr-2" key={e.type.url.substr(-8)}>
                            {e.type.name.slice(0, 1).toUpperCase() + e.type.name.slice(1)}
                        </span>
                    })}
                </p>
                <p className='bg-slate-600 text-white italic tracking-wider mt-1 p-2 text-xs rounded'>
                    {sprites}
                </p>
            </div>
        </div>
    )
}
export default Pokemon;
