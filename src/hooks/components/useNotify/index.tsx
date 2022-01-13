import { CheckIcon, InfoIcon } from '@chakra-ui/icons';
import { useBreakpointValue, useToast, UseToastOptions } from '@chakra-ui/react';
import { Notify } from './components/Notify';
import { notifyTypes, notifyTypesEnum } from './models';

export const useNotify = (notifyType: notifyTypes) => {
    const isShowMobileVersion = useBreakpointValue({ base: true, md: false });
    const toast = useToast();

    const defaultOptions: UseToastOptions = {
        duration: 200000,
        containerStyle: {
            zIndex: 1400
        },
        position: isShowMobileVersion
            ? 'bottom-left'
            : 'bottom-right',
    }

    const notify = {
        [notifyTypesEnum.create]: <Notify Icon={CheckIcon} title='Note created!' color='green.600' />,
        [notifyTypesEnum.delete]: <Notify Icon={InfoIcon} title='Note deleted!' color='orange.600' />,
        [notifyTypesEnum.edit]: <Notify Icon={InfoIcon} title='Note changed!' color='blue.600' />,
    }

    return () => {
        toast({
            ...defaultOptions,
            render: () => (notify)[notifyType]
        })
    }
}