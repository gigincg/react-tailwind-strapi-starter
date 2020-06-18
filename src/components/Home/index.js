import React from 'react';
import {navigate} from 'hookrouter';
import Query from "../Query";
import ARTICLES_QUERY from "../../queries/article/articles";

export default function Home(){
    return (
    <main className="flex-1 flex justify-center items-center">
        <div className="mx-auto px-4 sm:px-8 py-2 text-center">

          <div className="text-center max-w-lg mx-auto mt-6">
            <div className="h-4 w-40 block mx-auto rounded-sm">Featured Articles</div>
            <div className="h-2 bg-gray-400 w-48 mt-2 block mx-auto rounded-sm"></div>
          </div>

          <div className="grid grid-cols-6 gap-4 items-start mt-8 mx-auto px-8">

          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => articles.map(article => <div className="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2">
              <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
                <div className="mx-auto h-40 bg-gray-200 rounded-md"><img className="h-40 w-full object-cover" src={"http://localhost:1337" + article.image.url} alt={article.title} /></div>
                <div className="h-10 w-40 mt-8 block mx-auto rounded-sm">{article.title}</div>
                <div className="flex justify-center mt-4">
                  <button className="rounded-sm px-4 py-2 bg-gray-200 m-1">Contact</button>
                  <button className="rounded-sm px-4 py-2 bg-green-300 m-1" onClick={() => navigate("/view/" + article.id)}>View</button>
                </div>
              </div>
            </div>)}
          </Query>
            
          </div>
        </div>        
     </main>)
}