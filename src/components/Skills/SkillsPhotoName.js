import foto from "../../assets/images/foto.png";

const SkillsPhotoName = () => {
    return (
        <div className="flex justify-center items-center gap-[1.875rem] md:gap-[1.25rem] mb-[1.25rem]">
            <div className="rounded-full w-[16.6875rem] md:w-[11.125rem] h-[17.25rem] md:h-[11.5rem] overflow-hidden">
                <img src={foto} alt="Полина Мигранова" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-mv-skifer text-[4.6875rem] md:text-[3.125rem] leading-[1.05] tracking-[0.01em]">
                Полина<br />Мигранова
            </h3>
        </div>
    )
}

export default SkillsPhotoName;