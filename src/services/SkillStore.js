const SkillStore = {
  data: [
    {
      Name: 'Vue',
      SkillLevel: 85,
      Img: require('@/assets/vue.png'),
      Projects: [
        {
          name: 'AKL/ALL - Website frontend',
          link: 'https://github.com/kalaztaja/akll-frontend',
          description: 'Personal project made for video game organization'
        },
        {
          name: 'TraSim/Sitman',
          link: '',
          description: 'Insta Digital own product for emergency messaging'
        },
        {
          name: 'This site',
          link: 'https://github.com/kalaztaja/cv-page',
          description: 'Two day project to showcase different skills'
        }
      ]
    },
    {
      Name: 'Docker',
      SkillLevel: 75,
      Img: require('@/assets/docker.png'),
      Projects: [
        {
          name: 'DockerRabbitMQ',
          link: 'https://github.com/kalaztaja/DockerCompose-RabbitMQ',
          description:
            'An exercise done for university where we created multiple containers which would communicate with each other using external RabbitMQ-container'
        },
        {
          name: 'Dockerized linux environment',
          link: '',
          description:
            'Solo project for Acgo corporation. I dockerized old linux based environment using scripts scraping every dependancy needed for the software.'
        },
        {
          name: 'Static analyzer',
          link: 'https://github.com/kalaztaja/softametodit-ab',
          description:
            'Dockerized tool to produce analyzation of the provided code'
        }
      ]
    },
    {
      Name: 'C++',
      SkillLevel: 70,

      Img: require('@/assets/c++.png'),
      Projects: [
        {
          name: 'ACGO - E100 electrical tractor terminal',
          link: '',
          description:
            'Worked as a solo developer for electircal tractors terminal. This included communicating with customer, testing on development, creating backend on CAN-bus and designing user interface.'
        },
        {
          name: 'Aurora Project',
          link: 'https://github.com/kalaztaja/project-aurora',
          description:
            'Worked as a developer and a project lead for Aurora powertrains. As a group we developed low-level software for eSled.'
        },
        {
          name: 'Programming 3: Technique - Course material',
          link: '',
          description:
            'Worked as a solo developer for the course Programming 3. I provided logic behind the course project work to which students would develop the frontend.'
        }
      ]
    },
    {
      Name: 'React',
      SkillLevel: 65,

      Img: require('@/assets/react.png'),
      Projects: [
        {
          name: 'Insta DefSec - Private project',
          link: '',
          description:
            'Handled alone transfering existing codebase into mobile friendly. This included plenty of refactoring and infrastructure changes. After which few new features were implemented.'
        },
        {
          name: 'Kyykkä - Referee reporting service',
          link: '',
          description:
            'Worked as a developer for a volunteer project where we implemented software for referees to report scores. I handled few features including point reporting and user managing.'
        }
      ]
    },

    {
      Name: 'Flutter',
      SkillLevel: 60,

      Img: require('@/assets/flutter.png'),
      Projects: [
        {
          name: 'Aqvario project',
          link: '',
          description:
            'Currently hidden project made for possible new corporation. This application closely resembles popular social media applications with clear differences on user centered development.'
        }
      ]
    },
    {
      Name: 'DB',
      SkillLevel: 50,

      Img: require('@/assets/mongodb.png'),
      Projects: [
        {
          name: 'Database designing - SQL',
          link: '',
          description:
            'Made designs for SQL database which handled customer data as specified. The software handled medical records and was made for a learning experience.'
        },
        {
          name: 'SmashVersus - Firebase Backend',
          link: 'https://gitlab.com/kalaztaja/smashversus',
          description:
            'Made basic level backend for easy tournament handling. This project was never finished but is still functional!'
        },
        {
          name: 'Insta DefSec - Secret project',
          link: '',
          description:
            'Developed backend to handle users and data. This was made in conjunction with the React project in the Insta DefSec.'
        }
      ]
    }
  ]
};

export default SkillStore;
