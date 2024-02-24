export default function CategoryGroup() {
    const categoryWidth = {
        width:'60rem',
    }
    return (
        <div id="buttonToTitle" className="d-flex justify-content-center">
            <div className="row text-center mx-3 fs-3 gx-3" style={categoryWidth}>
                <Category/>
            </div>
        </div>
    )
}

const Category = () =>{
    const categoryList=["skills","projects","contact","github"]
    const categoryBlock = categoryList.map((name,index)=>
        <div key={index} className="ms-3 border border-dark rounded px-5 py-2 fw-semibold">
            <a href={`#${name}`} className="text-decoration-none text-black">{name.toUpperCase()}</a>
        </div>
    )
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {categoryBlock}
        </div>
    )
}