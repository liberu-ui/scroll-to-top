import styled from 'vue-styled-components';

const styleProps = {
    isRTL:Boolean,
};

const SScrollToTop = styled('div', styleProps)`
    z-index: 3;
    position: fixed;
    bottom: 2em;
    // right: 1.5em;
    ${props => (props.isRTL ? 'left' : 'right')}: 1.5em;
`;

export default SScrollToTop;