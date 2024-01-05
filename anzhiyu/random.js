var posts=["2024/01/02/input-test1/","2023/12/28/hello-world/","2024/01/05/一些代码记录/","2024/01/03/video-test1-backup/","2023/12/29/我让你看meme你聋吗/","2024/01/04/文章进html/","2024/01/05/第一篇DIY文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };