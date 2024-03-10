import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledWrapper = styled.div`
	width: 90%;
	padding-inline: 2rem;
`;

const StyledTitle = styled.p`
	font-size: 0.6875rem;
	color: ${COLORS.Neon_Green};
`;

const StyledPhrase = styled.p`
	font-size: 1.5rem;
	color: ${COLORS.Light_Cyan};
`;

export { StyledWrapper, StyledTitle, StyledPhrase };
