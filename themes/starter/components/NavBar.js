/* eslint-disable no-unreachable */
import throttle from 'lodash.throttle';
import { useCallback, useEffect, useState } from 'react'
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
  const router = useRouter()
  const { isDarkMode } = useGlobal()
  const [buttonTextColor, setColor] = useState(router.route === '/' ? 'text-white' : '')
  useEffect(() => {
    if (isDarkMode || router.route === '/') {
      setColor('text-white')
    } else {
      setColor('')
    }
    // ======= Sticky
    window.addEventListener('scroll', navBarScollListener)
    return () => {
      window.removeEventListener('scroll', navBarScollListener)
    }
  }, [[isDarkMode]])

  // 滚动监听
  const throttleMs = 200;
  const navBarScollListener = useCallback(
    throttle(() => {
      const ud_header = document.querySelector('.ud-header');
      const firstScreenHeight = window.innerHeight; // 获取第一屏的高度
      const scrollY = window.scrollY;
  
      // 控制台输出当前滚动位置和 sticky 值
      if (scrollY > firstScreenHeight) {
        ud_header?.classList?.add('sticky'); // 超过第一屏添加 sticky
        ud_header.style.position = ''; // 恢复默认位置
      } else {
        ud_header?.classList?.remove('sticky'); // 在第一屏时不加 sticky
        ud_header.style.position = 'fixed'; // 设置为 fixed，让它固定在视口
        ud_header.style.top = '0'; // 固定在顶部
      }
    }, throttleMs),
    []
  );
  
  // 在 useEffect 中注册和清理事件监听器
  useEffect(() => {
    window.addEventListener('scroll', navBarScollListener);
    return () => {
      window.removeEventListener('scroll', navBarScollListener);
    };
  }, [navBarScollListener]);

  return <>
        {/* <!-- ====== Navbar Section Start --> */}
        <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent" >

        <div className="container">

            <div className="relative flex items-center justify-between">

                {/* Logo */}
                <Logo/>

                <div className="flex w-full items-center justify-between px-4">

                    {/* 中间菜单 */}
                    <MenuList {...props}/>

                    {/* 右侧功能 */}
                    <div className="flex items-center justify-end pr-16 lg:pr-0">
                        {/* 深色模式切换 */}
                        <DarkModeButton/>
                        {/* 注册登录功能 */}
                        {/* 原注册按钮：className={`signUpBtn ${buttonTextColor} rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-bold duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark`}*/}
                        <div className="hidden sm:flex">
                            <a
                            href={siteConfig('STARTER_NAV_BUTTON_1_URL', null, CONFIG)}
                            className={`loginBtn ${buttonTextColor}  text-black px-[22px] py-2 text-base font-medium hover:opacity-100`}
                            rel="nofollow"
                            >
                           {siteConfig('STARTER_NAV_BUTTON_1_TEXT', null, CONFIG)}
                            </a>
                            <a
                            href={siteConfig('STARTER_NAV_BUTTON_2_URL', null, CONFIG)}
                            className={`signUpBtn ${buttonTextColor} rounded-md px-6 py-2 text-base font-bold ease-in-out hover:bg-opacity-100 hover:text-dark`}
                            rel="nofollow"
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
}
