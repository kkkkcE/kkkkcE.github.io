var posts=["2024/01/05/SFTP/","2024/01/05/hello-world/","2024/01/02/link-test1/","2024/01/04/input/","2024/01/05/一些代码记录/","2024/01/05/仪表/","2024/01/06/使用Ubuntu搭建ftp服务器/","2024/01/06/在MongoDB数据库上修改内容/","2023/12/29/我让你看meme你聋吗/","2024/01/05/最近通关的游戏/","2024/01/05/第一篇DIY文章/","2024/01/30/无公网IP内网穿透记录/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };