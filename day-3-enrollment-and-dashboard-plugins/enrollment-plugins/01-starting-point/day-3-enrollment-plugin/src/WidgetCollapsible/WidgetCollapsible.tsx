// @flow
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import cx from 'classnames';
import { IconChevronUp24 } from '@dhis2/ui';
import { IconButton } from '../IconButton';
import styles from './WidgetCollapsible.module.css';

type Props = {
    header: ReactNode;
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
    color?: string;
    borderless?: boolean;
    children: ReactNode;
};

export const WidgetCollapsible = ({
    header,
    open,
    onOpen,
    onClose,
    color = 'white',
    borderless = false,
    children,
}: Props) => {
    const [childrenVisible, setChildrenVisibility] = useState(open); // controls whether children are rendered to the DOM
    const [animationsReady, setAnimationsReadyStatus] = useState(false);
    const [postEffectOpen, setPostEffectOpenStatus] = useState(open);
    const hideChildrenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const initialRenderRef = useRef(true);

    useEffect(() => {
        if (initialRenderRef.current) {
            initialRenderRef.current = false;
            return;
        }

        if (!animationsReady) {
            setAnimationsReadyStatus(true);
        }

        setPostEffectOpenStatus(open);

        if (hideChildrenTimeoutRef.current) {
            clearTimeout(hideChildrenTimeoutRef.current);
        }

        if (open) {
            setChildrenVisibility(true);
        } else {
            hideChildrenTimeoutRef.current = setTimeout(() => {
                setChildrenVisibility(false);
            }, 200);
        }
    }, [open, animationsReady]);

    return (
        <div style={{ backgroundColor: color }}>
            <div
                className={cx(styles.headerContainer, {
                    [styles.childrenVisible]: childrenVisible,
                    [styles.borderless]: borderless,
                })}
            >
                <div className={styles.header}>
                    {header}
                    <IconButton
                        dataTest="widget-open-close-toggle-button"
                        className={cx(styles.toggleButton, {
                            [styles.closeinit]: !animationsReady && !postEffectOpen,
                            [styles.open]: animationsReady && postEffectOpen,
                            [styles.close]: animationsReady && !postEffectOpen
                        })}
                        onClick={open ? onClose : onOpen}
                    >
                        <IconChevronUp24 />
                    </IconButton>
                </div>
            </div>
            {
                childrenVisible ? (
                    <div
                        data-test="widget-contents"
                        className={cx(styles.children, {
                            [styles.open]: animationsReady && open,
                            [styles.close]: animationsReady && !open,
                            [styles.borderless]: borderless,
                        })}
                    >
                        {children}
                    </div>
                ) : null
            }
        </div>
    );
};
