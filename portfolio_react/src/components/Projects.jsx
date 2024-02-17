import Carousel from "./Carousel"
import ContentBox from "./ContentBox"
import CollapseBox from "./CollapseBox"

export default function Projects() {
    return (
        <div id="projects">
            <div className="container">
                <div className="d-flex flex-column">
                    <h2 className="fs-1 fw-bold mt-5">PROJECTS</h2>
                    {/* Personal Project */}
                    <div className="pt-3">
                        <Project projectName="Personal Project" carouselId="" contentTitle="" contentDescription=""/>
                        <CollapseBox boxId="" boxImgSrc=""/>
                    </div>
                    {/* Team Project */}
                    <div className="pt-3">
                        <Project projectName="Team Project" carouselId="" contentTitle="" contentDescription=""/>
                        <CollapseBox boxId="" boxImgSrc=""/>
                    </div>
                    {/* profile page */}
                    <div className="pt-3">
                        <Project projectName="Profile Page" carouselId="" contentTitle="" contentDescription=""/>
                        <CollapseBox boxId="" boxImgSrc=""/>
                    </div>
                    {/* crud project */}
                    <div className="pt-3">
                        <Project projectName="CRUD Project" carouselId="" contentTitle="" contentDescription=""/>
                        <CollapseBox boxId="" boxImgSrc=""/>
                    </div>
                    {/* Text 분석 프로젝트 */}
                    <div className="pt-3">
                        <Project projectName="Text Analysis Project" carouselId="" contentTitle="" contentDescription=""/>
                        <CollapseBox boxId="" boxImgSrc=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Project = (props) => {
    const carouselId = props.carouselId
    const contentTitle = props.contentTitle
    const contentDescription = props.contentDescription
    return (
        <div className="pt-3">
            <h3 className="semibold">{props.projectName}</h3>
            <div className="d-flex flex-wrap py-2">
                <Carousel carouselId={carouselId}/>
                <ContentBox title={contentTitle} description={contentDescription}/>
            </div>
        </div>
    )
}