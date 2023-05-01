import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    icon?: any; //ReactElement;
    variant?: 'default' | 'transparent' | 'submit' | 'proceed' | 'cancel';
    defaultStyle?: string;
    size?: 'default' | 'small';
}

export const Button = (props: ButtonProps) => {
    const { variant } = props;

    const style = "rounded-md font-bold flex justify-center items-center gap-3 p-2";

    switch (variant) {
        case 'transparent':
            return <TransparentButton defaultStyle={style} {...props} size={props?.size ?? 'default'} />;
        case 'submit':
            return <SubmitButton defaultStyle={style} {...props} size={props?.size ?? 'default'} />;
        case 'proceed':
            return <ProceedButton defaultStyle={style} {...props} size={props?.size ?? 'default'} />;
        case 'cancel':
            return <CancelButton defaultStyle={style} {...props} size={props?.size ?? 'default'} />;
        default:
            return <DefaultButton defaultStyle={style} {...props} size={props?.size ?? 'default'} />
    }
};

export const DefaultButton = (props: ButtonProps) => {
    let { children, icon, defaultStyle, size } = props;
    if (size === "default") defaultStyle += ' w-52';

    return (
        <button
            {...props}
            className={`${defaultStyle} border-2 boder-gray-500 text-white text-2xl`}>
            <span className="text-center my-auto">
                {children}
            </span>
            {icon && icon}
        </button>
    );
};

export const TransparentButton = (props: ButtonProps) => {
    let { children, icon, defaultStyle, size } = props;
    if (size === "default") defaultStyle += ' w-52';

    return (
        <button
            {...props}
            className={`${defaultStyle} text-white text-2xl`}>
            <span className="text-center my-auto">
                {children}
            </span>
            {icon && icon}
        </button>
    );
}
export const SubmitButton = (props: ButtonProps) => {
    let { children, icon, defaultStyle, size } = props;
    if (size === "default") defaultStyle += ' w-52';

    return (
        <button
            {...props}
            className={`${defaultStyle} bg-[#43F46A] text-black text-2xl`}>
            <span className="text-center my-auto">
                {children}
            </span>
            {icon && icon}
        </button>
    );
}
export const ProceedButton = (props: ButtonProps) => {
    let { children, icon, defaultStyle, size } = props;
    if (size === "default") defaultStyle += ' w-52';

    return (
        <button
            {...props}
            className={`${defaultStyle} border-2 border-[#43F46A] text-white text-2xl`}>
            <span className="text-center my-auto">
                {children}
            </span>
            {icon && icon}
        </button>
    );
}
export const CancelButton = (props: ButtonProps) => {
    let { children, icon, defaultStyle, size } = props;
    if (size === "default") defaultStyle += ' w-52';

    return (
        <button
            {...props}
            className={`${defaultStyle} bg-[#F45943] text-black text-2xl`}>
            <span className="text-center my-auto">
                {children}
            </span>
            {icon && icon}
        </button>
    );
}
