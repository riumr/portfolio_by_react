export default function Carousel (props) {
    const carouselId = props.carouselId
    const imgSource = props.carouselImg
    const carouselBoxSize = {
        width:'460px',
        height:'230px',
    }
 
    const carouselButtonStyle = {
        color:'black',
    }

    const carouselHandler = (prevOrNext,target,imgSrc) => (
        <button className={`carousel-control-${prevOrNext}`} type="button" data-bs-target={target} data-bs-slide={`${prevOrNext}`}>
            <span className={`carousel-control-${prevOrNext}-icon`} aria-hidden="true" style={carouselButtonStyle}>
                <img src={imgSrc} alt=""/>
            </span>
            <span className="visually-hidden">{prevOrNext}</span>
        </button>
    )
    
    const imgSize = {width:'100%',height:'225px'}
    const carouselImg = (imgSrc,imgAlt) => (
        <div>
            <img src={imgSrc} alt={imgAlt} style={imgSize}/>
        </div>
        // <div className="carousel-inner">
        //     <div className="carousel-item d-flex">
        //         {Object.values(sourceList).map((source,index)=>(
        //             <img key={index} src={source} className="d-block" alt="..."/>
        //         ))}
        //     </div>
        // </div>
    )
    return (
        <div id={carouselId} className="carousel slide border" style={carouselBoxSize}>
            {carouselImg(imgSource,carouselId)}
            {/* {carouselHandler("prev","chevron-compact-left.svg")}
            {carouselHandler("next",'chevron-compact-right.svg')} */}
        </div>
    )
}