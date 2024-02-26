export default function ContentBox (props) {
    const title = props.title
    const link = props.link
    const contentAbout = props.contentAbout
    const stackContent = props.stackContent
    const description = Object.values(contentAbout).map((content,index)=>(
        <div key={index}>{content}</div>
    ))
    const stack = stackContent.map((name,index)=>(
        <span key={index} className="rounded p-1 ms-1 bg-secondary bg-opacity-10">{name}</span>
    ))
    return (
        <div id="textBox" className="ps-3">
            <p className="fs-3 mb-0">{title}</p>
            <a className="text-decoration-none text-dark" href={link}>source</a>
            <div>{description}</div>
            <div className="mt-1">{stack}</div>
        </div>
    )
}