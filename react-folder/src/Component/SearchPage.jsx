import React from 'react'

export default function SearchPage({value, setValue}) {
    console.log(value);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
      };



    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input placeholder='검색어를 입력하세요'></input>
                <input type='submit' value='검색'></input>
            </form>
        </div>
    )
}
