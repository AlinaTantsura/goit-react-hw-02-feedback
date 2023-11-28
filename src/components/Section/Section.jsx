import {SectionStyled} from "./SectionStyled"

export const Section = ({ title, children }) => {
    return (
        <SectionStyled>
        <h2>{title}</h2>
            {children} 
        </SectionStyled>
        )
}
