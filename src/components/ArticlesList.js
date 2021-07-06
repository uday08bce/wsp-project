import Article from '../components/Article'; 

function ArticlesList({articles}) {
	return (
		<div className="flex-container">
		  	{
		  		articles.map((card, i) => {
					return (
						<Article
						key={articles[i].id}
						id={articles[i].id} 
						title={articles[i].title}
						summary={articles[i].summary}
						/>
					);
				})
		  	}
		</div>
	);
}

export default ArticlesList;