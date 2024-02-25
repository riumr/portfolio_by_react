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
                <img src={imgSrc} alt="..."/>
            </span>
            <span className="visually-hidden">{prevOrNext}</span>
        </button>
    )
    
    const carouselImg = (sourceList) => (
        <div className="carousel-inner">
            <div className="carousel-item">
                {Object.values(sourceList).map((source,index)=>(
                    <img key={index} src={source} className="d-block w-100" alt="..."/>
                ))}
            </div>
        </div>
    )
    return (
        <div id={carouselId} className="carousel slide border" style={carouselBoxSize}>
            {carouselImg(imgSource)}
            {carouselHandler("prev","chevron-compact-left.svg")}
            {carouselHandler("next",'chevron-compact-right.svg')}
        </div>
    )
}