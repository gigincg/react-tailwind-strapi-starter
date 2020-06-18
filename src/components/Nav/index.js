import React from "react";
import Query from "../Query";
import { A } from "hookrouter";

import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <header className="shadow-sm">
              <div className="bg-blue-300 py-1"></div>
                <nav className="flex items-center justify-between flex-wrap bg-white py-4 mx-auto px-8 max-w-6xl">
                  <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <A className="text-gray-600 no-underline hover:text-gray-800 hover:no-underline pl-2" href="/">
                      React Tailwind STRAPI BLOG
                    </A>
                  </div>

                  <div className="block lg:hidden">
                    <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-500 hover:border-gray-500 focus:outline-none">
                      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                  </div>

                  <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                      {categories.map((category, i) => {
                        return (
                          <li key={category.id} className="mr-3">
                            <A
                              href={`/category/${category.id}`}
                              className="inline-block py-2 px-4 active:text-gray-900 no-underline" 
                            >
                              <div className="mt-2 block mx-auto rounded-sm uppercase">{category.name}</div>
                            </A>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </nav>
            </header>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;