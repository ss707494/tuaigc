import {Image, Swiper, SwiperItem, View} from '@tarojs/components'
import backIcon from '../../public/back.svg'
import GoddessMaria from '../../public/GoddessMaria.png'
import avagIcon from '../../public/avag.png'
import tuoyuanIcon from '../../public/tuoyuan.svg'
import yuandianIcon from '../../public/yuandian.svg'
import yousanjiaoIcon from '../../public/yousanjiao.svg'
import Taro from '@tarojs/taro'

// 基本实现页面显示效果, 具体逻辑待实现
export const Detail = () => {

  const detailData = {
    img: GoddessMaria,
    tags: ['#Romantic', '#Fiction', '#Love story', '#Love story', '#Fiction'],
    types: ['Time travel', 'RPG', 'Science Fiction', 'Fantasy'],
  }

  return (
    <View className='relative pb-20'>
      <View className='absolute z-10 pt-3 w-full flex justify-between px-2'>
        <View className='bg-white w-9 h-9 rounded-[50%] shadow-[3px_4px_4px_rgba(0,71,137,0.25)] flex items-center justify-center'
          onClick={() => {
                Taro.navigateTo({
                  url: `/pages/index/index`,
                })
              }}
        >
          <Image className='w-4 h-4'
            src={backIcon}
          />
        </View>
        <View className='bg-white w-9 h-9 rounded-[50%] shadow-[3px_4px_4px_rgba(0,71,137,0.25)] flex items-center justify-center'>
          <View className='flex flex-col gap-1'>
            <View className='w-4 h-0 bg-[#15097A] border-[1px] border-[#15097A]'></View>
            <View className='w-4 h-0 bg-[#15097A] border-[1px] border-[#15097A]'></View>
            <View className='w-4 h-0 bg-[#15097A] border-[1px] border-[#15097A]'></View>
          </View>
        </View>
      </View>
      <View className='w-full h-80'>
        <Swiper className='h-full'>
          {Object.keys(Array(7).fill('')).map(v => <SwiperItem key={`img${v}`}>
            <Image src={detailData.img}
              className='w-full h-full rounded-sm'
            />
          </SwiperItem>)}
        </Swiper>
      </View>
      <View className='flex justify-between mx-2 ml-8 mt-2'>
        <View className='text-black text-xl font-bold leading-loose '>Goddess Maria</View>
        <View className='flex items-center mt-3'>
          <Image className='shrink-[0] w-6 h-6 rounded-[50%] object-cover'
            src={avagIcon}
          />
          <View className='text-pink-700 text-base font-bold leading-normal'>Fannings</View>
        </View>
      </View>
      <View className='mt-4 ml-8 text-black text-base font-normal leading-normal'>You find yourself in a vast celestial
        landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates
        the surroundings casting a warm light on the ethereal clouds that float in the sky. </View>
      <View className='ml-8 mt-5 flex gap-2 flex-wrap'>
        {detailData.tags.map(v => <View key={`tag${v}`}
          className='text-pink-700 text-xs font-normal leading-tight'
        >
          {v}
        </View>)}
        {detailData.tags.map(v => <View key={`tag${v}`}
          className='text-pink-700 text-xs font-normal leading-tight'
        >
          {v}
        </View>)}
      </View>
      <View className='flex gap-2 ml-8 mt-3'>
        {detailData.types.map(v => <View key={`type${v}`}
          className='py-1 px-2 bg-gray-200 rounded-xl text-violet-950 text-sm font-normal leading-none'
        >{v}</View>)}
      </View>
      <View className='flex items-center ml-8 mr-4 mt-3'>
        <View className='relative h-8 w-16'>
          {Object.keys(Array(3).fill('')).map(v => <Image key={`tuoyran${v}`}
            className='w-8 h-8 absolute'
            style={{left: `${Number(v) * 32}rpx`}}
            src={tuoyuanIcon}
          />)}
        </View>
        <View className='ml-2 flex-1 text-blue-900 text-sm font-normal leading-tight'>+28 contributors</View>
        <View className='flex items-center'>
          <Image className='w-[20rpx] h-[20rpx]'
            src={yuandianIcon}
          />
          <View className='text-violet-950 text-lg font-bold leading-loose'>2429</View>
        </View>
      </View>
      <View className='flex items-center justify-center mt-4'>
        <View className='px-12 py-1 rounded-3xl element'>
          <View className='text-violet-950 text-sm font-semibold leading-loose'> Enter Dream </View>
        </View>
      </View>
      <View className='flex justify-center mt-3'>
        <View className='text-blue-900 text-xs font-normal leading-tight'>View Dream Details</View>
        <Image src={yousanjiaoIcon}
          className='w-4 h-4'
        />
      </View>
    </View>
  )
}
