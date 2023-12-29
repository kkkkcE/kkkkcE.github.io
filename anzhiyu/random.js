var posts=["2023/12/28/hello-world/","2023/12/29/video-test1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };