import React from 'react';

enum classNames {
  logo = 'logo',
  logoText = `${classNames.logo}__text`,
  logoSubtext = `${classNames.logo}__subtext`
}

const Logo = () => (
  <div className={classNames.logo}>
    <h1 className={classNames.logoText}>CAT</h1>
    <p className={classNames.logoSubtext}>currencies academic terms</p>
  </div>
);

export default Logo;
