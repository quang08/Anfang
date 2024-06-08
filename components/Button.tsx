import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ButtonProps = PropsWithChildren<{ transparent?: boolean }>;

const Button = styled.a<ButtonProps>`
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  //background: ${(p) => (p.transparent ? 'transparent' : '#f45832')};
  padding: 1.75rem 2.25rem;
  font-size: 1.2rem;
  color: rgb(var(--text));
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  border: ${(p) => (p.transparent ? 'none' : '2px solid #f45832')};
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;

  span {
    margin-left: 2rem;
  }

  &:hover {
    background: ${(p) => (p.transparent ? '#f45832' : 'none')}; /* Change background color on hover if transparent */
    color: ${(p) => (p.transparent ? 'rgb(var(--textSecondary))' : '#f45832')}; /* Change text color on hover if not transparent */
    transform: scale(1.025);
  }
`;

export default Button;
