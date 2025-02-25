import Image from 'next/image';
import ImageEyes from '@/assets/AlbumArtwork/414676506_1127682261725159_7084449980680345099_n.jpeg';

export default function AlbumArtoworkPage() {
  return (
    <div className="flex justify-center flex-wrap gap-4 bg-transparent mx-auto text-[#e0e0e0] px-2 lg:px-20 py-4">
      <Image
        className="cursor-pointer rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
        src={ImageEyes}
        alt={''}
        width={400}
        height={350}
      />

      <Image
        className="cursor-pointer rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
        src={ImageEyes}
        alt={''}
        width={400}
        height={350}
      />

      <Image
        className="cursor-pointer rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
        src={ImageEyes}
        alt={''}
        width={400}
        height={350}
      />
      <Image
        className="cursor-pointer rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
        src={ImageEyes}
        alt={''}
        width={400}
        height={350}
      />

      <Image
        className="cursor-pointer rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
        src={ImageEyes}
        alt={''}
        width={400}
        height={350}
      />

      <Image
        className="cursor-pointer rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
        src={ImageEyes}
        alt={''}
        width={400}
        height={350}
      />
    </div>
  );
}
