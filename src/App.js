import React from 'react';
import profile from './assets/img/0.jpg';
import resume from './assets/resume.pdf'
import './assets/css/App.css';

const Container = ({children}) => {
	return (
		<div className="flex flex-col items-center h-screen">
			<div className="my-auto">
				{children}
			</div>
		</div>
	);
}

const ProfilePic = () => {
	return (
		<div>
			<img 
			className="rounded-full" 
			height="75px" 
			width="75px" 
			src={profile} 
			alt="Me" />
		</div>
	);
}

const Name = () => {
	return (
		<div className="mt-5">
			<h1>Raghav Jhavar</h1>
		</div>
	);
}

const Languages = () => {
	return <p>Languages: Go, Java, Python, PHP, C#, JavaScript, HTML, CSS</p>
}

const ResumeButton = () => {
	return (
		<a href={resume} target="_blank" rel="noopener noreferrer">
		<button 
		className="transition duration-500 ease-in-out
		bg-black text-white font-bold transform hover:scale-110 py-2 px-3 rounded-full mt-2 focus:outline-none"
		>
			View Resume <i class="fas fa-arrow-right"></i>
		</button>
		</a>			
	);
}

const Description = ({children}) => {
	return (
		<div className="max-w-md mt-3 mb-3">
			<p>{children}</p>
		</div>
	);
}

const Socials = () => {
	return (
		<div>
			<a href="https://github.com/RaghavJH" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-github-square mr-2" />
			</a>
			<a href="https://www.linkedin.com/in/raghav-jhavar-399213149/" target="_blank" rel="noopener noreferrer">
				<i class="fab fa-linkedin mr-2" />
			</a>
			<a href="mailto:raghav@jhavar.net" target="_blank" rel="noopener noreferrer">
				<i className="fas fa-envelope-square mr-2" />
			</a>			
			<a href="https://twitter.com/raghav_jhavar" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-twitter-square mr-2" />
			</a>
			<a href="https://discord.gg/EbEp4Ak" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-discord" />
			</a>		
		</div>
	);
}

function App() {
  return (
	<Container>
		<ProfilePic />
		<Name />
		<Languages />
		<ResumeButton />
		<Description>
			3rd year Computer Science Major • UBC Okanagan, 2021<br />
		</Description>
		<Socials />
	</Container>
  );
}

export default App;
