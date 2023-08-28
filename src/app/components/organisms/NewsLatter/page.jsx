import React from 'react'
import { GrayBckground, LatterForm, NewsLatterP, NewsLatterTitle } from './style'
import Input from '../../atoms/Input/page'
import { HiOutlineMail } from 'react-icons/Hi'
import Button from '../../atoms/Button/page'


const NewsLatter = () => {
    return (

        <GrayBckground>
            <NewsLatterTitle> Subscribe on our newsletter </NewsLatterTitle>
            <NewsLatterP>Get daily news on upcoming offers from many suppliers all over the world</NewsLatterP>
            <LatterForm>
                <Input inputType={"text"} inputName={"latter"} inputPlaceholder={"Email"} />
                <HiOutlineMail />
                <Button type="submit">Subscribe</Button>

            </LatterForm>
        </GrayBckground>
    )
}

export default NewsLatter
