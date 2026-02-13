import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 显示列数：2列或3列
	columns: 2,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "夏夜流萤",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=7618557&s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "小白のblog",
		imgurl: "https://r2cfimg.showby.top/2024/09/19/66eb06a884fb9.jpg",
		desc: "Ciallo～(∠・ω< )⌒☆",
		siteurl: "https://www.showby.top/",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "Rownix's Blog",
		imgurl: "https://xapi.rownix.dev/8bec399a8d697bf4db49df6073b263795760a2a9.jpg",
		desc: "活着就是为了改变世界，难道还有其他原因吗？",
		siteurl: "https://www.rownix.dev/",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "Geekertao blog",
		imgurl: "https://obj.geekertao.top/geekertao.jpg",
		desc: "不为梦想本身奋斗。为那个提出梦想的自己。",
		siteurl: "https://www.geekertao.com/",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "AcoFork Blog",
		imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0",
		desc: "树树的博客，基于Astro搭建",
		siteurl: "https://blog.acofork.com/",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "明月清风的博客",
		imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=3585367299&spec=0",
		desc: "爱整活，爱生活，这里是明月清风的个人博客。",
		siteurl: "https://blog.070219.xyz/",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["Docs"],
		weight: 8,
		enabled: true,
	},
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		weight: 8,
		enabled: true,
	},
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
	return friendsConfig
		.filter((friend) => friend.enabled)
		.sort((a, b) => b.weight - a.weight);
};


