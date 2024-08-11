import styled from 'styled-components';

export const TabList = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Tab = styled.button`
  padding: 10px;
  background: ${({ isSelected }) => (isSelected ? '#fff' : '#ccc')};
  border: none;
  border-bottom: ${({ isSelected }) => (isSelected ? '2px solid #000' : 'none')};
  outline: none;

  &:hover {
    background: #ddd;
  }
`;

export const TabPanel = styled.div`
  padding: 20px;
  background: #fff;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
`;
