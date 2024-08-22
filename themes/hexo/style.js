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
     .create-account {
      padding: 12px 80px;
      border-radius: 20px; /* 圆角矩形 */
      background: linear-gradient(to right, #ff7e5f, #feb47b);
      border: none;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .create-account:hover {
      background: linear-gradient(to right, #feb47b, #ff7e5f);
    }
    
    // Log In Button
    .log-in {
      padding: 12px 80px;
      border-radius: 20px; /* 圆角矩形 */
      background: transparent;
      border: 2px solid;
      border-image: linear-gradient(to right, #ff7e5f, #feb47b) 1;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: border 0.3s ease;
    }
    
    .log-in:hover {
      border-image: linear-gradient(to right, #feb47b, #ff7e5f) 1;
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
