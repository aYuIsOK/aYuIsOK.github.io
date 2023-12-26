var posts=["2023/12/10/JUC之线程池/","2023/12/13/JVM之内存模型/","2023/12/11/JVM之内存结构/","2023/12/10/使用hexo搭建博客并部署到云服务器/","2023/12/04/hello-world/","2023/12/13/JVM之垃圾回收/","2023/12/13/JVM之类加载/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };