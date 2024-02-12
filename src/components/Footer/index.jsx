import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();

  return (
    <>
      <div style={{backgroundColor:'#404040'}} className="text-white text-center p-3 text-xl">
      <span>{t('footer')}</span>   <span className="font-bold">code 7</span>
      </div>
    </>
  );
}

export default Footer;
