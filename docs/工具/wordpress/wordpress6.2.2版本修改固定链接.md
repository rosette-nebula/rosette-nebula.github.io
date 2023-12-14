---
date: 2023-12-15
lastUpdated: true
---

# wordpress6.2.2 版本修改固定链接

> wordpress 默认是不使用`.htaccess`

## 操作步骤

1.  开启 Apache 的 Rewrite

```shell
sudo a2enmod rewrite
# 重启apache2
sudo systemctl restart apache2
```

2.  打开`/etc/apache2/apache2.conf` 文件，找到下图位置，并将`AllowOverride None` 改成`AllowOverride all`
    ![](https://www.itxiaoda.top/wp-content/uploads/2023/07/image-20230709210246865.png#id=uVvll&originHeight=137&originWidth=434&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
3.  重新`apache2` 服务
4.  在`wordpress` 设置->固定链接

![](https://www.itxiaoda.top/wp-content/uploads/2023/07/1688910486242.png#id=fUJ8O&originHeight=829&originWidth=1623&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 不使用固定链接，文章的访问链接只能用上图的第一种规则，下面的规则基本无法使用。
