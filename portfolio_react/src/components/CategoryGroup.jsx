export default function CategoryGroup() {
    const categoryWidth = {
        width:'60rem',
    }
    
    return (
        <div id="buttonToTitle" class="d-flex justify-content-center">
            <div class="row text-center mx-3 fs-3 gx-3" style={categoryWidth}>
                <Category/>
            </div>
        </div>
    )
}

const Category = (props) =>{
    const categoryList=["skills","projects","contact","github"]
    const categoryBlock = categoryList.map((name,index)=>
        <div key={index} className="col-sm-3 border border-dark rounded py-2 fw-semibold">
                <a href={`#${name}`} className="text-decoration-none text-black">{name.toUpperCase()}</a>
        </div>
    )
    return (
        <>
            {categoryBlock}
        </>
    )
}