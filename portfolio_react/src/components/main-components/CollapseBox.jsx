import { useState } from "react";
export default function CollapseBox (props) {
    const [isCollpased,setCollpased] = useState(true)

    const boxId = props.boxId
    const boxImg = props.boxImg

    const collpaseTrigger = () => {
        setCollpased(!isCollpased)
    }

    const collpased = {
        height:'0s',
        backgroundColor:'gray',
        transition:'height 0.3s ease',
    }
    const notCollpased = {
        height:'max-content',
        overflow:'hidden',
        transition:'height 0.3s ease'
    }
    const imgStyle = {
        width:'100%',
        height:'100%',
    }

    return(
        <>
            <div onClick={collpaseTrigger} id="collpase-button" className="btn btn-outline-dark w-100 py-3">상세내용 보기</div>
            <div id={boxId}>
                {
                    isCollpased===true? (
                        <div style={collpased}></div>
                    ):(
                        <div style={notCollpased}>
                            <img src={boxImg} alt={boxId} style={imgStyle} />
                            {/* <iframe src="https://github.com/riumr/browse_supabase" width="1000" height="400" frameborder="0"></iframe> */}
                        </div>
                    )
                }
            </div>
        </>
    )
}