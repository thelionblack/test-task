import React from 'react';

enum classNames {
  logo = 'logo',
  logoText = `${classNames.logo}__text`,
  logoSubtext = `${classNames.logo}__subtext`
}

const LOGO_TEXT = 'CAT';
const LOGO_SUB_TEXT = 'currencies academic terms';

const Logo = () => (
  <div className={classNames.logo}>
    <h1 className={classNames.logoText}>{LOGO_TEXT}</h1>
    <p className={classNames.logoSubtext}>{LOGO_SUB_TEXT}</p>
  </div>
);

export default Logo;
