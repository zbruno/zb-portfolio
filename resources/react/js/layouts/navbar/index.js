import React from 'react';

import { Navbar } from './style';

const Navbar = () => (
  <Navbar>
    <a href="/" className="no-underline font-bold text-90 mr-6">
      Expenses
    </a>
    <button type="button" className="rounded active:outline-none active:shadow-outline focus:outline-none focus:shadow-outline ml-auto h-9 flex items-center dropdown-right">
      <div className="dropdown-trigger h-dropdown-trigger flex items-center cursor-pointer select-none h-9 flex items-center">
        <img src="https://secure.gravatar.com/avatar/b6c6fd9273c45255cf9437d1e8e4dc19?size=512" className="rounded-full w-8 h-8 mr-3" />
        <span className="text-90">
          Zach
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" class="ml-2"><path fill="var(--90)" d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"></path></svg>
      </div>
    </button>
  </Navbar>
);

export default Navbar;
