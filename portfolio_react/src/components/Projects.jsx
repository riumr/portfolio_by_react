import Carousel from "./Carousel"
import ContentBox from "./ContentBox"
import CollapseBox from "./CollapseBox"
import { spaPjtImg } from "./ImgPath"
import { spaPjtContent } from "./Contents"

export default function Projects() {
    console.log(typeof spaPjtContent)
    return (
        <div id="projects">
            <div className="container">
                <div className="d-flex flex-column">
                    <h2 className="fs-1 fw-bold mt-5">PROJECTS</h2>
                    {/* Personal Project */}
                    <div className="pt-3">
                        <Project 
                            projectName="Personal Project" carouselId="" carouselImg={spaPjtImg}
                            contentTitle="SPA 게시판" contentAbout={spaPjtContent} contentLink=""
                        />
                        <CollapseBox boxId="spa" boxImgSrc="image/spaCollpaseImg.png"/>
                    </div>
                    {/* Team Project */}
                    <div className="pt-3">
                        <Project
                            projectName="Team Project" carouselId="" carouselImg={spaPjtImg} 
                            contentTitle="" contentAbout='' contentLink=""
                        />
                        <CollapseBox boxId="" boxImgSrc=""/>
                    </div>
                    {/* profile page */}
                    <div className="pt-3">
                        <Project
                            projectName="Profile Page" carouselId="" carouselImg={spaPjtImg} 
                            contentTitle="" contentAbout='' contentLink=""
                        />
                    </div>
                    {/* Text 분석 프로젝트 */}
                    <div className="pt-3">
                        <Project
                            projectName="Text Analysis Project" carouselId="" carouselImg={spaPjtImg} 
                            contentTitle="" contentAbout='' contentLink=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Project = (props) => {
    const carouselId = props.carouselId
    const carouselImg = props.carouselImg
    const contentTitle = props.contentTitle
    const contentAbout = props.contentAbout
    const contentLink = props.contentLink
    return (
        <div className="pt-3">
            <h3 className="semibold">{props.projectName}</h3>
            <div className="d-flex flex-wrap py-2">
                <Carousel carouselId={carouselId} carouselImg={carouselImg}/>
                <ContentBox title={contentTitle} contentAbout={contentAbout} link={contentLink}/>
            </div>
        </div>
    )
}