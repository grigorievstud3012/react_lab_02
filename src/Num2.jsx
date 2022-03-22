import react, { useState } from "react";

function Job() {
    
    function JobChoice() {
        let inputlist = [];
        let proflist = ['Программист', 'Космонавт', 'Пожарный', 'Инженер', 'Офицер'];

        for (let i = 0; i < 5; i++) {
            inputlist[i] = <div key={i}>
                    <input type='radio' name='profession' onClick={changer}/>
                    <span>{proflist[i]}</span>
                </div>
        }

        return(
            <div>
                {inputlist}
            </div>
        )
    }

    const [choice, SetChoice] = useState(4);

    let q = 0;

    let jsinputlist = document.getElementsByName("profession");

    function changer() {
        for (let i = 0;i < 5;i++) {
            if (jsinputlist[i].checked) {
                jsinputlist[q].className = ''
                q = i
                jsinputlist[q].click();
                jsinputlist[q].className = 'choseninput'
                SetChoice(i)
                console.log(choice);
            }
        }
    }

    function JobMenu() {

        let hreflist = ['https://tproger.ru/articles/kak-stat-programmistom/',
        'https://trends.rbc.ru/trends/futurology/60b0e8a59a79474a15ed9ffa',
        'https://www.tt-snab.ru/stati/kak-stat-pozharnym-v-rossii/#:~:text=%D0%A7%D1%82%D0%BE%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B6%D0%B0%D1%80%D0%BD%D1%8B%D0%BC%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5,%D0%B8%D0%BB%D0%B8%20%D0%B8%D0%BD%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B6%D0%B0%D1%80%D0%BD%D0%BE%D0%B9%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8.',
        'https://adukar.com/by/news/abiturientu/professiya-inzhener#:~:text=%D0%A7%D1%82%D0%BE%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D1%82%D1%8C%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%D1%8E%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9%20%D0%B8%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B8%D0%B3%D0%B5%D0%BD%D1%86%D0%B8%D0%B8,%D0%B2%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC%20%D0%B8%20%D0%B8%D0%BC%D0%B5%D1%8E%D1%82%20%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D0%B8.',
        'https://msiu.by/news/kak-stat-ofitserom-obrazovanie-dlya-voennosluzhashchikh/']

        return(
            <ul>
                <li><a href={hreflist[choice]}>О профессии</a></li>
                <li><a href={hreflist[choice]}>Карьерный рост</a></li>
                <li><a href={hreflist[choice]}>Что нужно делать</a></li>
                <li><a href={hreflist[choice]}>Как стать</a></li>
                <li><a href={hreflist[choice]}>Кому подходит</a></li>
                <li><a href={hreflist[choice]}>Востребованность</a></li>
                <li><a href={hreflist[choice]}>Перспективы</a></li>
            </ul>
        )
    }

    return(
        <div>
            <JobMenu></JobMenu>
            <JobChoice></JobChoice>
        </div>
    )
}

export default Job