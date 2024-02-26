export default function Footer () {
    const referenceLink = {
        width:'100vw',
    }
    const githubLogo = {
        height:'21px',
    }
    return (
        <div>
            <div id="contact" className="my-5 ms-3 pb-5">
                <div className="container">
                    <h2 className="fs-1 fw-bold mt-5 pb-3">CONTACT</h2>
                    <div className="fs-5">
                        <div className="row">
                            <div className="col-2 fw-bold">Email</div>
                            <div className="col-10">signs-thumbed-0u@icloud.com</div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-2 fw-bold">Phone</div>
                            <div className="col-10">010 7498 1124</div>
                        </div>
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