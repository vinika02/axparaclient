

const candidatecsv = {
    getSkills(){
      let data = {
        primarySkills:[
                 
        ],
        otherSkills:[
            'Adobe Photoshop',
            'Adobe XD',
            'Autocad',
            'Agile',
            'Apiary',
            'Angular',
            'Amazon',
            'Microsoft Access',
            'HTML',
            'Android',
            'Adobe Creative Suite',
            'iOS',
            'AWS',
            'Graphic Design',
            'Bootstrap',
            'CSS',
            'Copywriting',
            'Creative Content Creation',
            'Database: MySQL',
            'DOCKER',
            'Fullstack',
            'Git',
            'HTML 5',
            'Java',
            'Javascript',
            'NodeJs',
            'PHP',
            'SEO',
            'Social Media Marketing',
            'Spring Boot',
            'Content Strategy',
            'Asp.Net',
            'OAuth2',
            '.Net',
            'C#',
            'PostreSQL',
            'Project Management',
            'Product Management',
            'Product Roadmap',
            'Python',
            'React Native',
            'UX/UI Design',
            'Marketing',
            'Front End Development',
            'React Js',
            'React',
            'REST API',
            'Software Development Life Cycle',
            'Scrum',
            'Symfony',
            'MVVM',
            'Swift',
            'Objective - C',
            'Typescript',
            'Vue.JS',
            'Laravel',
            'CodeIgniter',
            'Scrum Master',
            'Graphics Designer',
            'Frontend',
            'Backend',
        ],
      }
      return data;
    },
    getOtherSkills(){
       let data =[
        {name:'Mobile', data:[
           {
             skill: 'Android',
             data:['HTML', 'CSS', 'Javascript']
           },
           {
            skill: 'iOS',
            data:['Vue.js', 'Angular', 'Bootstrap']
           },
           {
            skill: 'Cross Platform',
            data:['Xamarin', 'React Native', 'Javascript', 'Typescript']
           },
        ]},
        {name:'Tech Management', data:[
          {
            skill: 'Project Management',
            data:['Agile', 'Waterfall', 'Scrum']
          },
          {
           skill: 'Product Management',
           data:['Technical Expertise', 'Strategic Thinking']
          },
          {
           skill: 'Business Analysis',
           data:['Business Analysis', 'Costs-Benefit Analysis']
          },
        ]},
        {name:'Backend', data:[
          {
            skill: 'Language',
            data:['Ruby', 'PHP', 'JAVA', 'Django', '.Net', 'Python', 'Python', 'Express.js', 'Ingers', 'Firebird']
          },
          {
           skill: 'Frameworks',
           data:['Django', 'Express.js', 'Ruvy on Rails', 'Laravel', 'Codeigniter']
          }
         
        ]},
        {name:'Database', data:[
          {
            skill: 'Data Storage  (RDBMS)/ Server',
            data:['Mongo DB', 'PostgreSQL', 'Oracle', 'IMB Db2', 'IMB Db2', 'SQLite', 'Firebird', 'Microsoft Access', 'MySQL']
          },
          {
           skill: 'Data Query Language (DQL)',
           data:['SQL', 'YQL']
          },
          {
           skill: 'Data Analytics/data Science',
           data:['Scala', 'Hadoop']
          }         
        ]},
        {name:'Web Platforms', data:[
          {
            skill: '',
            data:['Wordpress', 'Shopify', 'Amazon', 'Amazon']
          },      
          {
            skill: 'Design',
            data:['Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Unreal Engine', 'Autocad', 'InVision', 'Blender 3D']
          },      
        ]},
        {name:'Business', data:[
          {
            skill: 'Sales & Marketing',
            data:['SEO', 'B2B', 'Javascript']
          }, 
          {
            skill: 'Human Resource',
            data:['Training & Development', 'Training & Development']
          }, 
          {
            skill: 'Administrative',
            data:['Copywriting', 'Transcription']
          },         
        ]},      
            
       ]
       
       return data;
    },
    getData(){
        let date =  new Date();
        const monthShort = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        let currentDate =  date.getDate()+" "+monthShort[date.getMonth()];

        var schedule =  [
          currentDate+" "+"| 1:00 pm",
          currentDate+" "+"| 3:00 pm",
          currentDate+" "+"| 4:00 pm",
        ];
        let data = [
            {
              "TalentID": "ASA - 00532",
              "Skills":[
                ".Net",
                 "C#"
              ], 
              "MonthlyRate": "SGD 3 936.83",
              "SalaryRate": "3936.83",
              image: "MeaghanBecker.png",
              classColor: 'card-yello-green',
              details:'',
              type:'present',
              "Country": "Philippines",
              "CVLink": "https://login.axpara.com/wb-pdf/49637818-c785-1309-2721-6239d91368a4",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=532&tV=69eab99fba51610e5644d3cbb5319224",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "NFG - 01666",
              "Skills":[
                "SEO",
                "Content Strategy"
              ],
              "MonthlyRate": "SGD 2 801.52",
              "SalaryRate": "2801.52",
              image: 'FalBish.png', classColor: 'card-sky-blue', details:'', type:'leave',
              "Country": "Philippines",
              "CVLink": "https://login.axpara.com/wb-pdf/fee1c634-0024-e6a8-4302-daf167259776",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=1666&tV=fd6ef292054022d12a53e3b0307ae917",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "JDC - 02813",
              "Skills":[
                "Java",
                "Vue.Js",
                "Spring Boot"
              ],
              "MonthlyRate": "SGD 4 537.91",
              "SalaryRate": "4537.91",
              image: 'FalBishRed.png', classColor: 'card-yello-green', details:'', type:'present',
              "Country": "Philippines",
              "CVLink": "https://login.axpara.com/wb-pdf/91202cb2-0d00-4b06-d459-c4f7dd27c308",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=2813&tV=3cb876d4e2f97e8af441bc5d6c35a87f",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "NLP - 05864",
              "Skills":[
                "Asp.Net",
                "Bootstrap",
                "React Js"
              ],
              "MonthlyRate": "SGD 4 183.5",
              "SalaryRate": "4183.5",
              image: 'Salvatore.png', classColor: 'card-sky-white', details:'', type:'',
              "Country": "Vietnam",
              "CVLink": "https://login.axpara.com/wb-pdf/73b73e02-6bbc-45ee-736f-a123f838e38d",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=5864&tV=6b42f2fe34e47341915d45e106528c5b",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "KTC - 01765",
              "Skills":[
                "UX/UI Design",
                "Front End Development"
              ],
              "MonthlyRate": "SGD 2 884.94",
              "SalaryRate": "2884.94",
              image: 'Bishwanandita.png', classColor: 'card-yello-green', details:'', type:'present',
              "Country": "Philippines",
              "CVLink": "https://login.axpara.com/wb-pdf/45e54380-8959-8c18-a97f-8e70eef39813",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=1765&tV=7e019e4a7badf35e98f4c392f7d9361a",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "NTV - 05842",
              "Skills":[
                "iOS",
                "OAuth2"
              ],
              "MonthlyRate": "SGD 5 161.3",
              "SalaryRate": "5161.3",
              "Country": "Vietnam",
              image: 'BishwabanditaPink.png', classColor: 'card-sky-orange', details:'', type:'holiday',
              "CVLink": "https://login.axpara.com/wb-pdf/cd9268c4-d540-5951-6924-3775e99ee195",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=5842&tV=797e07e95081f21c00ebe2b450edf872",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "TN - 05838",
              "Skills":[
                "iOS",
                "Swift",
                "Objective - C"
              ],
              "MonthlyRate": "SGD 4 883.47",
              "SalaryRate": "4883.47",
              "Country": "Vietnam",
              "CVLink": "https://login.axpara.com/wb-pdf/07026a58-7fab-18b2-04c5-9595e4b0e05e",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=5838&tV=6496b5758d82029befa899226d87fd42",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "TTT - 05836",
              "Skills":[
                "Swift",
                "MVVM"
              ],
              "MonthlyRate": "SGD 5 091.84",
              "SalaryRate": "5091.84",
              "Country": "Vietnam",
              "CVLink": "https://login.axpara.com/wb-pdf/0d99f7b3-c33a-bbfd-ed3a-76422098e8ea",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=5836&tV=e7d5187af1040dec40893ea40bc5f35e",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "RDLR - 03261",
              "Skills":[
                "Angular",
                "React",
                "React Js"
              ],
              "MonthlyRate": "SGD 4 237.37",
              "SalaryRate": "4237.37",
              "Country": "Philippines",
              "CVLink": "https://login.axpara.com/wb-pdf/2eaf3e59-11e5-30ea-ed5c-05f280a2edbd",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=3261&tV=846ef71b4250933901aa74f8f30e7d3a",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "LF - 05668",
              "Skills":[
                "Graphic Design",
                "Adobe Creative Suite",
                "Marketing"
              ],
              "MonthlyRate": "SGD 1 081.7",
              "SalaryRate": "1081.7",
              "Country": "Philippines",
              "CVLink": "https://login.axpara.com/wb-pdf/3bc782a3-e2c1-b65b-49f5-445922d64ffa",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=5668&tV=4a8dc3097a410886251676a15001049c",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "NM - 01948",
              "Skills":[
                "UX/UI Design",
                "Front End Development"
              ],
              "MonthlyRate": "SGD 3 185.48",
              "SalaryRate": "3185.48",
              "Country": "Philippines",
              "CVLink": "https://login.axpara.com/wb-pdf/126ff63e-2681-d5de-8563-1f75193585c9",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=1948&tV=f7cc488a7121a7437568a46980bdc015",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "MG - 03990",
              "Skills":[
                "Copywriting",
                "Social Media Marketing"
              ],
              "MonthlyRate": "SGD 2 443.05",
              "SalaryRate": "2443.05",
              "Country": "Philippines",
              "CVLink": "https://login.axpara.com/wb-pdf/7023df9f-80d6-6a13-c2d6-bd63aba2df40",
              "VideoLink": "https://axpara.com/hire-and-manage-talent-around-the-world?tId=3990&tV=1808a87f266682d820e4ac8fab10b4de",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "AJSO - 05566",
              "Skills":[
                "HTML",
                "CSS",
                "Javascript"
              ],
              "MonthlyRate": "SGD 2 734.67",
              "SalaryRate": "2734.67",
              "Country": "Philippines",
              "CVLink": "https://login.axpara.com/wb-pdf/bd0ac1d9-d122-fa9a-d716-7feb927cfe08",
              "VideoLink": "",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "KS - 05741",
              "Skills":[
                "Social Media Marketing",
                "Creative Content Creation",
                "Copywriting"
              ],
              "MonthlyRate": "SGD 1 382.24",
              "SalaryRate": "1382.24",
              "Country": "Philippines",
              "CVLink": "https://login.axpara.com/wb-pdf/22a666f8-e352-75dc-e6c1-e02c815b7893",
              "VideoLink": "",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "KH - 05774",
              "Skills":[
                "Product Management",
                "Product Roadmap",
                "Software Development Life Cycle"
              ],
              "MonthlyRate": "SGD 4 237.37",
              "SalaryRate": "4237.37",
              "Country": "Philippines",
              "CVLink": "https://login.axpara.com/wb-pdf/a87477b1-bde9-0309-1114-b47b7b959c5c",
              "VideoLink": "",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "HD - 05744",
              "Skills":[
                "PHP",
                "Laravel",
                "Symfony"
              ],
              "MonthlyRate": "SGD 3 162.89",
              "SalaryRate": "3162.89",
              "Country": "Indonesia",
              "CVLink": "https://login.axpara.com/wb-pdf/9e44e23f-28ed-17f8-1aa4-c7db428f0854",
              "VideoLink": "",
              "InterviewSlots":schedule,
            },
            {
              "TalentID": "LDW - 04538",
              "Skills":[
                "Typescript",
                "NodeJs"
              ],
              "MonthlyRate": "SGD 3 643.47",
              "SalaryRate": "3643.47",
              "Country": "Sri Lanka",
              "CVLink": "https://login.axpara.com/wb-pdf/3be50946-20f8-ae25-43e6-4695b1dd3e4e",
              "VideoLink": "",
              "InterviewSlots":schedule,
            }
          ];
        return data;
    }
}

export default candidatecsv
