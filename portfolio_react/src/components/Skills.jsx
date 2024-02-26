export default function Skills(){
    return (
        <div id="skills" className="my-5">
            <div className="container">
                <h2 className="fs-1 fw-bold mt-5 mb-4">SKILLS</h2>
                    <SkillStacks/>
            </div>
        </div>
    )
}

const SkillStacks = () => {
    const frontendStack = ['HTML','CSS','Javascript','React','Bootstrap','Tailwind CSS']
    const backendStack = ['Python','Django','sqlite','supabase','R','Google Colab']
    const deploymentStack = ['Firebase','AWS']
    const cooperationStack = ['Git','Github']
    const communicationStack = ['Figma','Slack','Notion','Discord']

    const stack = (id,stackCategory,stackList) => (
        <div className="row">
            <div className="col-4 fw-bold fs-4 mb-3">{stackCategory}</div>
            <div className='col-8' id={id}>
                {stackList.map((stack,index)=>(
                    <span key={index} className="fs-4 p-1 ms-1 border rounded bg-secondary bg-opacity-10">{stack}</span>
                ))}
            </div>
        </div>
    )

    const frontend = stack("frontend",'Frontend',frontendStack)
    const backend = stack("backend",'Backend',backendStack)
    const deployment = stack("deployment",'Deployment',deploymentStack)
    const cooperation = stack("cooperation",'Cooperation',cooperationStack)
    const communication = stack("communication",'Communication',communicationStack)

    return (
        <div>
            {frontend}
            {backend}
            {deployment}
            {cooperation}
            {communication}
        </div>
    )
}