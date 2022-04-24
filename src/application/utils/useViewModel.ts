import { useRef } from "react";


export function useViewModel<C extends { new(...args: any[]): any }>(ViewModelType: C, ...args: ConstructorParameters<C>): InstanceType<C> {
    const viewModelRef = useRef<InstanceType<C>>(new ViewModelType(...args));

    return viewModelRef.current;
}