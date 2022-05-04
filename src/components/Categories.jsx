import React from 'react'

function Categories({items, onClick}) {

	const state = React.useState(null);

	const activeItem = state[0];
	const setActiveItem = state[1];
	console.log(activeItem);
  return (
        <div className="categories">
			<ul>
				{
					items.map((name, index) => 
					<li 
						className={activeItem === index ? 'active' : ''} 
						onClick={() => setActiveItem(index)} 
						key={`${name}_${index}`}
					>
						{name}
					</li>)
				}
			</ul>
		</div>
  )
}

export default Categories;