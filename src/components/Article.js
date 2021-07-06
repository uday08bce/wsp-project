import React from 'react';

function Article({image, title, summary}) {
	return (
	  <div className='tc br3 pa3 ma2 grow dib bw2 shadow-5 bg' 
	  	style={{backgroundImage:  `url("https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-blue-splash-water-flower-cosmetic-psd-layered-master-map-background-material-image_149650.jpg")`,
	  			backgroundSize: `cover`,
	  			backgroundRepeat: `no-repeat`,
	  			"height" : "auto", 
	  	 		"width" : "30%"}}> 	  	
	  	<div>
	  		<h2 className="f5">{title}</h2>	
	  		<p className="f6">{summary}</p>  		
	  	</div>
	  </div>
	);
}

export default Article;