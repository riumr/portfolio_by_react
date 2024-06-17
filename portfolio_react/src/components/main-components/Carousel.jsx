export default function Carousel ({carouselId,carouselImg}) {
    return (
        <div id={carouselId} className="border col-12 col-md-4">
            <img src={carouselImg} alt={carouselId} className="img-fluid"/>
        </div>
    )
}