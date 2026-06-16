import LeftSideber from '@/components/homepage/news/LeftSideber';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, 'paramsRes');

    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);


    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">

            <div className=" col-span-3">

                <LeftSideber categories={categories} activeId={id}></LeftSideber>
            </div>


            <div className="bg-green-50 col-span-6">
                <h2 className='font-bold text-3xl'>News by category</h2>
                <div className="space-y-4 mt-4">
                    {news.length > 0 ? news.map((n) => {
                        return <NewsCard key={n._id} news={n} />
                    }) : <h2 className='font-bold text-4xl text-center my-7'>NO NEWS FOUND!</h2>}
                </div>
            </div>


            <div className=" col-span-3">
                <RightSidebar></RightSidebar>
            </div>

        </div>
    );
};

export default NewsCategoryPage;