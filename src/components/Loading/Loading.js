import loadingIcon from './mew-loading.gif';

const Loading = () => {
    return (<>
        <div className='loading-div'>
            <img className="loading-div-icon" src={loadingIcon} alt="loading-icon"></img>
            <div className='loading-text-and-dots'>
                <h3 className='loading-div-text'>Loading </h3>
                <div className="stage">
                    <div className="dot-flashing"></div>
                </div>
            </div>
        </div>
    </>);
}

export default Loading