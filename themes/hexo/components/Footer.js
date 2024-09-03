import { useState } from 'react';
import { siteConfig } from '@/lib/config';

const Footer = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const d = new Date();
  const currentYear = d.getFullYear();
  const since = siteConfig('SINCE');
  const copyrightDate = parseInt(since) < currentYear ? `${since}-${currentYear}` : currentYear;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm p-6'>
      <i className='fas fa-copyright' /> {`${copyrightDate}`}
      <span>
        <i className='mx-1 animate-pulse fas fa-heart' />{' '}
        <a href={siteConfig('LINK')} className='font-bold dark:text-gray-300'>
          {siteConfig('AUTHOR')}
        </a>
        .<br />
        {siteConfig('BEI_AN') && (
          <>
            <i className='fas fa-shield-alt' />{' '}
            <a href='https://beian.miit.gov.cn/' className='mr-2'>
              {siteConfig('BEI_AN')}
            </a>
            <br />
          </>
        )}
        <span className='hidden busuanzi_container_site_pv'>
          <i className='fas fa-eye' />
          <span className='px-1 busuanzi_value_site_pv'> </span>
        </span>
        <span className='pl-2 hidden busuanzi_container_site_uv'>
          <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
        </span>
        <p className='text-xs pt-4 text-light-400 dark:text-gray-400'>
          {title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}
        </p>
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>
          Copyright © 2007-2024{' '}
          <a href='https://www.sugardaddymeet-nz.com' className='dark:text-gray-300'>
            sugardaddymeet-nz.com
          </a>
          , INC. All rights reserved.
        </p>
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>
          Disclaimer: You must be over 19 to join. SugarDaddyMeet-NZ is not an escort service. SugarDaddyMeet-NZ does not support escorts or prostitution. Profiles that may violate these terms and services will be banned.
        </p>
      </span>
      <div className='flex justify-center space-x-20 text-xs pt-4 text-light-500 dark:text-gray-500'>
        <div className='flex flex-col text-left'>
          <h4 className='font-bold'>OUR COMPANY</h4>
          <a href='/company/about-us' className='hover:underline'>About Us</a>
          <a href='/support/feedbacks' className='hover:underline'>Contact Us</a>
          <a href='/support/faq' className='hover:underline'>Help and FAQ</a>
          <a href='/Become-an-Affiliate' className='hover:underline'>Become an Affiliate</a>
        </div>
        <div className='flex flex-col text-left'>
          <h4 className='font-bold'>SAFETY</h4>
          <a href='/safety/privacy-policy' className='hover:underline'>Privacy Policy</a>
          <a href='/safety/service-agreement' className='hover:underline'>Service Agreement</a>
          <a href='/safety/notice-of-collection' className='hover:underline'>Notice of Collection</a>
          <a href='/safety/community-guidelines' className='hover:underline'>Community Guidelines</a>
          <a href='/safety/fighting-human-trafficking' className='hover:underline'>Stop Sex & Human Trafficking</a>
          <a href='/safety/no-sell-or-share' className='hover:underline'>Right to Opt-Out</a>
        </div>
        <div className='flex flex-col text-left'>
          <h4 className='font-bold'>OTHER DATING LOCATIONS</h4>
          <a href='https://www.sugardaddysingapore.com' className='hover:underline'>Sugar Daddy Singapore</a>
          <a href='https://www.sugardaddycanada.com' className='hover:underline'>Sugar Daddy Canada</a>
          <a href='https://www.sugardaddyaustralia.com' className='hover:underline'>Sugar Daddy Australia</a>
          <a href='https://www.sugardaddybelgium.com' className='hover:underline'>Sugar Daddy Belgium</a>
          {isExpanded && (
            <>
              <a href='https://www.sugardaddypoland.com' className='hover:underline'>Sugar Daddy Poland</a>
              <a href='https://www.sugardaddyuae.com' className='hover:underline'>Sugar Daddy UAE</a>
            </>
          )}
          <button onClick={toggleExpand} className='pt-2 text-left text-light-500 dark:text-gray-500'>
            {isExpanded ? '<<Less' : 'More>>'}
          </button>
        </div>
        <div className='flex flex-col text-left'>
          <h4 className='font-bold'>DOWNLOAD APP</h4>
          <div className='flex justify-center mt-2'>
            <a href='https://www.sugardaddymeet.com/registerStep1?tid=af100028782_qqx' target='_blank' rel='noopener noreferrer'>
              <img src='https://raw.githubusercontent.com/icon-other/icon/main/download/App%20Store.png' alt='App Store' className='w-24 h-auto mx-2' />
            </a>
            <a href='https://www.sugardaddymeet.com/registerStep1?tid=af100028782_qqx' target='_blank' rel='noopener noreferrer'>
              <img src='https://raw.githubusercontent.com/icon-other/icon/main/download/Google%20Play.png' alt='Google Play' className='w-24 h-auto mx-2' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
