import Image from 'next/image';

export default function Logo({ ...rest }) {
  return (
    <div className="flex justify-center items-center gap-4">
      <Image className="rounded-md" src="/0.png" alt="Logo" width={40} height={40} {...rest} />
      <p className='font-bold text-3xl'>ANFANG</p>
    </div>
  );
}
