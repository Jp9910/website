import type { ReactNode } from "react";

interface ContainerCaixaProps {
    children?: ReactNode;
}

function ContainerCaixa({ children }: ContainerCaixaProps) {
    return (
        <div className="
            container 
            bg-white 
            text-gray-900 
            dark:bg-gray-800 
            dark:text-white 
            border-solid 
            border-blue-300
            w-auto
            min-w-5/20
            max-w-19/20
            mt-5
            mx-auto
            p-6
            box-border
            shadow-2xl
            rounded-2xl
        ">
            {children}
        </div>
    )
}

export default ContainerCaixa