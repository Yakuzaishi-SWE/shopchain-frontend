import React, { useEffect, useState } from "react";

const InputView = ({
    value,
    setValue,
    id,
    placeholder,
    permissive,
    disabled,
    style,
    selectOnFocus
}: {
    value: string,
    setValue: (val: string) => void,
    id?: string,
    placeholder?: string,
    permissive?: RegExp,
    disabled?: boolean,
    style?: React.CSSProperties,
    selectOnFocus?: boolean,
}) => {
    const [internal, setInternal] = useState<string>(value);
    const [isError, setError] = useState<boolean>(permissive && !permissive.test(value) || false);

    useEffect(() => setInternal(value), [value]);

    useEffect(() => {
        let e = ((permissive !== undefined && !permissive.test(internal)) || false);
        if (!e) {
            setValue(internal);
        }
        setError(e);
    }, [internal]);

    return <input
        style={style}
        type="text"
        id={id}
        className={"clickable-input" + ((isError) ? " error" : '')}
        value={internal}
        onChange={(el) => setInternal(el.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={selectOnFocus?(el) => el.target.select():undefined}
    ></input>;
};


export default InputView;