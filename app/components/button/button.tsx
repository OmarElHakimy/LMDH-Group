

const Button = ({children, classes, mainClasses, onClickHandler}: {children: React.ReactNode, classes: String, mainClasses: String, onClickHandler: any}) => {
    return (
        <div className={`relative border-2 lines w-[261px] h-[48px] ${mainClasses}`}>
            <button className={`absolute top-[-5px] left-[-5px] w-[100%] h-[100%] font-Transat ${classes}`} onClick={onClickHandler}>{children}</button>
        </div>
    );
}
export default Button;

