import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Style from './LanguageSwitch.module.css';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  return (
    <div className={Style.languageSwitchWrapper}>
      <button type='button' onClick={() => i18n.changeLanguage('lv')}>
        LV
      </button>
      <button type='button' onClick={() => i18n.changeLanguage('en')}>
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
