export default function Skills(){
    return (
        <div id="skills" className="my-5">
            <div className="container">
                <h2 className="fs-1 fw-bold mt-5">SKILLS</h2>
                <div className="d-flex">
                    <SkillCategory/>
                    <SkillStacks/>
                </div>
            </div>
        </div>
    )
}

const SkillCategory = () => {
    const skillCategoryGroup = ['Frontend','Backend','Deployment','Cooperation','Communication']
    const categoryStyle = {margin:'15px 0 0 0'}
    const skillCategory = skillCategoryGroup.map((name,index) => (
        <div key={index} className="fw-bold fs-5" style={categoryStyle}>{name}</div>
    ))
    return (
        <div className="d-block">{skillCategory}</div>
    )
}

const SkillStacks = () => {
    const frontendStack = ['HTML','CSS','Javascript','React','Bootstrap','Tailwind CSS']
    const backendStack = ['Python','Django','sqlite','supabase','R','Google Colab']
    const deploymentStack = ['Firebase','AWS']
    const cooperationStack = ['Git','Github']
    const communicationStack = ['Figma','Slack','Notion','Discord']

    const stack = (id,stackList,stackStyle) => (
        <div id={id} style={stackStyle}>
            {stackList.map((stack,index)=>(
                <span key={index} className="p-1 ms-1 border rounded bg-secondary bg-opacity-10">{stack}</span>
            ))}
        </div>
    )
    
    const stackStyle = {margin:'20px 0 0 0'}

    const frontend = stack("frontend",frontendStack,stackStyle)
    const backend = stack("backend",backendStack,stackStyle)
    const deployment = stack("deployment",deploymentStack,stackStyle)
    const cooperation = stack("cooperation",cooperationStack,stackStyle)
    const communication = stack("communication",communicationStack,stackStyle)

    return (
        <div className="ms-5">
            {frontend}
            {backend}
            {deployment}
            {cooperation}
            {communication}
        </div>
    )
}