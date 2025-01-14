import React from 'react';

class Features extends React.Component {
  render() {
  		// Getting Dynamic Features Data
  		let linksMarkup = this.props.features.map((link, i) => {
  			return (
	  			<li key={i}>
                  <div className="features-img" key={i}>
                    <img src={link.imgUrl} key={i} className="img-fluid" alt={link.lable} />
                    <h3 className="features-title">{link.lable}</h3>
                  </div>
                </li>
            );
		});

    	return (
			<section className="features-bg mb-0">
				<div className="container m-width">
					<div className="row">
						<div className="col-md-12">
							<div className="col-md-12 text-center">
								<div className="section-title mb-2">
									<h2>Features of chatloop</h2>
									<img src="assets/images/title-line.png" alt="title-line" className="img-fluid"/>
								</div>
							</div>
							<div className="border-shape"></div>
							<div className="mt-50">
							  <ul className="features m-0 p-0 fadeIn-features">
								{linksMarkup}
							  </ul>
							</div>
						</div>
					</div>
				</div>
			</section>
      	);
  	}
 }

 export default Features;
