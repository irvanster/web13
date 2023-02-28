import {Text as TextRN} from 'react-native'
export const Text = ({color='#333', size=14, fontWeight='light', align, style, children}) => {
    return(
        <TextRN
            style={{
                color,
                fontSize: size,
                fontWeight,
                textAlign: align,
                ...style
            }}
        >{children}</TextRN>
    )
}