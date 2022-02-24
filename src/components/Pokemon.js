export const Pokemon = ({ props }) => {
    return (
        <div
            className='bg-white w-72 h-96 shadow-sm hover:shadow-md shadow-white rounded m-3'>
            <div className="h-3/4 w-full">
                <img
                    src={props.sprites.other['official-artwork'].front_default}
                    alt={props.name} className='w-full h-full object-cover rounded-t'
                />
            </div>
            <div className="w-full h-1/4 p-3">
                <button type='button' href="#" className=" hover:text-yellow-600 text-gray-700">
                    <span className="text-lg font-semibold uppercase tracking-wide ">
                        {props.name}
                    </span>
                </button>
                <p className="text-gray-600 text-sm leading-5 mt-1">
                    {props.types.map(e => {
                        return <span className="mr-2" key={e.type.url.substr(-8)}>
                            {e.type.name.slice(0, 1).toUpperCase() + e.type.name.slice(1)}
                        </span>
                    })}
                </p>
            </div>
        </div>
    )
}
export default Pokemon;
