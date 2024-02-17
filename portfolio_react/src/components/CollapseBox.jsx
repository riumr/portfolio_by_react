export default function CollapseBox (props) {
    const boxId = props.boxId
    const boxImg = props.boxImgSrc
    const collapseStyle = {
        height:'50px',
    }
    const boxStyle = {
        trainsition: 'height 0.5s ease',
    }
    return(
        <>
            <div className="btn btn-outline-secondary d-flex justify-content-center align-items-center w-100 mt-3"
                data-bs-toggle="collapse" data-bs-target={`#${boxId}`} aria-expanded="false" aria-controls={boxId} style={collapseStyle}>
                    누르면 열림
            </div>
            <div id={boxId} className="collapse" style={boxStyle}>
            <div className="card card-body mt-3">
                <img src={boxImg} alt={`${boxId}img`}/>
            </div>
            </div>
        </>
    )
}