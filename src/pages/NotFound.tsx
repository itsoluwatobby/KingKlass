import { useEffect } from 'react';
import { TbError404 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { MetaTags } from '../layout/MetaTagsOGgraph';

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    const returnTimer = setTimeout(() => {
      navigate(-1)
    }, 5000)
    return () => clearTimeout(returnTimer)
  }, [navigate])

  return (
    <div className='w-full h-screen flex flex-col items-center translate-y-28 font-mono gap-8 text-4xl'>
      <MetaTags 
        title='NOT_FOUND: 404 Page'
        description=''
        url=''
        image=''
      />

      Page Not Found
      <TbError404 className='text-gray-400 text-6xl' />
      <span className='text-lg text-gray-600 animate-pulse'>You will be automatically redirected...</span>
    </div>
  )
}