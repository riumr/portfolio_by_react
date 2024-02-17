export default function ContentBox (props) {
    const title = props.title
    const link = props.link
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
            <p className="fs-3 mb-0">{title}</p>
            <a className="text-decoration-none text-dark" href={link}>source</a>
            <div>{description}</div>
            <div>{stack}</div>
        </div>
    )
}