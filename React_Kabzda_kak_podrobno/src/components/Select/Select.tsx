import React from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsTypes = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

const Select = (props: SelectPropsTypes) => {
    return <div>
       {/* отобразить нужный тайтл нужного айтемсаб пробежаться по всем вэлью,
        нацйти тот который совпадает и отобразить его
        фильтрайия или файндер */}
        <div>{}</div>
        {props.items.map(m => <div>{m.title}</div> )}
    </div>
};

export default Select;