import { TextareaControl } from 'formik-chakra-ui'
import React from 'react'
import { useAutoResize } from '../../../../hooks/components/useAutoResize';

export const ContentTextarea = () => {
    const autoResize = useAutoResize();

    return (
        <TextareaControl
            name='content'
            aria-label='Content title'
            textareaProps={{
                minHeight: '150px',
                resize: 'none',
                fontSize: '18px',
                overflow: 'hidden',
                variant: 'outlined',
                onInput: autoResize,
                placeholder: 'Do something ...'
            }} />
    )
}
