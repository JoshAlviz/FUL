import React from 'react';
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  XIcon,
  WhatsappIcon,
  LinkedinIcon,
} from 'react-share';


function Footer() {
	const shareUrl = "https://joshalviz.github.io/FUL/";
	
	return(
		<div className="pv3 ph2 ph5-ns bg-washed-red tc">
        	<p className="f2 lh-copy measure center i dark-gray">"Be use<span className="logo-gradient">ful</span> for a beauti<span className="logo-gradient">ful</span>, more wonder<span className="logo-gradient">ful</span> world."</p>
        	<div className="flex flex-wrap justify-center pt2">
        		<div className="ph2">
					<FacebookShareButton url={shareUrl} className="dim">
						<FacebookIcon size={32} round />
					</FacebookShareButton>
		        </div>
		        <div className="ph2">
		        	<FacebookMessengerShareButton url={shareUrl} appId="1197560095635892" className="dim">
		        		<FacebookMessengerIcon size={32} round />
		        	</FacebookMessengerShareButton>
		        </div>
		        <div className="ph2">
		        	<TwitterShareButton url={shareUrl} className="dim">
		            	<XIcon size={32} round />
		          	</TwitterShareButton>
		        </div>
		        <div className="ph2">
		        	<WhatsappShareButton url={shareUrl} className="dim">
		        		<WhatsappIcon size={32} round />
		        	</WhatsappShareButton>
		        </div>
		        <div className="ph2">
		        	<LinkedinShareButton url={shareUrl} className="dim">
			        	<LinkedinIcon size={32} round />
			        </LinkedinShareButton>
		        </div>
	        </div>
	        <p className="f6 dark-gray">Help share awareness!</p>
      	</div>
	);
}

export default Footer;