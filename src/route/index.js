// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

var header = {
  user: {
    name: 'Nina',
    lastname: 'Klymenko',
  },

  position: 'Junior Fullstack JS Developer',
  salary: '600$',
  address: '42110 Feurs, France',
}

var footer = {
  social: {
    email: {
      text: 'klymenkon2602@gmail.com',
      href: 'mailto:klymenkon2602@gmail.com',
    },
    phone: {
      text: '+380675036547',
      href: 'tel:+380675036547',
    },
    linkedIn: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: ' Resume ',
    },
    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
         work on a new project I learn the domain and try to understand the idea of the project. Good team
  player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
  tournament position, goals etc), analyzing by simple mathematics models and preparing probability
  for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: ' Resume | Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Heandlesbar',
          point: 10,
          isTop: true,
        },

        {
          name: 'NPM & VS code',
          point: 9,
        },
        {
          name: 'Terminal & GIT',
          point: 8,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Skiing',
          isMain: false,
        },
        {
          name: 'Psychology',
          isMain: true,
        },
        {
          name: 'Linguistics',
          isMain: false,
        },
        {
          name: 'Coding',
          isMain: true,
        },
      ],
    },
    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education ',
    },
    header,
    main: {
      educations: [
        {
          name: 'University 1',
          year: '/ 2002-2007',
          isEnd: true,
        },
        {
          name: 'CODING (FRONT-END)',
          year: '/ 08.2022-04.2023',
          isEnd: true,
        },
        {
          name: 'itBrains',
          year: '/ 10.2023-...',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'HTML',
          id: 123,
        },
        {
          name: 'CSS',
          id: 234,
        },
        {
          name: 'JavaScript',
          id: 345,
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },
    header,
    main: {
      work: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT X',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
        },
        {
          position: 'Event manager',
          company: {
            name: 'Blue Chip',
            url: 'https://bluechip.ua/',
          },
          duration: {
            from: '08.2012',
            to: '08.2016',
          },
        },
      ],
    },
    footer,
  })
})

router.get('/projects', function (req, res) {
  res.render('projects', {
    layout: 'big',
    page: {
      title: 'Resume | Projects',
    },
    header,
    main: {
      projects: [
        {
          name: 'Weather project',
          github:
            'https://github.com/NinoKlim/Vanilla-weather',
          about:
            'Web-page allows to find out the weather in your current location by IP-address and in other countries by API request (openweathermap).',
          stacks: [
            {
              name: 'HTML / CSS',
            },
            {
              name: 'JavaScript',
            },
            {
              name: 'BOOTSTRAB',
            },
          ],
          awards: [
            {
              name: 'Weather web-page was created in december 2022',
            },
            {
              name: 'Weather web-page was created in december 2022',
            },
          ],
          stackAmount: 4,
          awardAmount: 5,
        },
        {
          name: 'Weather project React',
          github:
            'https://github.com/wecodeschool/react-weather',
          about:
            'Web-page allows to find out the weather in your current location by IP-address and in other countries by API request (openweathermap).',
          stacks: [
            {
              name: 'HTML / CSS',
            },
            {
              name: 'React.js',
            },
            {
              name: 'BOOTSTRAB',
            },
          ],
          awards: [
            {
              name: 'Weather project React was created in avril 2023',
            },
            {
              name: 'Weather project React was created in avril 2023',
            },
          ],
          stackAmount: 6,
          awardAmount: 5,
        },
      ],
    },
    footer,
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
