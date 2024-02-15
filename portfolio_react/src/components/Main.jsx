export default function Main() {
    return (
        <>
            <Skills/>
            <SkillStacks/>
        </>
    )
}

const Skills = () => {
    return (
        <div id="skills" class="my-5">
            <div class="container">
                <h2 class="fs-1 fw-bold mt-5">SKILLS</h2>
                <div class="d-flex">
                <SkillCategory/>
                <div class="ms-5 mt-1">
                    <div id="frontend" class="mt-2">
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">HTML</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">CSS</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Javascript</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">React</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Bootstrap</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">tailwind CSS</span>
                    </div>
                    <div id="backend" class="mt-2">
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Python</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Django</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">splite</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">R</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Google Colab</span>
                    </div>
                    <div id="deployment" class="mt-2">
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">AWS</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Firebase</span>
                    </div>
                    <div id="cooperation" class="mt-2">
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Git</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Github</span>
                    </div>
                    <div id="communication" class="mt-2">
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Figma</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Slack</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Notion</span>
                    <span class="p-1 border rounded bg-secondary bg-opacity-10">Discord</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const SkillCategory = () => {
    const skillCategoryGroup = ['Frontend','Backend','Deployment','Cooperation','Communication']
    const skillCategory = skillCategoryGroup.map((name,index) => 
        <div key={index} className="fs-5 mt-1">{name}</div>
    )
    return (
        <>{skillCategory}</>
    )
}

const SkillStacks = () => {
    const frontendStack = ['HTML','CSS','Javascript','React','Bootstrap','Tailwind CSS']
    const backendStack = ['Python','Django','sqlite','supabase','R','Google Colab']
    const deploymentStack = ['Firebase','AWS']
    const cooperationStack = ['Git','Github']
    const communicationStack = ['Figma','Slack','Notion','Discord']
    const stack = (id,stackList) => {
        <div id={id} className="mt-2">
            {stackList.map((stack,index)=>
                <span key={index} className="p-1 border rounded bg-secondary bg-opacity-10">{stack}</span>
            )}
        </div>
    }
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