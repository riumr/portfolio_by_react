export default function CollapseBox (props) {
    const boxId = props.boxId
    const boxImg = props.boxImg
    const collapseStyle = {
        height:'50px',
    }
    const boxStyle = {
        transition: 'height 0.5s ease',
    }
    return(
        <>
            <div className="btn btn-outline-secondary w-100 py-3">상세내용 보기</div>
        </>
        // <>
        //     <div className="btn btn-outline-secondary d-flex justify-content-center align-items-center w-100 mt-3"
        //         data-bs-toggle="collapse" data-bs-target={`#${boxId}`} aria-expanded="false" aria-controls={boxId} style={collapseStyle}>
        //             상세내용 보기
        //     </div>
        //     <div id={boxId} className="collapse" style={boxStyle}>
        //         <div className="card card-body mt-3">
        //             <img src='./image/github-logo.png' alt={`${boxId}img`}/>
        //         </div>
        //     </div>
        // </>
    )
}