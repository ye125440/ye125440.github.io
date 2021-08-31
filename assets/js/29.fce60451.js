(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{394:function(_,v,t){"use strict";t.r(v);var a=t(45),r=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"用信鸽解释-https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用信鸽解释-https"}},[_._v("#")]),_._v(" 用信鸽解释 HTTPS")]),_._v(" "),t("p",[_._v("原文地址："),t("a",{attrs:{href:"https://medium.freecodecamp.org/https-explained-with-carrier-pigeons-7029d2193351",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://medium.freecodecamp.org/https-explained-with-carrier-pigeons-7029d2193351"),t("OutboundLink")],1)]),_._v(" "),t("p",[_._v("密码学很难理解。它充满了数学证明。但是，除非你真的在开发密码系统，否则这种复杂性中的大部分并不需要去理解高级别的情况。")]),_._v(" "),t("p",[_._v("如果你打开这篇文章希望创建下一个 HTTPS 协议，很抱歉，鸽子是不够的。如若不然，煮些咖啡，享受这篇文章。")]),_._v(" "),t("h2",{attrs:{id:"爱丽丝、鲍勃和-鸽子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#爱丽丝、鲍勃和-鸽子"}},[_._v("#")]),_._v(" 爱丽丝、鲍勃和……鸽子？")]),_._v(" "),t("p",[_._v("你在互联网上做的任何活动(阅读这篇文章，在亚马逊上买东西，上传猫的图片)都可以归结为向服务器发送和接收信息。")]),_._v(" "),t("p",[_._v("这可能有点抽象，所以让我们想象这些信息是由信鸽传递的。我知道这可能看起来很武断，但是相信我，HTTPS 的工作方式也是一样的，尽管速度要快得多。")]),_._v(" "),t("p",[_._v("我们也不谈论服务器、客户端和黑客，而是谈论爱丽丝、鲍勃和马洛里。如果这不是你第一次试图理解密码概念，你会认出这些名字，因为它们在技术文献中被广泛使用。")]),_._v(" "),t("h2",{attrs:{id:"第一次原始的交流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一次原始的交流"}},[_._v("#")]),_._v(" 第一次原始的交流")]),_._v(" "),t("p",[_._v("如果爱丽丝想给鲍勃发送一条消息，她会把这条消息贴在信鸽腿上，然后发送给鲍勃。鲍勃收到了消息，阅读了它，一切都很好。")]),_._v(" "),t("p",[_._v("但是如果马洛里在飞行中拦截了爱丽丝的鸽子并改变了消息呢？鲍勃不可能知道爱丽丝发送的信息在传输过程中被修改了。")]),_._v(" "),t("p",[_._v("这就是 HTTP 的工作方式。很可怕吧？我不会通过 HTTP 发送我的银行凭证，你也不应该。")]),_._v(" "),t("h2",{attrs:{id:"密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#密码"}},[_._v("#")]),_._v(" 密码")]),_._v(" "),t("p",[_._v("如果爱丽丝和鲍勃非常狡猾呢？他们同意用密码写他们的信息。他们将把每个字母在字母表中移动 3 个位置。例如 D→A、E→B、F→C。纯文本消息的“secret message”将是“pbzobq jbppxdb”。")]),_._v(" "),t("p",[_._v("现在，如果马洛里拦截了鸽子，她将无法将信息变成有意义的东西，也无法理解它说的是什么，因为她不知道代码。但是鲍勃可以简单地反向应用代码并解密消息，其中 A→D，B→E，C→F。密码文本“pbzobq jbppxdb”将被解密回“secret message”。")]),_._v(" "),t("p",[_._v("成功了！")]),_._v(" "),t("p",[_._v("这称为对称密钥加密，因为如果你知道如何加密消息，你也会知道如何解密它。")]),_._v(" "),t("p",[_._v("我上面描述的代码通常被称为凯撒密码。在现实生活中，我们使用更繁复的代码，但主要思想是一样的。")]),_._v(" "),t("h2",{attrs:{id:"我们如何决定秘钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我们如何决定秘钥"}},[_._v("#")]),_._v(" 我们如何决定秘钥？")]),_._v(" "),t("p",[_._v("如果除了发送方和接收方之外没有人知道使用了什么密钥，对称密钥加密是非常安全的。在凯撒密码中，密钥是我们移动每个字母的偏移量。在我们的例子中，我们使用了 3 的偏移量，但是也可以使用 4 或 12。")]),_._v(" "),t("p",[_._v("问题是，如果爱丽丝和鲍勃在开始和鸽子一起发送信息之前不见面，他们将无法安全地建立密钥。如果他们在消息中发送密钥，马洛里会截取消息并发现密钥。这将允许马洛里在爱丽丝和鲍勃开始加密他们的信息之前和之后，按照她的意愿阅读或更改信息。")]),_._v(" "),t("p",[_._v("这是一个典型的中间人攻击的例子，避免这种攻击的唯一方法是一起改变加密系统。")]),_._v(" "),t("h2",{attrs:{id:"鸽子携带箱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#鸽子携带箱"}},[_._v("#")]),_._v(" 鸽子携带箱")]),_._v(" "),t("p",[_._v("所以爱丽丝和鲍勃想出了一个更好的系统。当鲍勃想给爱丽丝发送消息时，她会遵循以下步骤:")]),_._v(" "),t("ul",[t("li",[_._v("鲍勃给爱丽丝发了一只没有携带任何消息的鸽子。")]),_._v(" "),t("li",[_._v("爱丽丝把鸽子送回来了，各自带着一个开着锁的盒子，但是保留着钥匙。")]),_._v(" "),t("li",[_._v("鲍勃把信息放在盒子里，关上锁，把盒子寄给爱丽丝。")]),_._v(" "),t("li",[_._v("爱丽丝收到盒子，用钥匙打开盒子并阅读信息。")])]),_._v(" "),t("p",[_._v("这样马洛里就不能通过拦截鸽子来改变信息，因为她没有钥匙。当爱丽丝想给鲍勃发一条信息时，也遵循同样的过程。")]),_._v(" "),t("p",[_._v("爱丽丝和鲍勃刚刚使用了通常所说的非对称密钥加密技术。这叫做非对称，因为即使你能加密一条消息(锁定盒子)，你也不能解密它(打开一个封闭的盒子)。 在技术演讲中，盒子被称为公钥，打开盒子的钥匙被称为私钥。")]),_._v(" "),t("h2",{attrs:{id:"我如何信任这个盒子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我如何信任这个盒子"}},[_._v("#")]),_._v(" 我如何信任这个盒子？")]),_._v(" "),t("p",[_._v("如果你注意到了，你可能已经注意到我们仍然有问题。当鲍勃收到那只打开的盒子时，他怎么能确定它来自爱丽丝，马洛里没有拦截鸽子，而是用她有钥匙的盒子换了一只？")]),_._v(" "),t("p",[_._v("爱丽丝决定她将在盒子上签名，这样鲍勃收到盒子时，他会检查签名，并知道是爱丽丝发送了盒子。")]),_._v(" "),t("p",[_._v("你们中的一些人可能会想，鲍勃首先会如何识别爱丽丝的签名？问得好。爱丽丝和鲍勃也有这个问题，所以他们决定，由泰德在盒子上签字，而不是爱丽丝在盒子上签字。")]),_._v(" "),t("p",[_._v("谁是泰德？泰德是一个非常有名、知名和值得信赖的人。泰德给每个人签名，每个人都相信他只会给合法的人签名。")]),_._v(" "),t("p",[_._v("泰德只会在爱丽丝的盒子上签名，如果他确定要求签名的是爱丽丝的话。所以马洛里不能得到一个由泰德代表她签名的爱丽丝盒子，因为泰德只在验证了人们的身份后才为他们签名，所以鲍勃会知道这个盒子是一个骗局。")]),_._v(" "),t("p",[_._v("泰德在技术术语上通常被称为认证机构，你阅读这篇文章的浏览器附带了各种认证机构的签名。")]),_._v(" "),t("p",[_._v("所以当你第一次连接到网站时，你信任它的盒子，因为你信任泰德，泰德(认证机构)告诉你盒子是合法的。")]),_._v(" "),t("h2",{attrs:{id:"箱子很重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#箱子很重"}},[_._v("#")]),_._v(" 箱子很重")]),_._v(" "),t("p",[_._v("爱丽丝和鲍勃现在有了可靠的通信系统，但是他们意识到，携带盒子的鸽子比只携带信息的鸽子慢。")]),_._v(" "),t("p",[_._v("他们决定，他们只使用加密盒子方法(非对称密码)来选择一个密钥，使用对称密码(还记得凯撒密码吗？)来加密真正的消息 。")]),_._v(" "),t("p",[_._v("通过这种方式，他们得到了二者结合的最好结果。非对称密码的可靠性和对称密码的效率。")]),_._v(" "),t("p",[_._v("现实世界中并没有慢鸽子，但是使用非对称加密比使用对称加密慢，所以我们只使用它来交换加密密钥。")]),_._v(" "),t("p",[_._v("现在你知道 HTTPS 是如何工作的，你的咖啡也应该准备好了。来一杯吧，那是你应得的。")])])}),[],!1,null,null,null);v.default=r.exports}}]);