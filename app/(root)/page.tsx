// import CategoryFilter from '@/components/shared/CategoryFilter';
// import Collection from '@/components/shared/Collection'
// import Search from '@/components/shared/Search';
// import { Button } from '@/components/ui/button'
// import { getAllEvents } from '@/lib/actions/event.actions';
// import { SearchParamProps } from '@/types';
// import Image from 'next/image'
// import Link from 'next/link'

// export default async function Home({ searchParams }: SearchParamProps) {
//   const page = Number(searchParams?.page) || 1;
//   const searchText = (searchParams?.query as string) || '';
//   const category = (searchParams?.category as string) || '';

//   const events = await getAllEvents({
//     query: searchText,
//     category,
//     page,
//     limit: 6
//   })

//   return (
//     <>
//       <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
//         <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
//           <div className="flex flex-col justify-center gap-8">
//             <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
//             <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
//             <Button size="lg" asChild className="button w-full sm:w-fit">
//               <Link href="#events">
//                 Explore Now
//               </Link>
//             </Button>
//           </div>

//           <Image 
//             src="/assets/images/hero.png"
//             alt="hero"
//             width={1000}
//             height={1000}
//             className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
//           />
//         </div>
//       </section> 

//       <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
//         <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>

//         <div className="flex w-full flex-col gap-5 md:flex-row">
//           <Search />
//           <CategoryFilter />
//         </div>

//         <Collection 
//           data={events?.data}
//           emptyTitle="No Events Found"
//           emptyStateSubtext="Come back later"
//           collectionType="All_Events"
//           limit={6}
//           page={page}
//           totalPages={events?.totalPages}
//         />
//       </section>
//     </>
//   )
// }
import CategoryFilter from '@/components/shared/CategoryFilter';
// import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button';
// import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home({ searchParams }: SearchParamProps) {
  const params = await searchParams; // 🔥 Await it first
  // lets see what happens next

  const page = Number(params?.page) || 1;
  const searchText = (params?.query as string) || '';
  const category = (params?.category as string) || '';

  // const events = await getAllEvents({
  //   query: searchText,
  //   category,
  //   page,
  //   limit: 6,
  // });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">
          Trusted by <br /> Thousands of Events
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        {/* <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        /> */}
      </section>
    </>
  );
}
  
// import CategoryFilter from '@/components/shared/CategoryFilter';
// import Collection from '@/components/shared/Collection';
// import Search from '@/components/shared/Search';
// import { Button } from '@/components/ui/button';
// import { getAllEvents } from '@/lib/actions/event.actions';
// import Image from 'next/image';
// import Link from 'next/link';

// // Correctly type `searchParams` using Next.js 14 standard
// type Props = {
//   searchParams?: {
//     query?: string; 
//     category?: string;
//     page?: string;
//   };
// };

// export default async function Home({ searchParams }: Props) {
//   // Await the searchParams to ensure they are available
//   const params = await searchParams;

//   // Now you can safely access the properties
//   const page = Number(params?.page) || 1;
//   const searchText = params?.query || '';
//   const category = params?.category || '';

//   const events = await getAllEvents({
//     query: searchText,
//     category,
//     page,
//     limit: 6,
//   });

//   return (
//     <div>
//       <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
//         <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
//           <div className="flex flex-col justify-center gap-8">
//             <h1 className="h1-bold">
//               Host, Connect, Celebrate: Your Events, Our Platform!
//             </h1>
//             <p className="p-regular-20 md:p-regular-24">
//               Book and learn helpful tips from 3,168+ mentors in world-class
//               companies with our global community.
//             </p>
//             <Button size="lg" asChild className="button w-full sm:w-fit">
//               <Link href="#events">Explore Now</Link>
//             </Button>
//           </div>

//           <Image
//             src="/assets/images/hero.png"
//             alt="hero"
//             width={1000}
//             height={1000}
//             className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
//           />
//         </div>
//       </section>

//       <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
//         <h2 className="h2-bold">
//           Trusted by <br /> Thousands of Events
//         </h2>

//         <div className="flex w-full flex-col gap-5 md:flex-row">
//           <Search />
//           <CategoryFilter />
//         </div>

//         <Collection
//           data={events?.data}
//           emptyTitle="No Events Found"
//           emptyStateSubtext="Come back later"
//           collectionType="All_Events"
//           limit={6}
//           page={page}
//           totalPages={events?.totalPages}
//         />
//       </section>
//     </div>
//   );
// }