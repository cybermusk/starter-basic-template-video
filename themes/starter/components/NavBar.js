import throttle from 'lodash.throttle';
import { useCallback, useEffect, useState } from 'react';
import { MenuList } from './MenuList';
import { DarkModeButton } from './DarkModeButton';
import { Logo } from './Logo';
import { useRouter } from 'next/router';
import { siteConfig } from '@/lib/config';
import CONFIG from '../config';
import { useGlobal } from '@/lib/global';

/**
 * 顶部导航栏
 */
export const NavBar = (props) => {
  const router = useRouter();
  const { isDarkMode } = useGlobal();
  const [buttonTextColor, setColor] = useState(router.route === '/' ? 'text-white' : '');

  useEffect(() => {
    if (isDarkMode || router.route === '/') {
      setColor('text-white');
    } else {
      setColor('');
    }

    // ======= Sticky
    window.addEventListener('scroll', navBarScrollListener);
    return () => {
      window.removeEventListener('scroll', navBarScrollListener);
    };
  }, [isDarkMode]);

  // 滚动监听
  const throttleMs = 200;
  const navBarScrollListener = useCallback(
    throttle(() => {
      const ud_header = document.querySelector('.ud-header');
      const scrollY = window.scrollY;
      const isMediumScreen = window.innerWidth >= 768; // 中等以上屏幕的判断

      // 控制台输出当前滚动位置和 sticky 值
      if (isMediumScreen) {
        // 中等以上屏幕，滚动到第二屏才显示sticky
        if (scrollY > 0) {
          ud_header?.classList.add('sticky');
        } else {
          ud_header?.classList.remove('sticky');
        }
      } else {
        // 小屏幕始终显示sticky
        ud_header?.classList.add('sticky');
      }
    }, throttleMs)
  );

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">

        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">

            {/* Logo */}
            <Logo />

            <div className="flex w-full items-center justify-between px-4">
              {/* 中间菜单 */}
              <MenuList {...props} />

              {/* 右侧功能 */}
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {/* 深色模式切换 */}
                <DarkModeButton />
                {/* 注册登录功能 */}
                <div className="hidden sm:flex">
                  <a
                    href={siteConfig('STARTER_NAV_BUTTON_1_URL', null, CONFIG)}
                    className={`loginBtn ${buttonTextColor} px-[22px] py-2 text-base font-medium hover:opacity-70`}
                  >
                    {siteConfig('STARTER_NAV_BUTTON_1_TEXT', null, CONFIG)}
                  </a>
                  <a
                    href={siteConfig('STARTER_NAV_BUTTON_2_URL', null, CONFIG)}
                    className={`signUpBtn ${buttonTextColor} rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-bold duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark`}
                  >
                    {siteConfig('STARTER_NAV_BUTTON_2_TEXT', null, CONFIG)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Navbar Section End --> */}
    </>
  );
};
