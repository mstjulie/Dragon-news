import Image from 'next/image';
import demo from '@/assets/demo-card-thumbnail.png'
import bg from '@/assets/bg.png'
import Link from 'next/link';
import React from 'react';

const LeftSideber = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="font-bold text-3xl"> All categories</h2>
            <ul className="flex flex-col gap-3 mt-6">
                {categories.news_category.map(category => {
                    return (
                        <li key={category.category_id}
                            className={`${activeId === category.category_id && "bg-slate-200 text-black"}
                      rounded-md font-bold text-md text-center`}>

                            <Link href={`/category/${category.category_id}`}
                                className='block p-2'>
                                {""} {category.category_name}
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
    <div className='flex flex-col gap-3'>
        <Image src={demo} alt='demo'/>
        <Image src={bg} alt='bg' width={400}/>
    </div>
                  
        </div>
    );
};

export default LeftSideber;