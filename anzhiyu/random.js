var posts=["2023/12/04/Hello-World/","2023/12/10/使用hexo搭建博客并部署到云服务器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };