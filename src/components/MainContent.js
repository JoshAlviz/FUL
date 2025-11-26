import img from '../assets/images/img.jpg';
import img1 from '../assets/images/img1.jpg';
import F from '../assets/images/F.png';
import U from '../assets/images/U.png';
import L from '../assets/images/L.png';
import './MainContent.css';

function MainContent() {
	return(
		<>
			<div className="pv5 ph3 ph5-ns bg-black-80 tc">
				<p className="f3 lh-copy measure center mb6 i white">"The world is slowly deteriorating, and one of the causes is our own small ways."</p>
				<div className="flex flex-wrap items-center">
					<div className="w-100 w-50-l order-1">
						<img src={img} alt="garbage pollution" className="w-100 not-selectable"/>
						<p className="f6 center white">Photo by <a href="https://unsplash.com/@collab_media?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="link underline dim white">Collab Media</a> on <a href="https://unsplash.com/photos/a-river-filled-with-lots-of-trash-next-to-a-hillside-g5yUCnPd7D0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="link underline dim white">Unsplash</a>
      				    </p>
					</div>
					<p className="f3 lh-copy measure-wide center w-100 w-50-l ph0 pl4-l pr0-l tl order-2 white">
						When we fail to throw trash in the proper place, the impact reaches far beyond a single piece of waste. Litter left on the ground eventually finds its way into soil, rivers, and oceans, harming plants, wildlife, and the natural balance that keeps our environment healthy. What seems like a small act of carelessness can pollute water sources, damage ecosystems, and contribute to the growing global waste problem. By simply choosing to dispose of our garbage responsibly, we help protect nature’s health — and in turn, the health of communities and future generations.
					</p>
					<p className="f3 lh-copy measure-wide center w-100 w-50-l ph0 pr4-l pl0-l tl order-4 order-3-l white">
						Transportation is one of the biggest contributors to air pollution, releasing harmful gases that warm the planet, damage the atmosphere, and harm the health of nature and people. Every car trip that burns fuel adds to climate change, affecting weather patterns, ecosystems, and the air we all breathe. But small choices can create big change. Choosing to walk, bike, or use other eco-friendly transportation options reduces the amount of pollution released into the air. Even simple shifts in our daily routines can help protect the environment, support cleaner air, and contribute to a healthier world for future generations.
					</p>
					<div className="w-100 w-50-l order-3 order-4-l">
						<img src={img1} alt="air pollution" className="w-100 not-selectable"/>
						<p className="f6 center white">Image credit: <a href="https://www.hindustantimes.com/fitness/air-pollution-more-harmful-to-children-in-cars-than-outside-warns-top-scientist/story-Ea0JHUPUsfgfuLlW4nwvAK.html" className="link underline dim white">Hindustan Times</a></p>
					</div>
				</div>
			</div>
			<div className="pv5 ph3 ph5-ns bg-white tc">
				<p className="f3 lh-copy measure center mb6 i dark-gray">"We can help make the world a better place, by remembering the last three letters of beauti<span className="logo-gradient">ful</span>"</p>
				<div className="flex flex-wrap items-start">
					<div className="w-100 w-third-l ph3">
						<img src={F} alt="F" className="h-50 w-auto not-selectable"/>
						<p className="f3 lh-copy tl dark-gray"><span className="f2">Find</span> the right place to throw your trash, and you help heal the world in small but powerful ways. Every piece disposed of properly keeps our communities cleaner and our planet healthier.</p>
					</div>
					<div className="w-100 w-third-l ph3">
						<img src={U} alt="F" className="h-50 w-auto not-selectable"/>
						<p className="f3 lh-copy tl dark-gray"><span className="f2">Use</span> eco-friendly ways to move—walk, bike, or choose cleaner rides. Small changes in how we travel reduce pollution and support a healthier body and planet.</p>
					</div>
					<div className="w-100 w-third-l ph3">
						<img src={L} alt="F" className="h-50 not-selectable"/>
						<p className="f3 lh-copy tl dark-gray"><span className="f2">Love</span> creation by caring for the earth we’ve been entrusted with. Protecting nature today ensures a cleaner, greener world for the generations after us.</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainContent;