import React from 'react'
import FormContainer from './FormContainer'
import Image from './Image'

const Home: React.FC = () => {
  return (
    <div className="bg-white w-3/5 h-[30rem] m-auto rounded-xl flex justify-between">
        <FormContainer />
        <Image />
      </div>
  )
}

export default Home