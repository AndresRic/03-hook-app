export const Quote = ({ phrase, who }) => {
	return (
		<blockquote className="blockquote text-end" style={{ display: "flex" }}>
			<p className="mb-1">{phrase}</p>
			<footer className="blockquote-footer">{who}</footer>
		</blockquote>
	);
};

// export default Quote;
