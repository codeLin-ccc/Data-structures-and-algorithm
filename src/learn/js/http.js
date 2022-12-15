// 304 

// 协商缓存和强缓存
// 强缓存
// 上面的 expires 和 cache-control 都会访问本地缓存直接验证看是否过期，

// 协商缓存
// last-modified 记录资源最后修改的时间。
// 为了解决 last-modified 上述问题，有了 etag。 etag 会基于资源的内容编码生成一串唯一的标识字符串，
// 只要内容不同，就会生成不同的 etag。启用 etag 之后，请求资源后的响应返回会增加一个 etag 字段，


/* 假设当前有这么一个 index 页面，返回的响应信息如下：
cache-control: max-age=72000
expires: Tue, 20 Nov 2018 20:41:14 GMT
last-modified: Tue, 20 Nov 2018 00:41:14 GMT */

/* 
1、标签进入、输入url回车进入
  1.由于该例没有设置 no-cache 和 no-store, 所以默认先走强缓存路线。
    根据 cache-control （expires 优先级低）判断缓存是否过期，若没有过期则此时返回 200(from cache)
  2.若本地缓存已经过期再走协商缓存路线，根据之前的 last-modified 值去与服务器比对，
    若这个时间之后没有改过则去读取本地缓存，返回 304(not modified)
  3.否则返回新的资源，状态码 200(ok)，并更新返回响应的 last-modified 值。 */

/* 
2、按刷新按钮、F5 刷新、网页右键“重新加载”
  这种情况下，实际是浏览器将 cache-control 的 max-age 直接设置成了 0，让缓存立即过期，直接走协商缓存路线。发送的请求头如下：
  cache-control: max-age=0
  if-modified-since: Tue, 20 Nov 2018 00:41:14 GMT  */

/* 
3、ctrl + F5 强制刷新
强制刷新的情况下，浏览器会强行设置 no-cache，强制获取最新的资源，
就连 if-modified-since 等其他缓存协议字段都会被吃掉。此时发送的请求头如下：
cache-control: no-cache
pragma: no-cache
 */