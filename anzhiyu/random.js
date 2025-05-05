var posts=["2023/12/10/JUC之线程池/","2024/02/25/Bye-2023-Hey-2024/","2023/12/11/JVM之内存结构/","2023/12/13/JVM之类加载/","2023/12/13/JVM之内存模型/","2023/12/13/JVM之垃圾回收/","2023/12/04/hello-world/","2025/02/23/什么，都已经2025年了，完TM大蛋！/","2023/12/10/使用hexo搭建博客并部署到云服务器/","2024/03/26/使用Memos为博客搭建一个‘哔哔空间’/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };