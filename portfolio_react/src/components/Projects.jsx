export default function Projects() {
    return (
        <div id="projects">
            <Container/>
        </div>
    )
}

const Container = () => {
    const textPjtStyle = {
        width:'460px',
        height:'230px',
    }
    return (
        <div class="container">
            <div class="d-flex flex-column">
            <h2 class="fs-1 fw-bold mt-5">PROJECTS</h2>
            <div class="pt-3">
                <Projects/>
            <div>
                <div class="btn btn-outline-secondary d-flex justify-content-center align-items-center w-100 mt-3"
                data-bs-toggle="collapse" data-bs-target="#spaCollapse" aria-expanded="false"
                aria-controls="spaCollapse" style="height: 50px;">
                누르면 열림
                </div>
                <div id="spaCollapse" class="collapse" style="transition: height 0.5s ease">
                <div class="card card-body mt-3">
                    <img src="./images/projects/java-chip/teamPjtImg.png" alt="spaProjectImage"/>
                </div>
                </div>
            </div>
            {/* Team project */}
            <div class="pt-3">
                <h3 class="semibold">Team project</h3>
                <div class="d-flex flex-wrap py-2">
                <div id="siteProject" class="carousel slide border" style="width:460px;height:230px;">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/projects/java-chip/javachip_items.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/projects/java-chip/javachip_item.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/projects/java-chip/javachip_bucket.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/projects/java-chip/javachip_bucket.gif" class="d-block w-100" alt="..."/>
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#siteProject" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" style="color:black">
                        <img src="chevron-compact-left.svg" alt=""/>
                    </span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#siteProject" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" style="color:black">
                        <img src="chevron-compact-right.svg" alt=""/>
                    </span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div id="textBox" class="ps-3">
                    <p class="fs-3 mb-0">Title</p>
                    <a class="text-decoration-none text-dark" href="https://github.com/riumr/Java-chip">source</a>
                    <div>
                    <div>소요기간 : 3주 | 인원 : 4명</div>
                    <div>역할 : 팀장. 발표자. 상품목록∙상품상세 페이지 프론트엔드∙백엔드 개발</div>
                    <div>상품 목록 페이지 및 상품 상세 페이지 프론트엔드 구현</div>
                    <div>REST API 사용 장바구니 기능 구현</div>
                    <div>참고 페이지에서 상품 정보 및 이미지 크롤링, DB에 저장</div>
                    </div>
                    <div>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">HTML</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">CSS</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">bootstrap</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">Django</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">sqlite</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">postgres</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">Figma</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">Discord</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">Notion</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">AWS EC2</span>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <div class="btn btn-outline-secondary d-flex justify-content-center align-items-center w-100 mt-3"
                data-bs-toggle="collapse" data-bs-target="#teamPjtCollapse" aria-expanded="false"
                aria-controls="teamPjtCollapse" style="height: 50px;">
                누르면 열림
                </div>
                <div id="teamPjtCollapse" class="collapse" style="transition: height 0.5s ease">
                <div class="card card-body mt-3">
                    <img src="./images/projects/java-chip/teamPjtImg.png" alt="teamProjectImage"/>
                </div>
                </div>
            </div>
            {/* profile page */}
            <div class="pt-3 pb-5">
                <h3 class="semibold">Profile page</h3>
                <div class="d-flex flex-wrap py-2">
                <div id="profilePage" class="carousel slide border" style="width:460px;height:230px;">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/projects/profile-page/p_1.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/projects/profile-page/p_2.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/projects/profile-page/p_3.png" class="d-block w-100" alt="..."/>
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#profilePage" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" style="color:black">
                        <img src="chevron-compact-left.svg" alt=""/>
                    </span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#profilePage" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" style="color:black">
                        <img src="chevron-compact-right.svg" alt=""/>
                    </span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div id="textBox" class="ps-3">
                    <p class="fs-3 mb-0">Title</p>
                    <a class="text-decoration-none text-dark" href="https://github.com/riumr/display">source</a>
                    <div>
                    <div>인원 : 1명</div>
                    <div>역할 : 프론트엔드 템플릿 구현 및 내용 구성</div>
                    <div>Javascript를 사용하지 않은 프로젝트</div>
                    </div>
                    <div>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">HTML</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">CSS</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">bootstrap</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">Figma</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">Github page</span>
                    </div>
                </div>
                </div>
                <div>
                <div class="btn btn-outline-secondary d-flex justify-content-center align-items-center w-100 mt-3"
                    data-bs-toggle="collapse" data-bs-target="#profileCollapse" aria-expanded="false"
                    aria-controls="profileCollapse" style="height: 50px;">
                    누르면 열림
                </div>
                <div id="profileCollapse" class="collapse" style="transition: height 0.5s ease">
                    <div class="card card-body mt-3">
                    {/* 이미지 삽입 */}
                    </div>
                </div>
                </div>
            </div>
            {/* crud project */}
            <div>
                <h3 class="semibold">CRUD project</h3>
                <div class="d-flex flex-wrap py-2">
                <div id="crudProject" class="carousel slide border" style="width:460px;height:230px;">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/projects/crud-project/1.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/projects/crud-project/2.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/projects/crud-project/3.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/projects/crud-project/4.png" class="d-block w-100" alt="..."/>
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#crudProject" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" style="color:black">
                        <img src="chevron-compact-left.svg" alt=""/>
                    </span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#crudProject" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" style="color:black">
                        <img src="chevron-compact-right.svg" alt=""/>
                    </span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div id="textBox" class="ps-3">
                    <p class="fs-3 mb-0">Title</p>
                    <a class="text-decoration-none text-dark" href="https://github.com/riumr/riumr.github.io">source</a>
                    <div>
                    <div>소요기간 : 3개월 | 인원 : 1명</div>
                    <div>역할 : 프론트엔드 탬플릿 구현, 기능 개발</div>
                    <div>Django 환경에서 crud 구현</div>
                    <div>REST API 개발</div>
                    <div>- 최빈단어 추출해서 게시글 키워드로 추가</div>
                    <div>&emsp;- pyKomoran(한글), nltk(영문) 사용</div>
                    <div>- 게시글 맞춤법 교정</div>
                    <div>&emsp;- hanspell(한글), spellchecker(영문) 사용</div>
                    </div>
                    <div>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">HTML</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">CSS</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">bootstrap</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">Django</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">sqlite</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">Figma</span>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <div class="btn btn-outline-secondary d-flex justify-content-center align-items-center w-100 mt-3"
                data-bs-toggle="collapse" data-bs-target="#crudPjtCollapse" aria-expanded="false"
                aria-controls="crudPjtCollapse" style="height: 50px;">
                누르면 열림
                </div>
                <div id="crudPjtCollapse" class="collapse" style="transition: height 0.5s ease">
                <div class="card card-body mt-3">
                    {/* 레이아웃 삽입 */}
                </div>
                </div>
            </div>
            {/* Text 분석 프로젝트 */}
            <div class="pt-3">
                <h3 class="semibold">Text visualization</h3>
                <div class="d-flex flex-wrap py-2">
                <div class="fw-medium fs-3">
                    <img src="images/projects/text-project/textProject.png" alt="" class="border" style={textPjtStyle}/>
                </div>
                <div id="textBox" class="ps-3">
                    <p class="fs-3 mb-0">Title</p>
                    <a class="text-decoration-none text-dark"
                    href="https://github.com/analysistTH/complaintsAnaysis">source</a>
                    <div>
                    <div>소요기간 : 3개월 | 인원 : 1명</div>
                    <div>역할 : 기획∙분석∙보고서 작성</div>
                    <div>텍스트 데이터 기간별∙카테고리별 분류</div>
                    </div>
                    <div>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">python</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">Google colab</span>
                    <span class="rounded p-1 bg-secondary bg-opacity-10">tableu</span>
                    </div>
                </div>
                </div>
            </div>
            <div class="btn btn-outline-secondary d-flex justify-content-center align-items-center w-100 mt-3"
                data-bs-toggle="collapse" data-bs-target="#textPjtCollapse" aria-expanded="false"
                aria-controls="textPjtCollapse" style="height: 50px;">
                누르면 열림
            </div>
            <div id="textPjtCollapse" class="collapse" style="transition: height 0.5s ease">
                <div class="card card-body mt-3">
                {/* 레이아웃 삽입 */}
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

const Project = (props) => {
    return (
        <div className="pt-3">
            <h3 className="semibold">{props.projectName}</h3>
            <div className="d-flex flex-wrap py-2">
                <Carousel/>
                <ContentBox/>
            </div>
        </div>
    )
}

const Carousel = (props) => {
    const imgSource = [
        "images/projects/react-spa/react-spa-project.png",
        "images/projects/java-chip/javachip_item.jpg",
        "images/projects/java-chip/javachip_bucket.jpg",
        "images/projects/java-chip/javachip_bucket.gif",
    ]
    const carouselBoxSize = {
        width:'460px',
        height:'230px',
    }
 
    const carouselButtonStyle = { 
        color:'black',
    }

    const carouselHandler = (prevOrNext,imgSrc) =>{
        <button className={`carousel-control-${prevOrNext}`} type="button" data-bs-target="spaProject" data-bs-slide={`${prevOrNext}`}>
            <span className={`carousel-control-${prevOrNext}-icon`} aria-hidden="true" style={carouselButtonStyle}>
                <img src={imgSrc} alt="..."/>
            </span>
            <span className="visually-hidden">{prevOrNext}</span>
        </button>
    }
    
    const imgCarousel = (sourceList) => (
        <div className="carousel-inner">
            <div className="carousel-item">
                {sourceList.map((index,source)=>(
                    <img key={index} src={source} className="d-block w-100" alt="..."/>
                ))}
            </div>
        </div>
    )
    return (
        <div id={props.id} className="carousel slide border" style={carouselBoxSize}>
            {imgCarousel("spaProject",imgSource)}
            {carouselHandler("prev","chevron-compact-left.svg")}
            {carouselHandler("next",'chevron-compact-right.svg')}
        </div>
    )
}

const ContentBox = (props) => {
    const descriptionContent = [
        '소요기간 : 4주 | 인원 : 1명',
        '역할 : 프론트엔드 기능 및 레이아웃 개발',
        'supabase를 사용해 DB crud 구현',
        'react useEffect, useState hook을 사용해 SPA 게시판 구현',
        'firebase hosting을 사용해 배포',
    ]
    // descriptionContent => props.contentFile.description으로 교체
    const stackContent = ['React','supabse','Firebase','Figma']
    const description = descriptionContent.map((content,index)=>(
        <div key={index}>{content}</div>
    ))
    const stack = stackContent.map((name,index)=>(
        <span key={index} className="rounded p-1 bg-secondary bg-opacity-10">{name}</span>
    ))
    return (
        <div id="textBox" className="ps-3">
            <p className="fs-3 mb-0">{props.title}</p>
            <a className="text-decoration-none text-dark" href={props.link}>source</a>
            <div>{description}</div>
            <div>{stack}</div>
        </div>
    )
}

const CollapseBox = () => {
    
}