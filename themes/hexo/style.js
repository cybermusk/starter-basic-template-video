/* eslint-disable react/no-unknown-property */
/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
const Style = () => {
  return (<style jsx global>{`
    // 底色
    body{
        background-color: #f5f5f5
    }
    .dark body{
        background-color: black;
    }

    /*  主图上增加大按钮 */
/* ---从此开始--- */
     .cta-button-flat, .cta-button-outline {
      display: inline-block;
      padding: 12px 80px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      border-radius: 25px;
      transition: all 0.3s ease;
      width: 100%;
      max-width: 300px;
      }
      
      /* “Create Account” 按钮 */
      .cta-button-flat {
          background: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%);
          color: #fff;
          border: none;
      }
      
      /* “Login” 按钮 */
      .cta-button-outline {
          background: transparent;
          color: #fff;
          border: 2px solid transparent;
          border-image: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%);
          border-image-slice: 1;
      }
      
      /* 悬停效果 */
      .cta-button-flat:hover, .cta-button-outline:hover {
          transform: scale(1.05);
      }
      
      .cta-button-outline:hover {
          background: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%);
          color: #fff;
          border: 2px solid transparent;
      }
/* ---到此结束--- */
  
    /*  菜单下划线动画 */
    #theme-hexo .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#928CEE, #928CEE);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
    }
    
    #theme-hexo .menu-link:hover {
        background-size: 100% 2px;
        color: #928CEE;
    }

    /* 设置了从上到下的渐变黑色 */
    #theme-hexo .header-cover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:  linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.5) 100%);
    }

    /* Custem */
    .tk-footer{
        opacity: 0;
    }

    // 选中字体颜色
    ::selection {
        background: rgba(45, 170, 219, 0.3);
    }

    // 自定义滚动条
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #49b1f5;
    }

    * {
        scrollbar-width:thin;
        scrollbar-color: #49b1f5 transparent
    }
    

  `}</style>)
}

export { Style }
