export default function ContentBox (props) {
    const title = props.title
    const link = props.link
    const site = props.site
    const contentAbout = props.contentAbout
    const stackContent = props.stackContent
    const description = Object.values(contentAbout).map((content,index)=>(
        <div key={index}>{content}</div>
    ))
    const stack = stackContent.map((name,index)=>(
        <div key={index} className="rounded p-1 ms-1 mt-1 bg-secondary bg-opacity-10">{name}</div>
    ))
    let sourceStyle = {
        textDecoration: 'none',
        fontWeight: 'bold',
        border: '1px solid black',
        // borderRadius: '0.25rem',
        padding: '0.25rem',
    }
    let siteStyle = {
        ...sourceStyle,
    };

    if (site===""){
        siteStyle={
            display:'none',
        }
    }
    return (
        <div id="text-box" className="ps-3 mt-2 col-0 col-md-8">
            <p className="fs-3 mb-0">{title}</p>
            <div id="ref-link" class="my-1">
                <a id="source-link" href={link} style={sourceStyle}>source</a>
                <a id="site-link" href={site} style={siteStyle} className="ms-1">site</a>
            </div>
            <div>{description}</div>
            <div className="d-flex flex-wrap">{stack}</div>
        </div>
    )
}