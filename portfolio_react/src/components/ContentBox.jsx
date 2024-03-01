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
        <div id="text-box" className="ps-3 mt-2">
            <p className="fs-3 mb-0">{title}</p>
            <div id="ref-link" class="my-1">
                <a class="text-decoration-none fw-bold border rounded p-1" href={link}>source</a>
            </div>
            <div>{description}</div>
            <div className="mt-1">{stack}</div>
        </div>
    )
}