import styled from '@common/feedback/Tooltip/styled-components';

export const StyledTooltipWrapper = styled.div`

`;

export const StyledTooltipContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2000000;
    user-select: none;
    pointer-events: none;
`;

export const StyledTooltip = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};
    border: 1px solid ${ props => props.theme.colors.secundary };
    border-radius: 5px;
    max-width: 300px;
    padding: 10px;
    font-size: 14px;
    line-height: 150%;
    user-select: none;
    pointer-events none;
`;