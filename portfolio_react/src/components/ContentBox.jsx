export default function ContentBox (props) {
    const title = props.title
    const link = props.link
    const contentAbout = props.contentAbout
    // contentAbout => props.contentFile.description으로 교체
    const stackContent = ['React','supabse','Firebase','Figma']
    const description = Object.values(contentAbout).map((content,index)=>(
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