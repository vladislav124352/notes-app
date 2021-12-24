import { TextareaControl } from 'formik-chakra-ui'
import React from 'react'
import { useAutoResize } from '../../../../hooks/components/useAutoResize';

export const TitleTextarea = () => {
    const autoResize = useAutoResize();

    return (
        <TextareaControl
            isRequired
            name='title'
            aria-label='Note title'
            textareaProps={{
                minHeight: '50px',
                resize: 'none',
                fontSize: '24px',
                overflow: 'hidden',
                variant: 'outlined',
                onInput: autoResize,
                placeholder: 'Title ...'
            }} />
    )
}
