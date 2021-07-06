import './SearchBox.css';


function SearchBox({searchfield, searchChange}) {
	return (
		<div className='toolbar row no-wrap item-center constrain logo-container pa-none'>
			<img 
				className='absolute-full'
				alt='wsp' 
				src={`https://watersciencepolicy.com/img/logo_pride.0b163d70.svg`}
				width='300px' height='auto' />
			<input 
				className='pa3 ba logo-container-searchbox'
				type='search' 
				placeholder='search articles'
				onChange={searchChange} 
			/>
		</div>
	);
}

export default SearchBox;