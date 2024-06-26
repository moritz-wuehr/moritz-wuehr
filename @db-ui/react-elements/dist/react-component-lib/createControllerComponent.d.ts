import React from 'react';
interface LoadingElement {
    present: () => any;
    dismiss: () => any;
}
interface ReactControllerProps<E> {
    isOpen: boolean;
    onDidDismiss: (event: CustomEvent<E>) => void;
}
export declare function createControllerComponent<OptionsType extends object, LoadingElementType extends LoadingElement, OverlayEventDetail>(displayName: string, controller: {
    create: (options: any) => Promise<LoadingElementType>;
}): {
    new (props: OptionsType & ReactControllerProps<OverlayEventDetail>): {
        controller?: LoadingElementType | undefined;
        componentDidMount(): Promise<void>;
        componentDidUpdate(prevProps: OptionsType & ReactControllerProps<OverlayEventDetail>): Promise<void>;
        present(prevProps?: (OptionsType & ReactControllerProps<OverlayEventDetail>) | undefined): Promise<void>;
        render(): null;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<OptionsType & ReactControllerProps<OverlayEventDetail>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<OptionsType & ReactControllerProps<OverlayEventDetail>>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<OptionsType & ReactControllerProps<OverlayEventDetail>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<OptionsType & ReactControllerProps<OverlayEventDetail>>, prevState: Readonly<{}>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<OptionsType & ReactControllerProps<OverlayEventDetail>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<OptionsType & ReactControllerProps<OverlayEventDetail>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<OptionsType & ReactControllerProps<OverlayEventDetail>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<OptionsType & ReactControllerProps<OverlayEventDetail>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any> | undefined;
};
export {};
