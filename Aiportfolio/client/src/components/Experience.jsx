import React from 'react'

const Experience = () => {
   const experiences= [

   {
        id:1,
        Company:"Virtuenaxa",
        Role : "Full Stack Developer " , 
        Duration : "1 Month",
        Technologies : "React.js, Node.js , Express.js , MongoDb" ,
        Description : "Built full-stack web applications using the MERN stack, implemented authentication, REST APIs, responsive interfaces, and integrated AI-powered features while continuously practicing data structures and algorithms."
    },
    {
        id:2,
        Company: "Parihar India Pvt.ltd " ,
        Role :"Web Developer ",
        Duration : "3 Months" ,
        Technologies : "HTML , CSS , Javascript , Nodejs ,Express.js" ,
        Description : "Design  website and implement features and debug and test  "
    },
]
  return (
    
    <div> <h1>My Experiences </h1>
    <section>
    {
        experiences.map((data)=>{

           return <div key={data.id}>
            
            <h2>{data.Company}</h2>
            <p><strong>Role :</strong>{data.Role}</p>
            <p><strong>Duration : </strong>{data.Duration}</p>
            <p><strong>Technologies : </strong>{data.Technologies}</p>
            <p><strong>Description : </strong>{data.Description}</p>
            </div>
    })
    }
    </section>
    </div>

  )

}

export default Experience