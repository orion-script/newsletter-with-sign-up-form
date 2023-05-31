import React from 'react'
import Lists from './Lists';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string,
};

const Form: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:pl-10 w-full pt-12">
            <h1 className='text-[#222741] font-bold text-4xl md:text-5xl'>Stay updated!</h1>

            <p className='text-[#222741] text-sm mt-5 text-bold'>Join 60,000+ product managers receiving monthly updates on:</p>

            <Lists text="Product discovery and building what matters" />

            <Lists text="Measuring to ensure updates are a success" />

            <Lists text="And much more!" />

          <label htmlFor="" className='text-[#222741] text-sm font-bold mt-8 mb-2'>Email address</label>
          <input type="email" {...register("email", { required: true })} className="mb-1 h-10 rounded-lg border-2 pl-3 outline-none" placeholder='email@company.com' />
          {errors.email && <span className="text-orange-800 text-xs">This field is required</span>}

          <button type="submit" className="bg-[#232742] text-white h-10 rounded-lg mt-3 mb-8 md:mb-0">Subscribe to monthly newsletter</button>
        </form>
      );
}

export default Form;