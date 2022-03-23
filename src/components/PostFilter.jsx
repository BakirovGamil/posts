import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({
    filter,
    setFilter
}) {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск"
            />
            <MySelect
                value={filter.sort}
                onChange={(value) => setFilter({...filter, sort: value})}
                defaultValue="Сортировка"
                options={[
                    {value: "title", name: "По заголовку"},
                    {value: "body", name: "По описанию"}
                ]}
            />
        </div>
    );
}

export default PostFilter;