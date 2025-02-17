import { siteConfig } from '@/lib/config'
import SocialButton from '@/themes/fukasawa/components/SocialButton'
import CONFIG from '../config'
import { Logo } from './Logo'
import { SVGFooterCircleBG } from './svg/SVGFooterCircleBG'

/* eslint-disable @next/next/no-img-element */
export const Footer = props => {
  const latestPosts = props?.latestPosts ? props?.latestPosts.slice(0, 2) : []
  const STARTER_FOOTER_LINK_GROUP = siteConfig(
    'STARTER_FOOTER_LINK_GROUP',
    [],
    CONFIG
  )
  return (
    <>
      {/* <!-- ====== Footer Section Start --> */}
      {/* 29行源代码：<Logo white={true} /> */}
      {/* 29行新代码:<div class="navbar-logo flex items-center w-full py-5 cursor-pointer"><span class="text-white dark:text-white py-1.5 header-logo-text whitespace-nowrap text-2xl font-semibold">starter-常用模板™</span></div>*/}
      {/* 28行源代码：<a className='-mx-4 mb-6 inline-block max-w-[160px]'> */}
      {/* className='wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]' */}
      <footer
        className='wow fadeInUp relative z-10 bg-[#000000] pt-20 lg:pt-[100px]'
        data-wow-delay='.15s'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
                <a className='mb-6 inline-block w-full max-w-[270px]'>
                  <Logo white={true} />
                </a>
                <p className='mb-8 md:max-w-[270px] text-base text-gray-7'>
                  {siteConfig('STARTER_FOOTER_SLOGAN', null, CONFIG)}
                </p>
                <div className='-mx-3 flex items-center'>
                  <div className='mx-3'>
                    <SocialButton />
                  </div>
                </div>
              </div>
            </div>

            {/* 中间三列菜单组 */}
            {STARTER_FOOTER_LINK_GROUP?.map((item, index) => {
              return (
                <div
                  key={index}
                  className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12'>
                  <div className='mb-10 w-full'>
                    <h2 className='mb-9 text-lg font-semibold text-white'>
                      {item.TITLE}
                    </h2>
                    <ul>
                      {item?.LINK_GROUP?.map((l, i) => {
                        return (
                          <li key={i}>
                            <h3>
                              <a
                                href={l.URL}
                                rel="nofollow"
                                className='mb-3 inline-block text-base text-gray-7 hover:text-[#cda780]'>
                                {l.TITLE}
                              </a>
                             </h3>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )
            })}

            {/* 添加谷歌和ios下载链接*/}
            {/* 新增 Download APP 列 */}
            <div className='w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
                <h2 className='mb-9 text-lg font-semibold text-white'>
                  DOWNLOAD APP
                </h2>
                <ul>
                  <li className='mb-4'>
                    <a href="/download" target="_blank" rel="noopener noreferrer nofollow">
                      <img src="https://raw.githubusercontent.com/icon-other/icon/main/download/App%20Store.png" alt="App Store" className='w-40 h-auto' />
                    </a>
                  </li>
                  <li>
                    <a href="/download" target="_blank" rel="noopener noreferrer nofollow">
                      <img src="https://raw.githubusercontent.com/icon-other/icon/main/download/Google%20Play.png" alt="Google Play" className='w-40 h-auto' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* 页脚右侧最新博文 */}
          {/*
            <div className='w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
                <h4 className='mb-9 text-lg font-semibold text-white'>
                  {siteConfig('STARTER_FOOTER_BLOG_LATEST_TITLE', null, CONFIG)}
                </h4>
                // 展示两条最新博客文章
                <div className='flex flex-col gap-8'>
                  {latestPosts?.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href={item?.href}
                        className='group flex items-center gap-[22px]'>
                        <div className='overflow-hidden rounded w-20 h-12'>
                          <img src={item.pageCoverThumbnail} alt={item.title} />
                        </div>
                        <span className='line-clamp-2 max-w-[180px] text-base text-gray-7 group-hover:text-white'>
                          {item.title}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          */}
          </div>
        </div>

        {/* 底部版权信息相关 */}

        <div className='mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]'>
          <div className='container'>
            <div className='-mx-4 flex flex-wrap'>
              <div className='w-full px-4 md:w-2/3 lg:w-1/2'>
                <div className='my-1'>
                  <div className='-mx-3 flex items-center justify-center md:justify-start flex-wrap'>
                    <a
                      href={siteConfig(
                        'STARTER_FOOTER_PRIVACY_POLICY_URL',
                        null,
                        CONFIG
                      )}
                      className='px-3 text-base text-gray-7 hover:text-white hover:underline' rel='nofollow'>
                      {siteConfig(
                        'STARTER_FOOTER_PRIVACY_POLICY_TEXT',
                        null,
                        CONFIG
                      )}
                    </a>
                    <a
                      href={siteConfig(
                        'STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL',
                        null,
                        CONFIG
                      )}
                      className='px-3 text-base text-gray-7 hover:text-white hover:underline' rel='nofollow'>
                      {siteConfig(
                        'STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT',
                        null,
                        CONFIG
                      )}
                    </a>
                    <a
                      href={siteConfig(
                        'STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL',
                        null,
                        CONFIG
                      )}
                      className='px-3 text-base text-gray-7 hover:text-white hover:underline' rel='nofollow'>
                      {siteConfig(
                        'STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT',
                        null,
                        CONFIG
                      )}
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full px-4 md:w-1/3 lg:w-1/2'>
                <div className='my-1 flex justify-center md:justify-end'>
                  <p className='text-base text-gray-7'>
                    Copyright © 2024 SugarDaddyAmerica.com, INC. All rights reserved.
                  {/*
                    <a
                      href='https://github.com/tangly1024/NotionNext'
                      rel='nofollow noopner noreferrer'
                      target='_blank'
                      className='px-1 text-gray-1 hover:underline'>
                      NotionNext {siteConfig('VERSION')}
                    </a>
                  */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer svg背景 */}
      {/*
        <div>
          <span className='absolute left-0 top-0 z-[-1]'>
            <img src='/images/starter/footer/shape-1.svg' alt='' />
          </span>

          <span className='absolute bottom-0 right-0 z-[-1]'>
            <img src='/images/starter/footer/shape-3.svg' alt='' />
          </span>

          <span className='absolute right-0 top-0 z-[-1]'>
            <SVGFooterCircleBG />
          </span>
        </div>
      */}
      </footer>
      {/* <!-- ====== Footer Section End --> */}
    </>
  )
}
