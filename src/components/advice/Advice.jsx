import { useEffect, useState } from 'react';
import {
	StyledBtnDice,
	StyledPhrase,
	StyledSeparator,
	StyledNumber,
	StyledWrapper
} from './styles';

const Advice = () => {
	const [advice, setAdvice] = useState([]);

	useEffect(() => {
		
		fetchAdvice(setAdvice);
	}, []);

    if (!advice.id) return <h1>Loading</h1>;
	return (
		<main>
			<StyledWrapper>
				<StyledNumber>ADVICE #{advice.id}</StyledNumber>
				<StyledPhrase>{advice.advice}</StyledPhrase>
				<StyledSeparator
					src='/assets/images/pattern-divider-mobile.svg'
					alt='patter divider'
				/>

				<StyledBtnDice>
                    <img src='/assets/images/icon-dice.svg'
					alt='icon-dice'
					onClick={() => fetchAdvice(setAdvice)}/>
                </StyledBtnDice>
			</StyledWrapper>
		</main>
	);
};

const fetchAdvice = async setAdvice => {
	const response = await fetch('https://api.adviceslip.com/advice');

	const data = await response.json();
	setAdvice(data.slip);
};

export default Advice;
