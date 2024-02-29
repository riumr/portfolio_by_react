import Carousel from "./Carousel"
import ContentBox from "./ContentBox"
import CollapseBox from "./CollapseBox"
import { spaPjtImg } from "./ImgPath"
import { spaPjtContent,djangoPjtContent,profilePjtContent,textPjtContent } from "./Contents"
import { spaPjtStack,djangoPjtStack,profilePjtStack,textPjtStack } from "./Contents"

export default function Projects() {
    return (
        <div id="projects">
            <div className="container">
                <div className="d-flex flex-column">
                    <h2 className="fs-1 fw-bold mt-5">PROJECTS</h2>
                    {/* Personal Project */}
                    <div className="pt-3">
                        <Project 
                            projectName="Personal Project" carouselId="" carouselImg={spaPjtImg}
                            contentTitle="SPA 게시판" contentAbout={spaPjtContent} stackContent={spaPjtStack} contentLink=""
                        />
                        <CollapseBox boxId="spa" boxImgSrc='./image/reactSpaProject.png'/>

                    </div>
                    {/* Team Project */}
                    <div className="pt-3">
                        <Project
                            projectName="Team Project" carouselId="" carouselImg={spaPjtImg} 
                            contentTitle="원두판매사이트" contentAbout={djangoPjtContent} stackContent={djangoPjtStack} contentLink=""
                        />
                        <CollapseBox boxId="" boxImgSrc=""/>
                    </div>
                    {/* profile page */}
                    <div className="pt-3">
                        <Project
                            projectName="Profile Page" carouselId="" carouselImg={spaPjtImg} 
                            contentTitle="포트폴리오" contentAbout={profilePjtContent} stackContent={profilePjtStack} contentLink=""
                        />
                    </div>
                    {/* Text 분석 프로젝트 */}
                    <div className="pt-3">
                        <Project
                            projectName="Text Analysis Project" carouselId="" carouselImg={spaPjtImg} 
                            contentTitle="민원 데이터 시각화" contentAbout={textPjtContent} stackContent={textPjtStack} contentLink=""
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
    const stackContent = props.stackContent
    const contentLink = props.contentLink
    return (
        <div className="pt-3">
            <h3 className="semibold">{props.projectName}</h3>
            <div className="d-flex flex-wrap py-2 ps-2">
                <Carousel carouselId={carouselId} carouselImg={carouselImg}/>
                <ContentBox title={contentTitle} contentAbout={contentAbout} stackContent={stackContent} link={contentLink}/>
            </div>
        </div>
    )
}