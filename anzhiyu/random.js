var posts=["2024/01/03/video-test1-backup/","2024/01/02/input-test1/","2023/12/29/video-test1/","2023/12/28/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };