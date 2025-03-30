var posts=["2025/03/30/hello-world/","2025/03/30/ggyys1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };