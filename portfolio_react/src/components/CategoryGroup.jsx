export default function CategoryGroup() {
    const categoryGroupWidth = {
        width:'60rem',
    }
    return (
        <div id="buttonToTitle" className="d-flex justify-content-center">
            <div className="row text-center mx-3 fs-3 gx-3" style={categoryGroupWidth}>
                <Category/>
            </div>
        </div>
    )
}

const Category = () =>{
    const categoryList=["skills","projects","contact","github"]
    const categoryStyle = {
        width:'145px',
    }
    const categoryBlock = categoryList.map((name,index)=>
        <div key={index} className="py-1 border border-dark rounded fw-semibold" style={categoryStyle}>
            <a href={`#${name}`} className="text-decoration-none text-black">{name.toUpperCase()}</a>
        </div>
    )
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {categoryBlock}
        </div>
    )
}