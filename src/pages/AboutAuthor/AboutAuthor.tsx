import { useTranslation } from 'react-i18next';
import Style from './AboutAuthor.module.css';

const AboutAuthor = () => {
  const { t } = useTranslation();
  return (
    <div className={Style.aboutWrapper}>
      <p className={Style.aboutParagraph}>{t('aboutAuthor:paragraph:about')}</p>
    </div>
  );
};

export default AboutAuthor;
