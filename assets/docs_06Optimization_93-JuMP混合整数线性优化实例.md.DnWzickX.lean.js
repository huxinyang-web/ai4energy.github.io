import{_ as l,o,c as e,j as s,a as n}from"./chunks/framework.D6sYw4vw.js";const h=JSON.parse('{"title":"JuMP混合整数线性优化实例","description":"","frontmatter":{},"headers":[],"relativePath":"docs/06Optimization/93-JuMP混合整数线性优化实例.md","filePath":"docs/06Optimization/93-JuMP混合整数线性优化实例.md","lastUpdated":1773485796000}'),c={name:"docs/06Optimization/93-JuMP混合整数线性优化实例.md"};function i(p,a,t,r,d,u){return o(),e("div",null,[...a[0]||(a[0]=[s("h1",{id:"jump混合整数线性优化实例",tabindex:"-1"},[n("JuMP混合整数线性优化实例 "),s("a",{class:"header-anchor",href:"#jump混合整数线性优化实例","aria-label":'Permalink to "JuMP混合整数线性优化实例"'},"​")],-1),s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("pre",null,[s("code",null,`Contents：优化

Contributor: YJY

Email:522432938@qq.com

如有错误，请批评指正。
`)]),s("h2",{id:"问题简介",tabindex:"-1"},[n("问题简介 "),s("a",{class:"header-anchor",href:"#问题简介","aria-label":'Permalink to "问题简介"'},"​")]),s("p",null,[s("a",{href:"https://adventofcode.com/2022/day/19",target:"_blank",rel:"noreferrer"},"Advent Of Code"),n("中有一个很有意思的问题，可用JuMP来求解。同时也是能源系统优化的一个缩影。")]),s("p",null,"问题如下："),s("p",null,"为了收获粘土，你需要专用的粘土收集机器人。要制造任何类型的机器人，你都需要矿石。收集矿石需要带大钻头的矿石收集机器人。幸运的是，你的背包中正好有一个矿石收集机器人，你可以使用它启动整个操作。"),s("p",null,[n("每个机器人"),s("strong",null,"每分钟可以收集1个其资源类型"),n("。机器人工厂（也在你的背包中）"),s("strong",null,"构建任何类型的机器人也需要一分钟"),n("，尽管它在构建开始时会消耗必要的可用资源，同时每分钟最多建造1个机器人。")]),s("p",null,"机器人工厂有很多蓝图（问题的输入）你可以选择，但一旦你用蓝图配置好了，你就不能改变它。"),s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",null,"蓝图1：")]),n(`
`),s("span",{class:"line"},[s("span",null,"    制造一个矿石机器人（ore robot）消耗4矿石（ore）。")]),n(`
`),s("span",{class:"line"},[s("span",null,"    制造一个粘土机器人（clay robot）消耗2矿石（ore）。")]),n(`
`),s("span",{class:"line"},[s("span",null,"    制造一个黑曜石机器人（obsidian robot）消耗3块矿石（ore）和14块粘土（clay）。")]),n(`
`),s("span",{class:"line"},[s("span",null,"    制造一个紫晶机器人（geode robot）消耗2个矿石（ore）和7个黑曜石（obsidian）。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"蓝图2：")]),n(`
`),s("span",{class:"line"},[s("span",null,"    制造一个矿石机器人消耗2矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"    制造一个粘土机器人消耗3矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"    制造一个黑曜石机器人消耗3块矿石和8块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"    制造一个紫晶机器人消耗3个矿石和12个黑曜石。")])])])]),s("p",null,[n("优化问题为："),s("strong",null,"如何分配资源去建造机器人，在24分钟后获得最多的紫晶"),n("。")]),s("p",null,"蓝图1的最优方案为最多获得9个紫晶，具体操作过程为："),s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",null,"==第1分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有1个矿石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第2分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有2个矿石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第3分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"花2矿石开始建造一个粘土收集机器人。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有1个矿石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"新的粘土收集机器人准备就绪；你现在有一个了。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第4分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有2个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1个粘土收集机器人收集1个粘土；你现在有1个粘土。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第5分钟==")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"花2矿石开始建造一个粘土收集机器人。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有1个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1个粘土收集机器人收集1个粘土；你现在有2个粘土。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"新的粘土收集机器人准备就绪；你现在有两个了。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第6分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有2个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个粘土收集机器人收集2个粘土；你现在有4块粘土。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第7分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"花2矿石开始建造一个粘土收集机器人。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有1个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个粘土收集机器人收集2个粘土；你现在有6块粘土。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"新的粘土收集机器人准备就绪；你现在有3个了。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第8分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有2个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"3个粘土收集机器人收集3个粘土；你现在有9块粘土。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第9分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有3个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"3个粘土收集机器人收集3个粘土；你现在有12块粘土。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第10分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有4个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"3个粘土收集机器人收集3个粘土；你现在有15块粘土。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==分钟11==")]),n(`
`),s("span",{class:"line"},[s("span",null,"花3块矿石和14块粘土开始建造一个黑曜石收集机器人。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有2个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"3个粘土收集机器人收集3个粘土；你现在有4块粘土。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"新的黑曜石收集机器人准备就绪；你现在有一个了。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第12分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"花2矿石开始建造一个粘土收集机器人。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有1个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"3个粘土收集机器人收集3个粘土；你现在有7块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1个黑曜石收集机器人收集1颗黑曜岩；你现在有1个黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"新的粘土收集机器人准备就绪；你现在有4个。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第13分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有2个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有11块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1个黑曜石收集机器人收集1颗黑曜岩；你现在有2颗黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第14分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有3个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有15块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1个黑曜石收集机器人收集1颗黑曜岩；你现在有3个黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第15分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"花3块矿石和14块粘土开始建造一个黑曜石收集机器人。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有1个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有5块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1个黑曜石收集机器人收集1颗黑曜岩；你现在有4颗黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"新的黑曜石收集机器人准备就绪；你现在有两个了。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第16分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有2个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有9块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个黑曜石收集机器人收集2个黑曜石；你现在有6颗黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第17分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有3个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有13块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个黑曜石收集机器人收集2个黑曜石；你现在有8颗黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第18分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"花2颗矿石和7颗黑曜石开始建造一个紫晶机器人。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有2个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有17块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个黑曜石收集机器人收集2个黑曜石；你现在有3个黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"新的紫晶机器人准备就绪；你现在有一个了。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第19分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有3个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有21块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个黑曜石收集机器人收集2个黑曜石；你现在有5颗黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"1个紫晶机器人收集1个紫晶；你现在有一个紫晶。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第20分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有4个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有25块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个黑曜石收集机器人收集2个黑曜石；你现在有7颗黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"1个紫晶机器人收集1个紫晶；你现在有2个紫晶。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第21分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"花2颗矿石和7颗黑曜石开始建造一个紫晶机器人。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有3个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有29块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个黑曜石收集机器人收集2个黑曜石；你现在有2颗黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"1个紫晶开裂机器人开裂1个大地洞；你现在有3个紫晶。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"新的紫晶机器人准备就绪；你现在有两个了。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第22分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有4个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有33块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个黑曜石收集机器人收集2个黑曜石；你现在有4颗黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个紫晶机器人收集2个紫晶；你现在有5个紫晶。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第23分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有5个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有37块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个黑曜石收集机器人收集2个黑曜石；你现在有6颗黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个紫晶机器人收集2个紫晶；你现在有7个紫晶。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"==第24分钟==")]),n(`
`),s("span",{class:"line"},[s("span",null,"1台矿石收集机器人收集1个矿石；你现在有6个矿石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"4个粘土收集机器人收集4个粘土；你现在有41块粘土。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个黑曜石收集机器人收集2个黑曜石；你现在有8颗黑曜石。")]),n(`
`),s("span",{class:"line"},[s("span",null,"2个紫晶机器人收集2个紫晶；你现在有9个紫晶。")])])])]),s("p",null,"蓝图2最多获得12个紫晶。"),s("p",null,"对于以下蓝图，分别能获得的最多紫晶是多少？"),s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",null,"Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 17 clay. Each geode robot costs 4 ore and 20 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 2: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 3 ore and 8 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 3: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 7 clay. Each geode robot costs 4 ore and 13 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 4: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 10 clay. Each geode robot costs 3 ore and 14 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 5: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 17 clay. Each geode robot costs 3 ore and 16 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 6: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 16 clay. Each geode robot costs 2 ore and 15 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 7: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 2 ore and 15 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 8: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 2 ore and 18 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 9: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 7 clay. Each geode robot costs 2 ore and 19 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 10: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 6 clay. Each geode robot costs 3 ore and 16 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 11: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 3 ore and 19 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 12: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 2 ore and 12 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 13: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 4 ore and 17 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 14: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 14 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 15: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 10 clay. Each geode robot costs 2 ore and 11 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 16: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 13 clay. Each geode robot costs 3 ore and 11 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 17: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 3 ore and 10 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 18: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 17 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 19: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 11 clay. Each geode robot costs 4 ore and 12 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 20: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 7 clay. Each geode robot costs 3 ore and 10 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 21: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 13 clay. Each geode robot costs 3 ore and 7 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 22: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 2 ore and 7 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 23: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 3 ore and 18 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 24: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 18 clay. Each geode robot costs 4 ore and 8 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 25: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 4 ore and 15 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 26: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 3 ore and 9 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 27: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 5 clay. Each geode robot costs 3 ore and 7 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 28: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 11 clay. Each geode robot costs 2 ore and 8 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 29: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 12 clay. Each geode robot costs 3 ore and 15 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 30: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 10 clay. Each geode robot costs 3 ore and 10 obsidian.")])])])]),s("h2",{id:"优化问题的数学表达",tabindex:"-1"},[n("优化问题的数学表达 "),s("a",{class:"header-anchor",href:"#优化问题的数学表达","aria-label":'Permalink to "优化问题的数学表达"'},"​")]),s("p",null,"因为涉及到时间域上的状态改变（本质就是离散），所以需要在求解时间域上的每个时间点上设置一个变量。同时，每个不同种类的矿石也需要设置变量。"),s("p",null,"变量设置："),s("ul",null,[s("li",null,"每个种类每个时间点矿石数量，整数"),s("li",null,"每个种类每个时间点机器人数量，整数"),s("li",null,"每个种类每个时间点是否建造，0或1")]),s("p",null,"所以有："),n(" robots_{i,j} \\in N\\\\ isBuild_{i,j} \\in \\{0,1\\}\\\\ obtains_{i,j} \\in N\\\\ i \\in \\{ore, clay, obsidian, geode\\}\\\\ j \\in \\{1,2,3...,23,24\\} "),s("p",null,"优化目标为第24分钟，紫晶最多："),s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"max"),s("mi",null,"o"),s("mi",null,"b"),s("mi",null,"t"),s("mi",null,"a"),s("mi",null,"i"),s("mi",null,"n"),s("msub",null,[s("mi",null,"s"),s("mrow",null,[s("mi",null,"g"),s("mi",null,"e"),s("mi",null,"o"),s("mi",null,"d"),s("mi",null,"e"),s("mo",{separator:"true"},","),s("mn",null,"2"),s("mn",null,"4")])])]),s("annotation",{encoding:"application/x-tex"},"\\max obtains_{geode,24} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.69444em"}}),s("span",{class:"strut bottom",style:{height:"0.980548em","vertical-align":"-0.286108em"}}),s("span",{class:"base displaystyle textstyle uncramped"},[s("span",{class:"mop"},"max"),s("span",{class:"mord mathit"},"o"),s("span",{class:"mord mathit"},"b"),s("span",{class:"mord mathit"},"t"),s("span",{class:"mord mathit"},"a"),s("span",{class:"mord mathit"},"i"),s("span",{class:"mord mathit"},"n"),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"s"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord scriptstyle cramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathit"},"e"),s("span",{class:"mord mathit"},"o"),s("span",{class:"mord mathit"},"d"),s("span",{class:"mord mathit"},"e"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathrm"},"2"),s("span",{class:"mord mathrm"},"4")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),n("​")])])])])])])])]),s("p",null,"约束："),s("ul",null,[s("li",null,"矿石量等于上一周期的矿石量加上本周期的产出减去本周期的消耗。")]),s("p",null,"::: note costs的每一行是建造不同种机器人消耗的材料个数。"),s("pre",null,[s("code",null,`$$costs =  \\begin{bmatrix}[4, 3, 2, 3] \\\\ [0, 0, 17, 0] \\\\ [0, 0, 0, 16] \\\\ [0, 0, 0, 0]\\end{bmatrix}
\`\`\`

例如，第一行为建造4中不同的机器人，分别要消耗4，3，2，3个ore；第二行为建造4中不同的机器人,分别要消耗0，0，17，0个clay：$$math
`)]),s("p",{"k,j":""},"obtains_{i,j} = obtains_{i,j-1}+robots_{i,j} - \\sum_{k}^{} costs_{i,k} * isBulid_"),s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"- 上一个周期结束，矿石足够才能在本周期建造机器人")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"$$obtains_{i,j-1} \\geqslant \\sum_{k}^{} costs_{i,k} * isBulid_{k,j}$$")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"- 建造机器人，数量增加")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"$$robots_{i,j} =  robots_{i,j-1}  + isBulid_{i,j-1}$$")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"- 一次只能建造一个机器人")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"$$\\sum_{k}^{} isBulid_{k,j} \\leqslant 1$$")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"- 初值条件，没有材料且只有一台矿石机器人：")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"$$isBulid_{i,1} = 0, i \\in \\{ore, clay, obsidian, geode\\}\\\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"obtain_{i,1} = 0, i \\in \\{ clay, obsidian, geode\\}\\\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"robots_{i,1} = 0, i \\in \\{ clay, obsidian, geode\\}\\\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"obtain_{ore,1} = 1 \\\\")]),n(`
`),s("span",{class:"line"},[s("span",null,"robots_{ore,1} = 1 \\\\$$")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"## JuMP求解代码")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"```julia solve")]),n(`
`),s("span",{class:"line"},[s("span",null,"using JuMP")]),n(`
`),s("span",{class:"line"},[s("span",null,"import HiGHS")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'inputs = """Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 17 clay. Each geode robot costs 4 ore and 20 obsidian.')]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 2: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 3 ore and 8 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 3: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 7 clay. Each geode robot costs 4 ore and 13 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 4: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 10 clay. Each geode robot costs 3 ore and 14 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 5: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 17 clay. Each geode robot costs 3 ore and 16 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 6: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 16 clay. Each geode robot costs 2 ore and 15 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 7: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 2 ore and 15 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 8: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 2 ore and 18 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 9: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 7 clay. Each geode robot costs 2 ore and 19 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 10: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 6 clay. Each geode robot costs 3 ore and 16 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 11: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 3 ore and 19 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 12: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 2 ore and 12 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 13: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 4 ore and 17 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 14: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 14 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 15: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 10 clay. Each geode robot costs 2 ore and 11 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 16: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 13 clay. Each geode robot costs 3 ore and 11 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 17: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 3 ore and 10 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 18: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 17 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 19: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 11 clay. Each geode robot costs 4 ore and 12 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 20: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 7 clay. Each geode robot costs 3 ore and 10 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 21: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 13 clay. Each geode robot costs 3 ore and 7 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 22: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 2 ore and 7 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 23: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 3 ore and 18 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 24: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 18 clay. Each geode robot costs 4 ore and 8 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 25: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 4 ore and 15 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 26: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 3 ore and 9 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 27: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 5 clay. Each geode robot costs 3 ore and 7 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 28: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 11 clay. Each geode robot costs 2 ore and 8 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 29: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 12 clay. Each geode robot costs 3 ore and 15 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Blueprint 30: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 10 clay. Each geode robot costs 3 ore and 10 obsidian.")]),n(`
`),s("span",{class:"line"},[s("span",null,'"""')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"inputs = IOBuffer(inputs)")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"function readData(path=inputs)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    rawData = readlines(path)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    rawData = split.(rawData, c -> c == '.' || c == ':')")]),n(`
`),s("span",{class:"line"},[s("span",null,"    regs = [")]),n(`
`),s("span",{class:"line"},[s("span",null,'        r"Blueprint (\\d+)",')]),n(`
`),s("span",{class:"line"},[s("span",null,'        r"costs (\\d+) ore",')]),n(`
`),s("span",{class:"line"},[s("span",null,'        r"costs (\\d+) ore",')]),n(`
`),s("span",{class:"line"},[s("span",null,'        r"costs (\\d+) ore and (\\d+) clay",')]),n(`
`),s("span",{class:"line"},[s("span",null,'        r"costs (\\d+) ore and (\\d+) obsidian",')]),n(`
`),s("span",{class:"line"},[s("span",null,"    ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"    d = Dict{Int,Vector{Vector{Int64}}}()")]),n(`
`),s("span",{class:"line"},[s("span",null,"    for line in rawData |> eachindex")]),n(`
`),s("span",{class:"line"},[s("span",null,"        c = map(x -> zeros(Int64, 4), 1:4)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        r = Vector{Int64}[]")]),n(`
`),s("span",{class:"line"},[s("span",null,"        for i in 1:5")]),n(`
`),s("span",{class:"line"},[s("span",null,"            m = match(regs[i], rawData[line][i]).captures")]),n(`
`),s("span",{class:"line"},[s("span",null,"            m = map(x -> parse(Int64, x), m)")]),n(`
`),s("span",{class:"line"},[s("span",null,"            push!(r, m)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        end")]),n(`
`),s("span",{class:"line"},[s("span",null,"        c[1][1] = r[2][1]")]),n(`
`),s("span",{class:"line"},[s("span",null,"        c[1][2] = r[3][1]")]),n(`
`),s("span",{class:"line"},[s("span",null,"        c[1][3] = r[4][1]")]),n(`
`),s("span",{class:"line"},[s("span",null,"        c[1][4] = r[5][1]")]),n(`
`),s("span",{class:"line"},[s("span",null,"        c[2][3] = r[4][2]")]),n(`
`),s("span",{class:"line"},[s("span",null,"        c[3][4] = r[5][2]")]),n(`
`),s("span",{class:"line"},[s("span",null,"        d[r[1][1]] = c")]),n(`
`),s("span",{class:"line"},[s("span",null,"    end")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return d")]),n(`
`),s("span",{class:"line"},[s("span",null,"end")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"function solve_1(costs, periods)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    model = Model(HiGHS.Optimizer)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    set_silent(model)")]),n(`
`),s("span",{class:"line"},[s("span",null,'    names = ["ore", "clay", "obsidian", "geode"]')]),n(`
`),s("span",{class:"line"},[s("span",null,"    # robots为每个机器人的数量，obtains为每个机器人每个周期的产出，isBuild为每个机器人每个周期是否建造")]),n(`
`),s("span",{class:"line"},[s("span",null,"    @variable(model, robots[names, periods], Int)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    @variable(model, obtains[names, periods], Int)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    @variable(model, isBuild[names, periods], Bin)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # 矿石量等于上一周期的矿石量加上本周期的产出减去本周期的消耗")]),n(`
`),s("span",{class:"line"},[s("span",null,"    for (p1, p2) ∈ zip(periods[1:end-1], periods[2:end])")]),n(`
`),s("span",{class:"line"},[s("span",null,"        @constraint(model, [ind = 1:4], obtains[names[ind], p2] == obtains[names[ind], p1] + robots[names[ind], p2] - sum(costs[ind] .* isBuild[:, p2]))")]),n(`
`),s("span",{class:"line"},[s("span",null,"    end")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # 矿石足够才能建造机器人")]),n(`
`),s("span",{class:"line"},[s("span",null,"    for (p1, p2) ∈ zip(periods[1:end-1], periods[2:end])")]),n(`
`),s("span",{class:"line"},[s("span",null,"        @constraint(model, [ind = 1:4], obtains[names[ind], p1] >= sum(costs[ind] .* isBuild[:, p2]))")]),n(`
`),s("span",{class:"line"},[s("span",null,"    end")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # 建造机器人")]),n(`
`),s("span",{class:"line"},[s("span",null,"    for (p1, p2) ∈ zip(periods[1:end-1], periods[2:end])")]),n(`
`),s("span",{class:"line"},[s("span",null,"        @constraint(model, [ind = 1:4], robots[names[ind], p2] == robots[names[ind], p1] + isBuild[names[ind], p1])")]),n(`
`),s("span",{class:"line"},[s("span",null,"    end")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # 一次只能建造一个机器人")]),n(`
`),s("span",{class:"line"},[s("span",null,"    @constraint(model, [i = periods], sum(isBuild[:, i]) <= 1)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # 初始条件")]),n(`
`),s("span",{class:"line"},[s("span",null,"    @constraint(model, [ind = 2:4], robots[names[ind], 1] == 0)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    @constraint(model, [ind = 1:1], robots[names[ind], 1] == 1)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    @constraint(model, [ind = 2:4], obtains[names[ind], 1] == 0)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    @constraint(model, [ind = 1:1], obtains[names[ind], 1] == 1)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    @constraint(model, [ind = 1:4], isBuild[names[ind], 1] == 0)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # 目标函数")]),n(`
`),s("span",{class:"line"},[s("span",null,'    @objective(model, Max, obtains["geode", lastindex(periods)])')]),n(`
`),s("span",{class:"line"},[s("span",null,"    optimize!(model)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return objective_value(model) |> Int")]),n(`
`),s("span",{class:"line"},[s("span",null,"end")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"function solve_P1()")]),n(`
`),s("span",{class:"line"},[s("span",null,"    d = readData()")]),n(`
`),s("span",{class:"line"},[s("span",null,"    s = String[]")]),n(`
`),s("span",{class:"line"},[s("span",null,"    for (i, c) in d")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res = solve_1(c, 1:24)")]),n(`
`),s("span",{class:"line"},[s("span",null,'        push!(s,"第$(i)个结果:"*string(res))')]),n(`
`),s("span",{class:"line"},[s("span",null,"    end")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return s")]),n(`
`),s("span",{class:"line"},[s("span",null,"end")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"solve_P1()")])])])]),s("h2",{id:"小结",tabindex:"-1"},[n("小结 "),s("a",{class:"header-anchor",href:"#小结","aria-label":'Permalink to "小结"'},"​")]),s("p",null,"这个问题重要的特点为："),s("ul",null,[s("li",null,"存在时域上的状态转移（能源系统中负荷的变化等等），以及如何用变量之间的关联体现状态转移的关系"),s("li",null,"包含整数与布尔变量（设备启停、满足最小需求的设备数量等等）")])],-1)])])}const E=l(c,[["render",i]]);export{h as __pageData,E as default};
