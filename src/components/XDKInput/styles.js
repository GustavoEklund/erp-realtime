import styled from 'styled-components'

export const Input = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	> label {
		margin-left: 18px;
	}

	> input {
		padding: 10px 20px;
		font-size: 16px;
		border-radius: 50px;
		border: none;
		outline: none;
		box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.2);
	}

	> small {
		margin-left: 18px;
		margin-bottom: 15px;
	}
`
