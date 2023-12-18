import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        navBar: {
          headings: {
            project: 'About the project',
            movies: 'Movies',
            author: 'About the author',
          },
        },
        aboutProject: {
          aboutSite: {
            heading: 'About this site',
            paragraph: `In this site you can view a list of 10 movies that was made with ChatGPT.
            You can click on each of the movies and see more info about the movie and comments left by people.
            You can also add your own comment if you want.`,
          },
          libraries: {
            heading: 'Libraries used in this project',
          },
        },
        moviesList: {
          messages: {
            loading: 'Loading movies....',
            error: 'Error, could not get the movies!',
          },
        },
        movieDisplay: {
          messages: {
            loading: 'Loading movie...',
            error: 'Error, could not get the movie!',
          },
          textArea: {
            username: 'Your username',
            comment: 'Add a comment...',
          },
        },
        movieCard: {
          headings: {
            title: 'Title',
            director: 'Director',
            releaseYear: 'Release Year',
            genre: 'Genre',
            rating: 'Rating',
            plotSummary: 'Plot Summary',
            comments: 'Comments',
            noComments: 'No comments available.',
          },
        },
        buttons: {
          headings: {
            add: 'Add Comment',
            delete: 'Delete Movie',
          },
        },
        aboutAuthor: {
          paragraph: {
            about: `Hey, my name is Aldis.
            I am 28 years old and I am learing Front-end development at Codelex.`,
          },
        },
      },
      lv: {
        navBar: {
          headings: {
            project: 'Par šo projektu',
            movies: 'Filmas',
            author: 'Par lapas autoru',
          },
        },
        aboutProject: {
          aboutSite: {
            heading: 'Par šo lapu',
            paragraph: `Šajā lapā jūs variet apskatīt sarakstu ar 10 filmām kuru izveidoja ChatGPT.
            Jūs variet uzklikšķināt uz katras no filmām un ieraudzīt vairāk informācijas par filmu un arī citu cilvēku atstātos komentārus.
            Ja vēlaties jūs arī variet atstāt savu komentāru.`,
          },
          libraries: {
            heading: 'Projektā izmantotās bibliotēkas',
          },
        },
        moviesList: {
          messages: {
            loading: 'Filmas tiek ielādētas....',
            error: 'Kļūda, neizdevās ielādet filmas!',
          },
        },
        movieDisplay: {
          messages: {
            loading: 'Filma tiek ielādēta....',
            error: 'Kļūda, neizdevās ielādēt filmu',
          },
          textArea: {
            username: 'Lietotājvārds',
            comment: 'Ievadi savu komentāru....',
          },
        },
        movieCard: {
          headings: {
            title: 'Nosaukums',
            director: 'Režisors',
            releaseYear: 'Izlaišanas gads',
            genre: 'Žanrs',
            rating: 'Vērtējums',
            plotSummary: 'Sižeta kopsavilkums',
            comments: 'Komentāri',
            noComments: 'Nav pievienotu komentāru.',
          },
        },
        buttons: {
          headings: {
            add: 'Pievienot Komentāru',
            delete: 'Izdzēst Filmu',
          },
        },
        aboutAuthor: {
          paragraph: {
            about: `Sveiki, mans vārds ir Aldis.
            Man ir 28 gadi un šobrīd es mācos Codelex kur es apgūstu Front-end development`,
          },
        },
      },
    },
  });

export default i18n;
