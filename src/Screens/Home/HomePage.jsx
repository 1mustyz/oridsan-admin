import React from 'react'
import MainLayout from '../../Component/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <MainLayout presentLink={'dashboard'}>
        <div className='mt-7'>

            <div className='bg-[white] py-[20px] px-2'>
                Dashboard
            </div>

            <div className='mt-3 w-[95%] m-auto flex gap-4'>
                <Card 
                    title={'Total Members'} 
                    text={'3907'} 
                    bgColor='border-[#E8D268]' 
                    textColor='text-[#E8D268]'
                    image={'./images/dashboard-total-members.png'}
                />

                <Card 
                    title={'Approved Members'} 
                    text={'907'} 
                    bgColor='border-[#008000]' 
                    textColor='text-[#008000]'
                    image={'./images/dashboard-approved-members.png'}

                />

                <Card 
                    title={'Pending Members'} 
                    text={'204'} 
                    bgColor='border-[#FFA200]' 
                    textColor='text-[#FFA200]'
                    image={'./images/dashboard-pending-members.png'}

                />

                <Card 
                    title={'Active Certificate'} 
                    text={'204'} 
                    bgColor='border-[#2086C4]' 
                    textColor='text-[#2086C4]'
                    image={'./images/dashboard-active-members.png'}

                />

                <Card 
                    title={'Local Chapters'} 
                    text={'204'} 
                    bgColor='border-[#9B51E0]' 
                    textColor='text-[#9B51E0]'
                    image={'./images/dashboard-total-members.png'}

                />

            </div>
        </div>
    </MainLayout>
  )
}

export default HomePage

const Card = ({title, text, bgColor='', textColor='', image}) => {
    return (
        <div className={`w-[35%] h-[102px] border-l-4 flex gap-5 rounded-sm items-center bg-[white] ${bgColor}`}>
            <div className='mx-3 flex flex-col gap-2'>
                <p className='text-[13px] w-[100%]'>{title}</p>
                <p className={`text-[32px] ${textColor}`}>{text}</p>
            </div>
            <img className='h-[50px] w-[50px]' src={image} alt="" />
        </div>
    )
}