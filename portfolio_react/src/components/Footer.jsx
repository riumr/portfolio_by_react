export default function Footer () {
    const contactStyle = {
        width:'50vw',
    }
    const emailStyle = {
        paddingLeft:'6rem',
    }
    const phoneStyle = {
        paddingLeft:'5.5rem',
    }
    const referenceLink = {
        width:'100vw',
    }
    const githubLogo = {
        height:'21px',
    }
    return (
        <div>
            <div id="contact" className="d-flex justify-content-center my-5 pb-5">
            <div>
                <h2 className="fs-1 fw-bold mt-5 pb-3">CONTACT</h2>
                <div className="fs-5" style={contactStyle}>
                    <p>Email<span style={emailStyle}>signs-thumbed-0u@icloud.com</span></p>
                    <p>Phone<span style={phoneStyle}>010 7498 1124</span></p>
                </div>
            </div>
            </div>
            <div id="github" className="d-flex flex-column justify-content-center align-items-center py-5 bg-light fs-5" style={referenceLink}>
                <p>
                    <img src="images/etc/github-logo.png" alt="github-logo" style={githubLogo} />
                    <a href="https://github.com/riumr" className="text-decoration-none text-black ms-1">Github</a>
                    <a href=".." className="text-decoration-none text-black ms-1"> | Blog</a>
                </p>
                <p>© Kim tae hyoung. All rights reserved</p>
            </div>
            <div id="pageUpButton" className="fs-2 fw-bold border rounded-circle px-3">
                <a href="#pageTitle" className="text-decoration-none text-black">↑</a>
            </div>
        </div>
    )
}