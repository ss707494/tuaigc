import {Button, Image, Input, Swiper, SwiperItem, View} from '@tarojs/components'
import search from '../../public/search.svg'
import swiderPng from '../../public/swider.png'
import rightIcon from '../../public/right.svg'
import GoddessMaria from '../../public/GoddessMaria.png'
import Moonlight from '../../public/Moonlight.png'
import SpiderPotter from '../../public/SpiderPotter.png'
import JungleHunter from '../../public/JungleHunter.png'
import avagIcon from '../../public/avag.png'
import eyeIcon from '../../public/eye.svg'
import pointIcon from '../../public/point.svg'
import homeIcon from '../../public/home.svg'
import mineIcon from '../../public/mine.svg'
import logoIcon from '../../public/logo.svg'
import {useState} from 'react'
import Taro from '@tarojs/taro'

const listData = [
  [SpiderPotter, 'Spider Potter', 'Love, celebration, and a promise of forever.'],
  [GoddessMaria, 'Goddess Maria', 'The rise and fall of an ancient empire.'],
  [Moonlight, 'Moonlight', 'The rise and fall of an ancient empire.'],
  [JungleHunter, 'Jungle Hunter', 'The rise and fall of an ancient empire.'],
]


// html结构待优化
export const IndexPage = () => {

  const [actTab, setActTab] = useState('Recommended')
  const [actFilter, setActFilter] = useState('Default')

  return <View>
    <View className='mb-5 mr-3 flex justify-end'>
      <View className='w-9 h-9 rounded-[50%] shadow-[3px_4px_4px_rgba(0,71,137,0.25)] flex items-center justify-center'>
        <View className='flex flex-col gap-1 mt-1'>
          <View className='w-4 h-0 bg-[#15097A] border-[1px] border-[#15097A]'></View>
          <View className='w-4 h-0 bg-[#15097A] border-[1px] border-[#15097A]'></View>
          <View className='w-4 h-0 bg-[#15097A] border-[1px] border-[#15097A]'></View>
        </View>
      </View>
    </View>
    <View className='h-9 rounded-2xl border border-violet-950 flex items-center pl-4'>
      <Image className='w-6 h-6 relative'
        src={search}
      />
      <Input type='text'
        placeholder='Search for dreams'
      />
    </View>

    <View className='pb-20'>
      <Swiper
        className='mt-3 px-2 h-[566rpx]'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
      >
        {Object.keys(Array(7).fill('')).map(v => <SwiperItem key={`swider${v}`}
          className='relative'
        >
          <View className='w-full h-full'>
            <View className='w-full p-1 bg-[rgba(255,89,221,0.18)]'>
              <Image className='w-full'
                src={swiderPng}
              />
            </View>
            <View className='top-[28rpx] left-[-66rpx] absolute rotate-[-41.13deg] px-8 flex justify-center items-center bg-rose-600'>
              <View className='text-white text-3xl font-extrabold leading-10'>TOP1</View>
            </View>

            <View className='m-1 flex flex-col gap-2 absolute right-0 top-0 w-full h-full pl-[66%] pt-4'
              style={{background: 'linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.29) 51.15%, rgba(255, 255, 255, 0.12) 59.9%, rgba(255, 255, 255, 0.00) 100%)'}}
            >
              <View className="text-black text-2xl font-bold font-['Poppins'] leading-9">Arachna</View>
              <View className="text-slate-900 text-xs font-normal font-['Poppins'] leading-none">A
                group of spider women on the outskirts of the city. These fierce and elegant creatures possess the upper
                body of a woman and the lower body of a spider...</View>
              <Button className='border-none text-black text-sm font-bold leading-tight py-2 rounded-xl'>
                Get started
              </Button>
            </View>
          </View>
        </SwiperItem>)}
      </Swiper>
      <View>
        <View className='mt-2 mx-4 flex gap-3 text-[#062C81] border-b border-b-[#EDEDED]'>
          {['Recommended', 'Fan Fiction', 'Sci-fi', 'RPG'].map(v => <View onClick={() => setActTab(v)}
            className={`${v === actTab ? 'text-[#D70B5F]' : ''}`}
            key={`tab${v}`}
          >{v}</View>)}
          <View><Image className='w-4 h-5'
            src={rightIcon}
          /></View>
        </View>
        <View className='mx-4 mt-1 flex gap-5 text-[#062C81]'>
          {['Default', 'Recent', 'Hot', 'Nodes'].map(v => <View
            onClick={() => setActFilter(v)}
            className={`${v === actFilter ? 'text-[#15097A] border-b-2 border-b-[#15097A]' : ''}`}
            key={`filter${v}`}
          >
            {v}
          </View>)}
          <View className='relative'>
            <View className='absolute w-[2rpx] h-full bg-[#D8D8D8] left-[-40rpx]'></View>
            Filter</View>
        </View>
        <View className='w-96 h-7 relative'>
          <View className='w-96 h-7 left-0 top-0 absolute'>
            <View className='w-80 h-5 left-0 top-[1px] absolute'>
              <View className="w-6 h-5 left-[192px] top-0 absolute text-blue-900 text-sm font-normal font-['Poppins'] leading-tight"></View>
              <View className="w-12 h-5 left-[263px] top-0 absolute text-blue-900 text-sm font-normal font-['Poppins'] leading-tight"></View>
              <View className="w-14 h-3.5 left-0 top-0 absolute text-violet-950 text-sm font-bold font-['Poppins'] leading-tight"></View>
            </View>
            <View className="w-32 h-7 left-[331px] top-0 absolute text-violet-950 text-sm font-normal font-['Poppins'] leading-tight"></View>
          </View>
          <View className="w-12 h-4 left-[95px] top-[1px] absolute text-violet-950 text-sm font-normal font-['Poppins'] leading-tight"></View>
        </View>
        <View className='mx-1 bt-2 grid grid-cols-2 gap-1.5'>
          {listData.map(v => <View className='relative col-span-1 h-[360rpx] rounded-xl overflow-hidden'
            style={{boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.25)'}}
            key={`list${v[1]}`}
            onClick={() => {
                                     Taro.navigateTo({
                                       url: `/pages/detail/index`,
                                     })
                                   }}
          >
            <View className='top-[15rpx] left-[-66rpx] absolute rotate-[-49.13deg] px-8 flex justify-center items-center bg-rose-600'>
              <View className='text-white text-base font-extrabold leading-normal'>New</View>
            </View>
            <View className='text-white text-xs absolute right-2 top-[202rpx] flex items-center'>
              <Image className='w-3 h-3'
                src={eyeIcon}
              />
              <View className='mr-5'>
                330.5K
              </View>
              <Image className='w-5 h-5 absolute left-[50%] top-[2rpx]'
                src={pointIcon}
              />
              <View className=''>
                1280
              </View>
            </View>
            <Image className='w-full h-[240rpx]  object-cover'
              src={v[0]}
            />
            <View className='px-1 text-slate-900 text-base font-bold leading-tight'>Spider Potter</View>
            <View className='flex px-1 '>
              <View className='text-slate-900 text-xs font-normal leading-none'>Love, celebration, and a promise
                of forever.
              </View>
              <Image className='shrink-[0] w-6 h-6 rounded-[50%] object-cover'
                src={avagIcon}
              />
            </View>
          </View>)}
        </View>
      </View>
    </View>
    <View className='fixed bottom-0 w-full bg-white h-16 flex justify-evenly items-center'>
      <View className='flex flex-col items-center'>
        <View style={{boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.25)'}}
          className='w-6 h-6 flex items-center justify-center rounded-[50%]'
        >
          <Image className='w-3 h-3'
            src={homeIcon}
          />
        </View>
        <View className=' text-xs font-semibold'>
          Home
        </View>
      </View>
      <View>
        <Image className='w-12 h-12'
          src={logoIcon}
        />
      </View>
      <View className='w-6 h-6 flex flex-col items-center'>
        <View><Image className='w-4 h-4'
          src={mineIcon}
        /></View>
        <View className='opacity-30 text-violet-950 text-xs font-semibold leading-none'>Mine</View>
      </View>
    </View>
  </View>
}
