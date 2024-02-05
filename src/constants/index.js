import {
    //cards
    mobile,
    backend,
    creator,
    web,
    bhlogo,

    //skills
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    threejs,
    git,
    c,
    mysql,
    java,
    net,
    microsoft,
    vscode,

    //projects
    websiteresume,
    banksystem,
    p2p,
    contactapp,
    adobesign,

    //jobs
    intellectsystems,
    raiders,
    whp,
    kmart,
    aidacare,
    membrillo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "C# & .NET Core Developer",
      icon: web,
    },
    {
      title: "Mobile App Development",
      icon: mobile,
    },
    {
      title: "SQL Databases",
      icon: backend,
    },
    {
      title: "Microsoft 365 Stack",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "c#",
      icon: c,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: ".Net",
      icon: net,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "microsoft",
      icon: microsoft,
    },
    {
      name: "vscode",
      icon: vscode,
    },
  ];
  
  const experiences = [
    {
      title: "Information Technnology Undergraduate",
      company_name: "Intellect Systems",
      icon: intellectsystems,
      iconBg: "#ADD8E6",
      date: "January 2024 - Present",
      points: [
        "Spearheading collaborative efforts among various departments to identify opportunities for software solutions that streamline processes and elevate operational efficiency.",
        "Researching, implementing, and managing innovative software solutions aimed at addressing specific organisational challenges and driving continuous improvement.",
        "Working closely under the guidance of the Managing Director, I assist in crucial decision-making processes and contribute to the strategic direction of our software initiatives."
      ],
    },
    {
      title: "Information Technnology Intern",
      company_name: "Intellect Systems",
      icon: intellectsystems,
      iconBg: "#ADD8E6",
      date: "October 2023 - January 2024",
      points: [
        "Researched and recommended innovative software solutions for workflow automation enhancement.",
        "Implemented software seamlessly integrated into Microsoft systems for enhanced operational efficiency.",
        "Applied Software Life Cycle Development and Scrum methodologies, ensuring agile and timely software delivery.",
        "Contributed valuable insights in meetings with the Managing Director, guiding strategic processes and software implementation.",
      ],
    },
    {
      title: "Warehouse Employee",
      company_name: "Aidacare",
      icon: aidacare,
      iconBg: "#CFFBCF",
      date: "November 2022 - November 2023",
      points: [
        "Managed stock inventory and organized warehouse logistics to optimize efficiency.",
        "Facilitated timely delivery of medical supplies to clients and hospitals for loan and testing purposes, ensuring prompt and reliable service.",
        "Spearheaded the setup and assembly of beds and amenities for clients and hospitals, contributing to a comfortable and functional environment.",
        "Coordinated with suppliers and streamlined delivery processes, enhancing the overall efficiency of medical supply distribution within the warehouse."
      ],
    },
    {
      title: "Warehouse Employee",
      company_name: "Membrillo",
      icon: membrillo,
      iconBg: "#FFFFFF",
      date: "Feburary 2022 - June 2022",
      points: [
        "Orchestrated efficient warehouse operations, overseeing the careful handling and storage of fresh fruits and vegetables to maintain quality and freshness.",
        "Executed meticulous inventory management, ensuring accurate stock levels and timely rotation of produce to minimize waste and optimize product quality.",
        "Collaborated with team members to implement effective quality control measures, contributing to the delivery of high-quality fresh produce to clients while adhering to food safety standards.",
      ],
    },
    {
      title: "Data Entry",
      company_name: "Work Health Professionals",
      icon: whp,
      iconBg: "#383E56",
      date: "December 2020 - June 2022",
      points: [
        "Accurately inputted workers' hearing compensation data into WorkCover WA database, ensuring meticulous record-keeping.",
        "Played a key role in various office tasks, specializing in scanning, data entry, and document printing to support seamless operations.",
        "Contributed to efficient business processes and client communication by handling callbacks with a focus on delivering exceptional results in a timely manner."
      ],
    },
    {
      title: "Retail Member",
      company_name: "K-Mart",
      icon: kmart,
      iconBg: "#FFFFFF",
      date: "September 2019 - June 2020",
      points: [
        "Provided excellent customer service by accurately processing transactions and managing inventory to meet customer needs.",
        "Contributed to the overall store organization and efficiency by executing tasks such as restocking shelves, arranging displays, and ensuring a neat and inviting shopping environment.",
        "Actively engaged with customers to address inquiries, resolve issues, and enhance their shopping experience, demonstrating a commitment to customer satisfaction and retention.",
      ],
    },
    {
      title: "Under 12's Basketball Coaching",
      company_name: "Raider's Basketball",
      icon: raiders,
      iconBg: "#E6DEDD",
      date: "April 2020 - October 2020",
      points: [
        "Developed and implemented age-appropriate basketball training programs, fostering skill development and teamwork among young athletes.",
        "Provided mentorship and guidance to under 12s basketball players, emphasizing sportsmanship, discipline, and a positive team culture.",
        "Organized and conducted engaging practice sessions, focusing on skill drills, strategy development, and creating a supportive environment to nurture the players' passion for the sport.",
      ],
    },
  ];
  
  const testimonials = [
    /*{
      
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Jason Monzu",
      designation: "Managing Director",
      company: "Intellect Systems",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    */
  ];
  
  const projects = [
    {
      name: "Adobe Sign Integration",
      description:
        "Developing and integrating an advanced workflow automation program to enhance workplace efficiency and accelerate document handling, including sending, receiving, and signing agreements.",
      tags: [
        {
          name: "Adobe",
          color: "blue-text-gradient",
        },
        {
          name: "Microsoft",
          color: "green-text-gradient",
        },
        {
          name: "Research",
          color: "orange-text-gradient",
        },
        {
          name: "Scrum",
          color: "pink-text-gradient",
        },
      ],
      image: adobesign,
      source_code_link: "https://www.adobe.com/au/sign.html",
    },
    {
      name: "This Website",
      description:
        "Using React and Tailwind, my website highlights my professional journey and projects. It engages contacts and recruiters, presenting experience effectively with a user-friendly interface for seamless communication.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "orange-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: websiteresume,
      source_code_link: "https://github.com/Brandon-Hale/ResumeWebsite",
    },
    {
      name: "Distributed Bank System",
      description:
        "A web-based banking service using C# and the .NET framework, powered by a SQLite database. Users securely log in, manage details, and initiate transactions across instances, updating balances in real-time.",
      tags: [
        {
          name: "C Sharp",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET",
          color: "green-text-gradient",
        },
        {
          name: "REST API",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "orange-text-gradient",
        },
      ],
      image: banksystem,
      source_code_link: "https://github.com/Brandon-Hale/DistributedBankSystem",
    },
    {
      name: "P2P Python Job Posting",
      description:
        "Developed in C# and leveraging the .NET framework, this peer-to-peer application seamlessly integrates Rest APIs. Users can effortlessly upload Python jobs and receive results from other active servers or clients in real-time.",
      tags: [
        {
          name: "C Sharp",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET",
          color: "green-text-gradient",
        },
        {
          name: "SQLite",
          color: "pink-text-gradient",
        },
        {
          name: "REST API",
          color: "orange-text-gradient",
        },
      ],
      image: p2p,
      source_code_link: "https://github.com/Brandon-Hale/P2PIronPython",
    },
    {
      name: "Mobile Contacts App",
      description:
        "An Android app developed in Java and Android Studio, featuring a database to store and update contacts. It allows for easy contact updates using the camera and additional details. Furthermore, it supports importing contacts from the default application into a list.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "SQLite",
          color: "green-text-gradient",
        },
        {
          name: "App2App",
          color: "pink-text-gradient",
        },
        {
          name: "Android studio",
          color: "orange-text-gradient",
        },
      ],
      image: contactapp,
      source_code_link: "https://github.com/Brandon-Hale/ContactListApp",
    }, 
  ];
  
  export { services, technologies, experiences, testimonials, projects };