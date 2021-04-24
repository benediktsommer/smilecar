import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo } from 'react';

export const LanguageSelector = memo(() => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div onChange={changeLanguage}>
      <input type="radio" value="de" name="language" defaultChecked /> Deutsch
      <input type="radio" value="en" name="language" /> English
    </div>
  );
});
