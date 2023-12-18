import Style from './AboutProject.module.css';

import { useTranslation } from 'react-i18next';

const AboutProject = () => {
  const { t } = useTranslation();

  return (
    <div className={Style.aboutWrapper}>
      <h3 className={Style.aboutMainHeading}>
        {t('aboutProject:aboutSite:heading')}
        <hr />
      </h3>
      <p className={Style.aboutParagraph}>{t('aboutProject:aboutSite:paragraph')}</p>
      <br />
      <br />
      <div className={Style.librariesWrapper}>
        <h3 className={Style.aboutMainHeading}>
          {t('aboutProject:libraries:heading')}
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
