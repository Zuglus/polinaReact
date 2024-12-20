import niti1 from "./../assets/images/niti/niti1.png"
import niti2 from "./../assets/images/niti/niti2.png"
import niti3 from "./../assets/images/niti/niti3.png"
import niti4 from "./../assets/images/niti/niti4.png"
import niti5 from "./../assets/images/niti/niti5.png"

export const projects = [
    {
        id: 'project1',
        title: 'НИТИ',
        description: 'Кластер проектов по управлению современным образованием',
        audience: 'менеджеры образования, управленцы, преимущественно женщины старше 40',
        slides: [
            {
                image: niti1,
                task: 'ребрендинг образовательного продукта...',
                solution: 'палитра создает ощущение серьезного подхода...',
            },
            {
                image: niti2,
                task: 'Находится в разработке',
                solution: 'Находится в разработке',
            },
            {
                image: niti3,
                task: 'Находится в разработке',
                solution: 'Находится в разработке',
            },
            {
                image: niti4,
                task: 'Находится в разработке',
                solution: 'Находится в разработке',
            },
            {
                image: niti5,
                task: 'Находится в разработке',
                solution: 'Находится в разработке',
            },
        ]
    },
    {
        id: 'project2',
        title: 'КОДИИМ',
        description: 'Проект по искусственному интеллекту...',
        audience: 'учащиеся 6-11 классов, интересующиеся ИИ',
        slides: [
            {
                image: '/images/code/code1.png',
                task: 'Ивент...',
                solution: 'современная подача, палитра отражает технологичность...',
            },
            {
                image: '/images/code/code2.png',
                task: 'создать уникальный мерч',
                solution: 'Смыслы мероприятия представлены как код...',
            },
            {
                image: '/images/code/code3.png',
                task: 'редизайн smm-материалов',
                solution: 'разнообразие цветов, использование нейросетей',
            },
            {
                image: '/images/code/code4.png',
                task: 'Находится в разработке',
                solution: 'Находится в разработке',
            }
        ]
    },
    {
        id: 'project3',
        title: 'В центре науки',
        description: 'Проект направлен на популяризацию науки...',
        audience: 'ученики, учителя, учёные',
        slides: [
            {
                image: '/images/science/science1.png',
                task: 'разработать для квиза учёных карточку...',
                solution: 'бэйджи с разными цветами, динамика...',
            },
            {
                image: '/images/science/science2.png',
                task: 'разработать афишу для школ...',
                solution: 'маскот, стикеры по предметным областям...',
            },
            {
                image: '/images/science/science3.png',
                task: 'благодарственные письма в официальном стиле',
                solution: 'минимализм, предметные области...',
            }
        ]
    },
    {
        id: 'project4',
        title: 'День физики',
        description: 'Мероприятие состоялось 17 сентября...',
        audience: 'старшеклассники, интересующиеся наукой',
        slides: [
            {
                image: '/images/fizics/fizics1.png',
                task: 'разработать макет открыток...',
                solution: 'подобрать цитаты, тексты об открытиях...',
            },
            {
                image: '/images/fizics/fizics2.png',
                task: 'карточки для игры «Технообмен»...',
                solution: 'в разработке',
            },
            {
                image: '/images/fizics/fizics3.png',
                task: 'афиша для научных курсов...',
                solution: 'отражает дизайн веб-страницы ивента...',
            }
        ]
    }
];
