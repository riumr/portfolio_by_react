export default function Skills(){
    return (
        <div id="skills" class="my-5">
            <div class="container">
                <h2 class="fs-1 fw-bold mt-5">SKILLS</h2>
                <div class="d-flex">
                    <SkillCategory/>
                    <SkillStacks/>
                </div>
            </div>
        </div>
    )
}

const SkillCategory = () => {
    const skillCategoryGroup = ['Frontend','Backend','Deployment','Cooperation','Communication']
    const skillCategory = skillCategoryGroup.map((name,index) => (
        <div key={index} className="fs-5 mt-1">{name}</div>
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
    const stack = (id,stackList) => (
        <div id={id} className="mt-2">
            {stackList.map((stack,index)=>(
                <span key={index} className="p-1 border rounded bg-secondary bg-opacity-10">{stack}</span>
            ))}
        </div>
    )
    const frontend = stack("frontend",frontendStack)
    const backend = stack("backend",backendStack)
    const deployment = stack("deployment",deploymentStack)
    const cooperation = stack("cooperation",cooperationStack)
    const communication = stack("communication",communicationStack)

    return (
        <div className="ms-5 mt-1">
            {frontend}
            {backend}
            {deployment}
            {cooperation}
            {communication}
        </div>
    )
}