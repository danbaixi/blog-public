'use client'

import { motion } from 'motion/react'
import { ANIMATION_DELAY, INIT_DELAY } from '@/consts'
import LikeButton from '@/components/like-button'

export default function Page() {
	const features = [
		{
			title: '懂点前端',
			description: '熟练VUE、React、小程序、UniAPP开发',
			icon: '👨‍💻'
		},
		{
			title: '懂点后端',
			description: 'NODE.JS、PHP、甚至会点GOLANG',
			icon: '🔧'
		},
		{
			title: '懂点设计',
			description: '可以设计UI，但不负责切图！',
			icon: '🎨'
		},
		{
			title: '持续进步',
			description: '技术在迭代，持续学习中',
			icon: '🚀'
		}
	]

	return (
		<div className='flex flex-col items-center justify-center px-6 pt-32 pb-12'>
			<div className='w-full max-w-[800px]'>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: INIT_DELAY }} className='mb-12 text-center'>
					<h1 className='mb-4 text-4xl font-bold'>蛋白溪 Danbaixi</h1>
					<p className='text-secondary text-lg'>95后，男，居住东莞，求大佬们把我挖走~</p>
					<p className='text-secondary text-lg'>前端开发工程师，懂一些后端，懂一些设计。</p>
				</motion.div>

				<div className='grid gap-6 md:grid-cols-2'>
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: INIT_DELAY + ANIMATION_DELAY * (index + 1) }}
							className='card relative flex flex-col gap-3 p-6'>
							<div className='text-3xl'>{feature.icon}</div>
							<h3 className='text-xl font-semibold'>{feature.title}</h3>
							<p className='text-secondary leading-relaxed'>{feature.description}</p>
						</motion.div>
					))}
				</div>

				<div className='mt-8 flex items-center gap-6 max-md:flex-col'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: INIT_DELAY + ANIMATION_DELAY * 5 }}
						className='card w-full relative p-6'>
						<h3 className='mb-3 text-xl font-semibold'>技术栈</h3>
						<div className='flex flex-wrap gap-2'>
							{['JavaScript', 'TypeScript', 'Vue', 'React', 'UniAPP', 'NodeJS', 'PHP'].map(tech => (
								<span key={tech} className='text-secondary rounded-lg bg-white/50 px-3 py-1.5 text-sm'>
									{tech}
								</span>
							))}
						</div>
					</motion.div>

					{/* <div className='mx-auto' title='期待开源？'>
						<LikeButton slug='open-source' />
					</div> */}
				</div>
			</div>
		</div>
	)
}
