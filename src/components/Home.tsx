import React from 'react'
import FormContainer from './FormContainer'
import Image from './Image'

const Home: React.FC = () => {
  return (
    <div className="bg-white md:w-3/5 md:h-[30rem] md:m-auto md:rounded-xl flex flex-col-reverse md:flex-row md:justify-between">
        <FormContainer />
        <Image />
    </div>
  )
}

export default Home