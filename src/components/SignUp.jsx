import { useState } from "react"
import { useCheck, useNull } from "../util/common"

export default function SignUp(){
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [pwc, setPwc] = useState('')
    const [name, setName] = useState('')

   const onClick = () => {
        if(!useNull([email, pw, pwc, name])) return alert('회원가입 내용을 다 작성해주세요')
        if(!useCheck(pw, pwc)) return alert('비밀번호를 다시 확인해주세요')
        return alert('회원가입이 완료되었습니다')
    }

    
    return(
        <div>
            <center>
                <h1>회원가입 페이지</h1>
                <input type="text" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <input type="password" placeholder="비밀번호" onChange={(e) => setPw(e.target.value)} />
                <br />
                <br />
                <input type="password" placeholder="비밀번호 확인" onChange={(e) => setPwc(e.target.value)} />
                <br />
                <br />
                <input type="text" placeholder="성명" onChange={(e) => setName(e.target.value)} />
                <br />
                <br />
                <button onClick={onClick}>회원가입</button>
            </center>
        </div>
    )
}