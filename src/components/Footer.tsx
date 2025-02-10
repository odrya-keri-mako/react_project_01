import React from "react";

const Footer: React.FC = () => {
	const currentYear: number = new Date().getFullYear();
  return (
    <footer>
      <div className="container-fluid bg-dark text-light"
		 			 data-bs-theme="dark">
				<div className="row px-3 pt-2">
					<p className="fw-lighter fs-sm mb-2 text-center"> 
						&copy; Copyright&nbsp;&nbsp;2021-{currentYear} Keri Informatics, Makó
					</p>
				</div>
			</div>
    </footer>
  );
};

export default Footer;