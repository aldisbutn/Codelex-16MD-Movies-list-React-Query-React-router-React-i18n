import { useEffect, useState } from 'react';
import Style from './AboutProject.module.css';

import { useTranslation } from 'react-i18next';

const AboutProject = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  return (
    <div className={Style.aboutWrapper}>
      <button type='button' onClick={() => i18n.changeLanguage('lv')}>
        Change language
      </button>
      <h3 className={Style.aboutMainHeading}>
        {t('translation:description:part')}
        <hr />
      </h3>
      <p className={Style.aboutParagraph}>
        In this site you can view a list of 10 movies that was made with ChatGPT.
        <br />
        You can click on each of the movies and see more info about the movie and comments left by people.
        <br />
        You can also add your own comment if you want.
      </p>
      <br />
      <br />
      <div className={Style.librariesWrapper}>
        <h3 className={Style.aboutMainHeading}>
          Libraries used in this project
          <hr />
        </h3>
        <h4 className={Style.aboutLibraryHeading}>React</h4>
        <h4 className={Style.aboutLibraryHeading}>React Router</h4>
        <h4 className={Style.aboutLibraryHeading}>TanStack Query</h4>
        <h4 className={Style.aboutLibraryHeading}>react-i18next</h4>
        <h4 className={Style.aboutLibraryHeading}>Zod</h4>
        <h4 className={Style.aboutLibraryHeading}>Axios</h4>
        <h4 className={Style.aboutLibraryHeading}>JSON Server</h4>
      </div>
    </div>
  );
};

export default AboutProject;
