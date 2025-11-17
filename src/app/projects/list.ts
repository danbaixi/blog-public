interface Project {
	name: string
	year: number
	description: string
	image: string
	url: string
	tags: string[]
	github?: string
	npm?: string
}

export const projects: Project[] = [
	{
		name: '云小智',
		year: 2017,
		description: '专属白云学院的教务查询小程序',
		image: 'https://yunxiaozhi.cn/logo.png',
		url: 'https://yunxiaozhi.cn',
		github: 'https://github.com/danbaixi/yunxiaozhi',
		tags: ['小程序', '开源', '课表', '校园']
	},
	{
		name: '云小慧',
		year: 2023,
		description: '校园课表微信小程序全栈项目课程Node+原生小程序(含UI设计稿)',
		image: '/images/yunxiaohui.png',
		url: 'https://www.bilibili.com/video/BV1go4y1M7Fa',
		github: 'https://github.com/danbaixi/yunxiaohui',
		tags: ['免费开发课程', 'bilibili', '开源', '校园']
	}
]
