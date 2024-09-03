import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm p-6'>
      {/* <DarkModeButton/> */}
      <i className='fas fa-copyright' /> {`${copyrightDate}`}
      <span>
        <i className='mx-1 animate-pulse fas fa-heart' />{' '}
        <a href={siteConfig('LINK')} className='underline font-bold dark:text-gray-300 hover:underline'>
          {siteConfig('AUTHOR')}
        </a>
        .<br />
        {siteConfig('BEI_AN') && (
          <>
            <i className='fas fa-shield-alt' />{' '}
            <a href='https://beian.miit.gov.cn/' className='mr-2 hover:underline'>
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
        <div className='flex justify-center space-x-16 pt-4'> {/* 增加间距 */}
          {/* OUR COMPANY部分 */}
          <div className='text-left'>
            <h3 className='font-bold mb-2'>OUR COMPANY</h3>
            <ul className='space-y-1'>
              <li><a href='/company/about-us' className='hover:underline'>About Us</a></li>
              <li><a href='/support/feedbacks' className='hover:underline'>Contact Us</a></li>
              <li><a href='/support/faq' className='hover:underline'>Help and FAQ</a></li>
              <li><a href='/Become an Affiliate' className='hover:underline'>Become an Affiliate</a></li>
            </ul>
          </div>
          {/* SAFETY部分 */}
          <div className='text-left'>
            <h3 className='font-bold mb-2'>SAFETY</h3>
            <ul className='space-y-1'>
              <li><a href='/safety/privacy-policy' className='hover:underline'>Privacy Policy</a></li>
              <li><a href='/safety/service-agreement' className='hover:underline'>Service Agreement</a></li>
              <li><a href='/safety/notice-of-collection' className='hover:underline'>Notice of Collection</a></li>
              <li><a href='/safety/community-guidelines' className='hover:underline'>Community Guidelines</a></li>
              <li><a href='/safety/fighting-human-trafficking' className='hover:underline'>Stop Sex & Human Trafficking</a></li>
              <li><a href='/safety/no-sell-or-share' className='hover:underline'>Right to Opt-Out</a></li>
            </ul>
          </div>
          {/* OTHER DATING LOCATIONS部分 */}
          <div className='text-left'>
            <h3 className='font-bold mb-2'>OTHER DATING LOCATIONS</h3>
            <ul className='space-y-1'>
              <li><a href='https://www.sugardaddysingapore.com' className='hover:underline'>Sugar Daddy Singapore</a></li>
              <li><a href='https://www.sugardaddycanada.com' className='hover:underline'>Sugar Daddy Canada</a></li>
              <li><a href='https://www.sugardaddyaustralia.com' className='hover:underline'>Sugar Daddy Australia</a></li>
              <li><a href='https://www.sugardaddybelgium.com' className='hover:underline'>Sugar Daddy Belgium</a></li>
              {/* 下拉按钮部分 */}
              <li className='more-locations' style={{ display: 'none' }}>
                <a href='https://www.sugardaddypoland.com' className='hover:underline'>Sugar Daddy Poland</a>
              </li>
              <li className='more-locations' style={{ display: 'none' }}>
                <a href='https://www.sugardaddyuae.com' className='hover:underline'>Sugar Daddy UAE</a>
              </li>
              <li><button className='hover:underline text-left' onClick={toggleMoreLocations}>More >></button></li>
            </ul>
          </div>
        </div>
        {/* Javascript控制按钮展开和收回 */}
        <script>
          function toggleMoreLocations() {
            const moreLocations = document.querySelectorAll('.more-locations');
            moreLocations.forEach(loc => loc.style.display = loc.style.display === 'none' ? 'block' : 'none');
            const button = document.querySelector('button');
            button.innerText = button.innerText === 'More >>' ? '<< Less' : 'More >>';
          }
        </script>
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
    </footer>
  )
}

export default Footer
