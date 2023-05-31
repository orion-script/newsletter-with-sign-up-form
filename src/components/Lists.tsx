import React from 'react'
import Mark from "../assets/icon-list.svg"

type Props = {
    text: string;
};

const Lists = ({ text }: Props) => {
  return (
    <figure className='mt-5 flex items-center'>
        <img src={Mark} alt="" />
        <figcaption className='pl-3 text-[#222741] text-sm '>{text}</figcaption>
    </figure>
  )
}

export default Lists