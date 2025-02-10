import React from "react";

const Home: React.FC = () => {
	const currentPage: string = 'home';
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

export default Home;