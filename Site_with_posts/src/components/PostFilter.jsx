import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import cl from "./UI/select/MySelect.module.css";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
                value = {filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск...'
            />
            <MySelect
                className={cl.mySelectContent}
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>

    );
};

export default PostFilter;