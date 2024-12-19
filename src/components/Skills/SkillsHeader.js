import rings from "../../assets/images/rings_with_circle.svg";

const SkillsHeader = ({ children }) => {
    return (
        <div className="relative mb-[1.25rem] text-center">
            <div className="absolute top-[-2.875rem] md:top-[-1.875rem] left-1/2 z-[-1] w-[25.875rem] md:w-[17.25rem] h-[28.0125rem] md:h-[18.675rem] -translate-x-[57%]">
                <img src={rings} alt="Декоративные кольца" className="w-full h-full object-contain" />
            </div>
            <h2 className="font-mv-skifer text-[4.6875rem] md:text-[3.125rem] leading-[1.24] tracking-[0.01em]">
                {children}
            </h2>
        </div>
    );
};

export default SkillsHeader;