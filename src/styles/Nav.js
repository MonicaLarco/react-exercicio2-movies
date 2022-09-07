import styled from "styled-components";

export const Nav = styled.nav`
	ul {
		list-style: none;
		padding-left: 0;

		li {
			display: inline-block;

			a {
				color: blue;
				font-weight: bold;
				text-decoration: none;
				border: 2px solid black;
				border-radius: 5px;
				padding-block: 5px;
    			padding: 5px;
			}

			a:hover {
				background-color: white;
				color: pink;
			}
		}
	}
`;
