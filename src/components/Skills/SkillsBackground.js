import portfolio from "../../assets/images/portfolio.svg";

const SkillsBackground = () => {
    return (
        <div className="absolute left-1/2 top-[40.5rem] md:top-[27rem] z-[-1] w-[48.78125rem] -translate-x-1/3">
            <img src={portfolio} alt="Фон" className="w-full h-full object-contain" />
        </div>
    );
};

export default SkillsBackground;