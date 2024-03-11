import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledWrapper = styled.div`
	padding-inline: 2rem;
	padding-top: 1rem;
	/* padding-bottom: 2rem; */
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border-radius: 10px;
	background-color: ${COLORS.Dark_Grayish_Blue};
	position: relative;
`;

const StyledNumber = styled.p`
	font-size: 0.6875rem;
	color: ${COLORS.Neon_Green};
`;

const StyledPhrase = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
	color: ${COLORS.Light_Cyan};
`;

const StyledSeparator = styled.img`
	margin-bottom: 3rem;
`;

const StyledBtnDice = styled.button`
	width: 4rem;
	height: 4rem;
	position: absolute;
	bottom: -35px;
	display: flex;
	align-items: center;
	justify-content: center;
	bottom: -25%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	background-color: ${COLORS.Light_Cyan};
	color: ${COLORS.Grayish_Blue};
	background: radial-gradient(circle ${COLORS.Light_Cyan} 20%);
	border: none;

	&:hover {
		cursor: pointer;
		background-color: ${COLORS.Neon_Green};
		box-shadow: 0 0 10px rgba(83, 255, 170, 1);
	}

	@media screen and (min-width: 500px) {
		right: 48%;
	}
`;

export {
	StyledWrapper,
	StyledNumber,
	StyledPhrase,
	StyledSeparator,
	StyledBtnDice
};
