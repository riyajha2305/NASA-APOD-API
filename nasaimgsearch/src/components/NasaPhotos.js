import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';


const {REACT_APP_NASA_KEY} = require('../keys');


export default function NasaPhotos() {
	const [ photoData, setPhotoData ] = useState(null);

	useEffect(() => {
		fetchPhoto();

		async function fetchPhoto() {
			const res = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_KEY}`
			);
			const data = await res.json();
			setPhotoData(data);
			console.log(data);
		}
	}, []);

	if (!photoData) return <div />;

	return (
		<>
		<NavBar />

		<div className='nasa-photo'>
		
			{photoData.media_type === 'image' ? (
				<img src={photoData.url} alt={photoData.title} className='"photo'/>
			) : (
				<iframe
					title="space-video"
					src={photoData.url}
					frameBorder="0"
					allow="autoplay"
					allow="encrypted-media"
					className="photo"
				/>
			)}
			<div>
				<h1>{photoData.title}</h1>
				<p className='date'>{photoData.date}</p>
				<p className='explanation'>{photoData.explanation}</p>
			</div>
		</div>
		</>
	);
}
