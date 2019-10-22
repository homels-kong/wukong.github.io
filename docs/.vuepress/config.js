module.exports = {
    title: 'vuepress项目测试',
    description : 'vuepress项目测试',
    base : '/wukong.github.io',
    themeConfig : {
      nav : [
          { text: '接口定义', link: '/apiword' },
          { text: '接口字段定义', link: '/api' },
          { text: '附录：错误码', link: '/error' }
      ],
      sidebar: [
        {
          title: '博客目录',
          path: '/foo/',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/'
          ]
        }
      ],
      sidebarDepth : 2
    }
  }