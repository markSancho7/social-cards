import style from './card.module.css';

const Card = props => {
	return (
		<div className={`${style[props.color]} ${style.size}`}>
			<img src='' alt='' />
			<h4>{props.influencer}</h4>
			<h1>{props.numbers}</h1>
			<h2>{props.followers}</h2>
			<h3>{props.puntuation}</h3>
		</div>
	);
};

export default Card;
