import React from 'react'
const Skills = () => {
    const Fronted = [
        "HTML" , "CSS" , "Javascript" , "React.js"
    ]
    const Backend = ["Node.js" , "Express.js" , "JWT"]
    const Database = ["MongoDB" , "SQL"]
    const ProgrramingLanguages = ["C++" , "Javascript"]
    const Tools = ["Git", "Github" , "Render" , "Vercal" , "Postman"]
  return (
    <div> My Skills
    <section className='skillssection'>
        <h2>Fronted</h2>
        <ul>
            {
                Fronted.map((data)=>{
                    return <li key={data.id}>{data}</li>
                })
                
            }
        </ul>
        <h2>Backend</h2>
        <ul>
            {
                Backend.map((data)=>{
                    return <li key={data.id}>{data}</li>
                })
            }
        </ul>
        <h2>Database</h2>
        <ul>
            {
                Database.map((data)=>{
                    return <li key={data.id}>{data}</li>
                })
                
            }
        </ul>
    
        <h2>Programming Languages</h2>
        <ul>
            {
                ProgrramingLanguages.map((data)=>{
                    return <li key={data.id}>{data}</li>
                })
                
            }
        </ul>
    
        <h2>Tools</h2>
        <ul>
            {
                Tools.map((data)=>{
                    return <li key={data.id}>{data}</li>
                })
                
            }
        </ul>
    </section>
    </div>
  )
}

export default Skills