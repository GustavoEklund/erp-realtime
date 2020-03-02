import styled from 'styled-components'

export const Table = styled.table`
	> thead {
		> tr {
			> th {
				border: 1px solid #333333;
				padding: 5px;
				line-height: 100%;
				border-spacing: 0;
			}
		}
	}

	> tbody {
		> tr {
			> td {
				border: 1px solid #333333;
				padding: 5px;
				border-spacing: 0;
			}
		}
	}
`