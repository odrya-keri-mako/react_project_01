import React from "react";
import { Page1Controller } from "../controllers/Page1Controller";

const Page1: React.FC = () => {
	const controller = new Page1Controller();
	const currentPage: string = controller.getCurrentPage();
  return (
    <div className="container">
	    <div className="row mt-5">
		    <h1 className="text-center text-capitalize display-1">
          welcome!
		    </h1>
		    <h4 className="text-center text-capitalize display-4">
					{currentPage}
		    </h4>
	    </div>
    </div>
  );
};

export default Page1;