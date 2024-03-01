export default function Footer () {
    const referenceLink = {
        width:'100vw',
    }
    const githubLogo = {
        height:'21px',
    }
    return (
        <div>
            <div id="contact" className="my-5 py-5">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className="fs-1 fw-bold mt-5 pb-3">CONTACT</h2>
                    <div className="fs-4">
                        <div className="my-5">signs-thumbed-0u@icloud.com</div>
                    </div>
                </div>
            </div>
            <div id="github" className="d-flex flex-column justify-content-center align-items-center py-5 bg-light fs-5" style={referenceLink}>
                <p>
                    <img src='./image/github-logo.png' alt="github-logo" style={githubLogo} />
                    <a href="https://github.com/riumr" className="text-decoration-none text-black ms-1">Github</a>
                    <a href=".." className="text-decoration-none text-black ms-1"> | Blog</a>
                </p>
                <p>© Kim tae hyoung. All rights reserved</p>
            </div>
            <div id="page-up-button" className="fs-2 fw-bold border rounded-circle px-3">
                <a href="#pageTitle" className="text-decoration-none text-black">↑</a>
            </div>
        </div>
    )
}