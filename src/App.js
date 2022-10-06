import React, { useRef, useState } from 'react'


const App = () => {
    const [input, setInput] = useState({});
    const [boardList, setBoardList] = useState([]);
    const id = useRef(1)
    const todoHandler = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            id: id.current
        })
    }

    const commitHandler = () => {
        setBoardList([...boardList,
            input
        ])
        id.current++
        setInput({
            title: "",
            content: "",
        })
    }

    return (

        <div className='Wrap'>
            <header>
                <div className="box">
                    <h1>MYDATA</h1>

                </div>
            </header>
            <div className="inner">
                <section className='LifeQuotes'>
                    {/* <slider>
                        <div>“Talk is cheap. Show me the code.”</div>
                        <div>“프로그래밍은 자기 얼굴을 차는 것과 같아서, 조만간 코피가 날 것이다.”</div>
                    </slider> */}
                </section>

                <section className='Enter'>
                    <input name='title' onChange={todoHandler} value={input.title || ""} />
                    {/* <input name='content' onChange={todoHandler} value={input.content || ""} /> */}
                    <button onClick={commitHandler}>Commit</button>
                </section>
                <section className="TodoList">
                    <div className="box">
                        {console.log(input)}
                        <ul>
                            {
                                boardList.map((it, idx) => {
                                    return (
                                        <li key={it.id}>{it.title}</li>
                                    )
                                }).reverse()
                            }
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;


// https://velog.io/@e_juhee/Github-%EC%9E%94%EB%94%94-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0