import { PropTypes } from 'prop-types';
import { Title, BookSection } from './Section.styled';

export default function Section({ title = '', children }) {
    return (
        <BookSection>
            <Title>{title}</Title>
            {children}
        </BookSection>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}