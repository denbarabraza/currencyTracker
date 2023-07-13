import styled from 'styled-components';

export const ToggleContainer = styled.div<{ open: boolean }>`
  margin: ${props => props.theme.indentation.i20} ${props => props.theme.indentation.i0};
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const ToggleInput = styled.input`
  opacity: ${props => props.theme.valueInPx.px0};
  width: ${props => props.theme.valueInPx.px0};
  height: ${props => props.theme.valueInPx.px0};
`;

export const ToggleSlider = styled.span`
  width: ${props => props.theme.valueInPx.px50};
  height: ${props => props.theme.valueInPx.px25};
  border-radius: ${props => props.theme.valueInPx.px20};
  background-color: ${props => props.theme.colors.toggleBackground};
  border: 1px solid ${props => props.theme.colors.toggleBorder};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: ${props => props.theme.valueInPx.px20};
    height: ${props => props.theme.valueInPx.px20};
    border-radius: ${props => props.theme.valueInPercent.pr50};
    background-color: ${props => props.theme.colors.toggleCircle};
    top: ${props => props.theme.valueInPx.px2};
    left: ${props => props.theme.valueInPx.px2};
    transition: transform 0.2s ease-in-out;
  }

  ${ToggleInput}:checked + & {
    background-color: ${props => props.theme.colors.toggleBackgroundChecked};
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(25px);
  }
`;
